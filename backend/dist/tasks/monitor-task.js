"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const monitorTask = new hono_1.Hono();
// 监控检查的主要函数
async function checkMonitors(c) {
    try {
        console.log('开始执行监控检查...');
        // 获取当前时间
        const now = new Date();
        // 查询需要检查的监控
        // 条件：active=true 且 (last_checked 为 null 或 当前时间 - last_checked > interval)
        const monitors = await c.env.DB.prepare(`
      SELECT * FROM monitors 
      WHERE active = true 
      AND (last_checked IS NULL OR datetime('now') > datetime(last_checked, '+' || interval || ' seconds'))
    `).all();
        console.log(`找到 ${monitors?.results?.length || 0} 个需要检查的监控`);
        if (!monitors.results || monitors.results.length === 0) {
            return { success: true, message: '没有需要检查的监控', checked: 0 };
        }
        // 检查每个监控
        const results = await Promise.all(monitors.results.map(async (monitor) => {
            return await checkSingleMonitor(c, monitor);
        }));
        return {
            success: true,
            message: '监控检查完成',
            checked: results.length,
            results: results
        };
    }
    catch (error) {
        console.error('监控检查出错:', error);
        return { success: false, message: '监控检查出错', error: String(error) };
    }
}
// 检查单个监控的函数
async function checkSingleMonitor(c, monitor) {
    try {
        console.log(`开始检查监控项: ${monitor.name} (${monitor.url})`);
        const startTime = Date.now();
        const response = await fetch(monitor.url, {
            method: monitor.method,
            headers: {
                'User-Agent': 'Xugou-Monitor/1.0',
                ...(monitor.headers ? JSON.parse(monitor.headers) : {})
            },
            body: monitor.body || undefined
        });
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        // 检查响应状态
        const isUp = response.status === monitor.expected_status;
        const status = isUp ? 'up' : 'down';
        // 记录状态历史
        await c.env.DB.prepare(`INSERT INTO monitor_status_history (monitor_id, status, timestamp) 
       VALUES (?, ?, datetime('now'))`).bind(monitor.id, status).run();
        // 更新监控项状态
        await c.env.DB.prepare(`UPDATE monitors 
       SET status = ?, 
           last_checked = datetime('now'),
           response_time = ?,
           uptime = CASE 
             WHEN status = 'up' THEN uptime + 1
             ELSE uptime
           END
       WHERE id = ?`).bind(status, responseTime, monitor.id).run();
        console.log(`监控项检查完成: ${monitor.name}, 状态: ${status}, 响应时间: ${responseTime}ms`);
        return {
            success: true,
            status,
            responseTime
        };
    }
    catch (error) {
        console.error(`检查监控项失败: ${monitor.name}`, error);
        // 记录错误状态
        await c.env.DB.prepare(`INSERT INTO monitor_status_history (monitor_id, status, timestamp) 
       VALUES (?, ?, datetime('now'))`).bind(monitor.id, 'down').run();
        // 更新监控项状态
        await c.env.DB.prepare(`UPDATE monitors 
       SET status = 'down', 
           last_checked = datetime('now')
       WHERE id = ?`).bind(monitor.id).run();
        return {
            success: false,
            status: 'down',
            error: error.message
        };
    }
}
// 定义触发器路由 - 通过HTTP请求触发监控检查
monitorTask.get('/api/trigger-check', async (c) => {
    const result = await checkMonitors(c);
    return c.json(result);
});
// 在 Cloudflare Workers 中设置定时触发器
exports.default = {
    async scheduled(event, env, ctx) {
        const c = { env };
        await checkMonitors(c);
    },
    fetch: monitorTask.fetch
};
//# sourceMappingURL=monitor-task.js.map