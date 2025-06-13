const zhCN = {
  translation: {
    // 导航栏
    'navbar.dashboard': '仪表盘',
    'navbar.apiMonitors': 'API监控',
    'navbar.agentMonitors': '客户端监控',
    'navbar.statusPage': '状态页',
    'navbar.userManagement': '用户管理',
    'navbar.profile': '个人资料',
    'navbar.logout': '退出登录',
    'navbar.login': '登录',
    'navbar.loggedInAs': '已登录为',
    
    // 通用按钮和提示
    'common.loading': '加载中...',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.create': '创建',
    'common.back': '返回',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.actions': '操作',
    'common.status': '状态',
    'common.name': '名称',
    'common.description': '描述',
    'common.type': '类型',
    'common.url': 'URL',
    'common.created': '创建时间',
    'common.updated': '更新时间',
    'common.yes': '是',
    'common.no': '否',
    'common.confirm': '确认',
    'common.success': '成功',
    'common.error': '错误',
    'common.warning': '警告',
    'common.info': '信息',
    'common.retry': '重试',
    'common.refresh': '刷新',
    'common.deleting': '删除中...',
    'common.savingChanges': '保存中...',
    'common.saveChanges': '保存更改',
    'common.loadingError': '加载出错',
    'common.notFound': '未找到',
    'common.backToList': '返回列表',
    'common.success.deleted': '已成功删除',
    'common.success.updated': '更新成功',
    'common.error.delete': '删除失败，请重试',
    'common.error.update': '更新失败',
    'common.error.fetch': '获取数据失败',
    'common.required': '必填',
    'common.optional': '可选',
    'common.copy': '复制',
    'common.copied': '已复制',
    'common.deleteConfirmation': '确认删除',
    'common.deleteConfirmMessage': '您确定要删除吗？此操作无法撤销。',
    'common.second': '秒',
    'common.seconds': '秒',
    'common.minute': '分钟',
    'common.minutes': '分钟',
    'common.close': '关闭',
    'common.unknown': '未知',
    'common.comingSoon': '即将推出的功能',
    
    // 语言选择
    'language.zhCN': '中文',
    'language.enUS': 'English',
    
    // 首页
    'home.title': '欢迎使用 XUGOU',
    'home.subtitle': '简单易用的监控平台',
    'home.getStarted': '开始使用',
    'home.learnMore': '了解更多',
    'home.features.title': '功能特点',
    'home.features.monitoring': '实时监控',
    'home.features.monitoring.desc': '对 API 和客户端进行实时监控',
    'home.features.alerts': '告警通知',
    'home.features.alerts.desc': '当监控出现异常时，及时通知您',
    'home.features.dashboard': '可视化仪表盘',
    'home.features.dashboard.desc': '直观展示监控数据和统计信息',
    'home.features.statusPage': '状态页',
    'home.features.statusPage.desc': '提供公开的服务状态页面',
    
    // 登录页面
    'login.title': '登录',
    'login.username': '用户名',
    'login.password': '密码',
    'login.button': '登录',
    'login.registerLink': '没有账号？注册',
    'login.rememberMe': '记住我',
    'login.error': '用户名或密码错误',
    
    // 注册页面
    'register.title': '注册',
    'register.username': '用户名',
    'register.password': '密码',
    'register.confirmPassword': '确认密码',
    'register.email': '电子邮箱',
    'register.button': '注册',
    'register.loginLink': '已有账号？登录',
    'register.error.passwordMismatch': '两次输入的密码不一致',
    'register.error.usernameExists': '用户名已存在',
    'register.error.emailExists': '邮箱已存在',
    'register.success.message': '注册成功，请登录',
    
    // 仪表盘
    'dashboard.title': '仪表盘',
    'dashboard.summary': '概览',
    'dashboard.totalMonitors': '监控总数',
    'dashboard.activeMonitors': '活动监控',
    'dashboard.failingMonitors': '异常监控',
    'dashboard.uptime': '正常运行时间',
    'dashboard.responseTime': '响应时间',
    'dashboard.recent': '最近事件',
    'dashboard.noEvents': '暂无事件',
    'dashboard.refresh': '刷新',
    
    // 监控列表
    'monitors.title': '监控列表',
    'monitors.create': '创建监控',
    'monitors.noMonitors': '暂无监控',
    'monitors.filter.all': '全部',
    'monitors.filter.active': '活动',
    'monitors.filter.paused': '暂停',
    'monitors.status.up': '正常',
    'monitors.status.down': '异常',
    'monitors.status.paused': '暂停',
    'monitors.lastChecked': '最后检查',
    'monitors.pageTitle': 'API监控',
    'monitors.loadingError': '获取监控数据失败',
    'monitors.delete.confirm': '确定要删除此监控吗？',
    'monitors.delete.failed': '删除监控失败',
    'monitors.addOne': '添加监控',
    'monitors.notFound': '没有找到监控',
    'monitors.cardView': '卡片视图',
    'monitors.tableView': '列表视图',
    'monitors.refresh': '刷新',
    'monitors.retry': '重试',
    'monitors.table.name': '名称',
    'monitors.table.url': 'URL',
    'monitors.table.status': '状态',
    'monitors.table.responseTime': '响应时间',
    'monitors.table.uptime': '可用率',
    'monitors.table.actions': '操作',
    'monitors.viewDetails': '查看详情',
    'monitors.edit': '编辑监控',
    'monitors.delete': '删除监控',
    
    // 监控详情
    'monitor.details': '监控详情',
    'monitor.edit': '编辑监控',
    'monitor.delete': '删除监控',
    'monitor.pause': '暂停监控',
    'monitor.resume': '恢复监控',
    'monitor.history': '历史记录',
    'monitor.uptime': '正常运行时间',
    'monitor.responseTime': '响应时间',
    'monitor.events': '事件',
    'monitor.noEvents': '暂无事件',
    'monitor.manualCheck': '手动检查',
    'monitor.checkCompleted': '监控检查已完成',
    'monitor.checkFailed': '检查失败',
    'monitor.deleteSuccess': '监控已成功删除',
    'monitor.deleteFailed': '删除监控失败',
    'monitor.notExist': '监控不存在',
    'monitor.returnToList': '返回监控列表',
    
    // 监控详情页标签
    'monitor.tabs.overview': '概览',
    'monitor.tabs.history': '检查历史',
    'monitor.tabs.settings': '配置详情',
    
    // 监控状态信息
    'monitor.status.info': '状态信息',
    'monitor.status.normal': '正常',
    'monitor.status.failure': '故障',
    'monitor.status.pending': '等待检查',
    'monitor.notChecked': '尚未检查',
    'monitor.lastCheck': '最后检查',
    
    // 基本信息
    'monitor.basicInfo': '基本信息',
    'monitor.method': '方法',
    'monitor.interval': '检查间隔',
    'monitor.timeout': '超时时间',
    'monitor.expectedStatus': '预期状态码',
    'monitor.createTime': '创建时间',
    
    // 检查历史记录
    'monitor.checkHistory': '检查历史',
    'monitor.noCheckHistory': '暂无检查历史记录',
    'monitor.history.time': '时间',
    'monitor.history.status': '状态',
    'monitor.history.responseTime': '响应时间',
    'monitor.history.statusCode': '状态码',
    'monitor.history.error': '错误',
    
    // 配置详情
    'monitor.configDetails': '配置详情',
    'monitor.active': '激活',
    'monitor.inactive': '未激活',
    'monitor.headers': '请求头',
    'monitor.body': '请求体',
    
    // 创建/编辑监控
    'monitor.form.title.create': '创建监控',
    'monitor.form.title.edit': '编辑监控',
    'monitor.form.name': '监控名称',
    'monitor.form.namePlaceholder': '输入监控名称',
    'monitor.form.url': 'URL',
    'monitor.form.urlPlaceholder': '输入要监控的URL',
    'monitor.form.method': '请求方法',
    'monitor.form.interval': '检查间隔（分钟）',
    'monitor.form.intervalMin': '最小间隔 1 分钟',
    'monitor.form.timeout': '超时时间（秒）',
    'monitor.form.expectedStatus': '预期状态码',
    'monitor.form.headers': '请求头',
    'monitor.form.headerName': '名称',
    'monitor.form.headerValue': '值',
    'monitor.form.headerNamePlaceholder': 'Header Name',
    'monitor.form.headerValuePlaceholder': 'Header Value',
    'monitor.form.addHeader': '添加请求头',
    'monitor.form.headersHelp': '添加请求头，例如：Content-Type: application/json',
    'monitor.form.body': '请求体',
    'monitor.form.bodyPlaceholder': '请求体内容',
    'monitor.form.cancel': '取消',
    'monitor.form.creating': '创建中...',
    'monitor.form.create': '创建监控',
    'monitor.form.updating': '更新中...',
    'monitor.form.update': '更新监控',
    'monitor.form.createFailed': '创建监控失败，请稍后重试',
    'monitor.form.updateFailed': '更新监控失败',
    'monitor.form.unknownError': '未知错误',
    'monitor.form.required': '必填',
    
    // 客户端监控
    'agents.title': '客户端列表',
    'agents.create': '添加客户端',
    'agents.noAgents': '暂无客户端',
    'agents.pageTitle': '客户端监控',
    'agents.viewAll': '查看所有客户端',
    'agents.loadingDetail': '加载客户端详情中...',
    'agents.loadingList': '加载客户端列表中...',
    'agents.notFound': '客户端未找到',
    'agents.notFoundId': '找不到ID为 {id} 的客户端',
    'agents.cardView': '卡片视图',
    'agents.tableView': '表格视图',
    'agents.addAgent': '添加客户端',
    'agents.system': '系统状态',
    'agents.copyCommand': '复制命令',
    'agents.table.name': '名称',
    'agents.table.host': '主机名',
    'agents.table.ip': 'IP地址',
    'agents.table.status': '状态',
    'agents.table.os': '操作系统',
    'agents.table.version': '版本',
    'agents.table.actions': '操作',
    
    // 客户端详情
    'agent.details': '客户端详情',
    'agent.edit': '编辑客户端',
    'agent.delete': '删除客户端',
    'agent.status.online': '在线',
    'agent.status.connecting': '连接中',
    'agent.status.offline': '离线',
    'agent.lastSeen': '上次在线',
    'agent.uptime': '运行时间',
    'agent.lastUpdated': '上次更新',
    'agent.systemInfo': '系统信息',
    'agent.systemResources': '系统资源',
    'agent.os': '系统',
    'agent.version': '版本',
    'agent.hostname': '主机名',
    'agent.ipAddress': 'IP地址',
    'agent.systemStatus': '系统状态',
    'agent.deleteConfirm': '确定要删除此客户端吗？此操作无法撤销。',
    'agent.deleting': '正在删除客户端...',
    'agent.deleteSuccess': '客户端已成功删除',
    'agent.deleteError': '删除客户端失败',
    
    // 创建/编辑客户端
    'agent.form.title.create': '添加客户端',
    'agent.form.title.edit': '编辑客户端',
    'agent.form.editingClient': '编辑客户端: {name}',
    'agent.form.name': '客户端名称',
    'agent.form.namePlaceholder': '请输入客户端名称',
    'agent.form.nameHelp': '为客户端设置一个能够识别的名称',
    'agent.form.updateSuccess': '客户端更新成功',
    'agent.form.updateError': '更新失败',
    
    // 添加客户端页面
    'agent.add.note': '客户端将在运行安装命令后自动添加到系统中，无需手动创建',
    'agent.add.serverAddress': '服务端地址',
    'agent.add.serverAddressPlaceholder': '请输入服务端地址，例如：https://xugou.example.com',
    'agent.add.serverAddressHelp': '请确保此地址可以从客户端服务器访问',
    'agent.add.registrationToken': '注册Token',
    'agent.add.generatingToken': '正在生成Token...',
    'agent.add.tokenHelp': '此令牌将用于您的客户端向服务器注册身份，有效期为24小时',
    'agent.add.installGuide': '安装指南',
    'agent.add.installSteps': '按照以下两个步骤安装并注册客户端',
    'agent.add.step1': '步骤 1: 下载客户端二进制文件',
    'agent.add.step1Help': '此命令将从 Cloudflare R2 存储下载最新版客户端二进制文件并赋予可执行权限',
    'agent.add.step2': '步骤 2: 注册并启动客户端',
    'agent.add.step2Help': '此命令将启动客户端，并使用生成的令牌自动注册到服务端。参数 interval 表示上报间隔（秒）',
    'agent.add.optionalSetup': '（可选）将客户端设置为系统服务',
    'agent.add.optionalSetupHelp': '在 Linux/Unix 系统上，您可以使用以下命令创建系统服务',
    'agent.add.returnToList': '返回客户端列表',
    
    // 用户管理
    'users.title': '用户管理',
    'users.create': '创建用户',
    'users.noUsers': '暂无用户数据',
    'users.error.fetch': '获取用户列表失败',
    'users.error.delete': '删除用户失败',
    'users.deleteConfirm': '您确定要删除用户 "{username}" 吗？此操作无法撤销。',
    'user.username': '用户名',
    'user.email': '电子邮箱',
    'user.role': '角色',
    'user.status': '状态',
    'user.created': '创建时间',
    'user.actions': '操作',
    
    // 用户资料
    'profile.title': '个人资料',
    'profile.edit': '编辑资料',
    'profile.changePassword': '修改密码',
    'profile.changePasswordButton': '修改密码',
    'profile.apiKeys': 'API密钥',
    'profile.createApiKey': '创建API密钥',
    'profile.notifications': '通知设置',
    'profile.basicInfo': '基本信息',
    'profile.update': '更新个人资料',
    'profile.currentPassword': '当前密码',
    'profile.newPassword': '新密码',
    'profile.confirmNewPassword': '确认新密码',
    'profile.error.notLoggedIn': '用户未登录',
    'profile.error.passwordMismatch': '两次输入的密码不匹配',
    'profile.error.update': '更新个人资料失败',
    'profile.error.passwordChange': '修改密码失败',
    'profile.success.updated': '个人资料更新成功',
    'profile.success.passwordChanged': '密码修改成功',
    
    // 状态页
    'statusPage.title': '系统状态',
    'statusPage.allOperational': '所有系统正常运行',
    'statusPage.someIssues': '部分系统存在问题',
    'statusPage.majorOutage': '系统存在重大故障',
    'statusPage.incidents': '事件',
    'statusPage.noIncidents': '过去 30 天内无事件',
    'statusPage.history': '历史记录',
    'statusPage.lastUpdated': '最后更新',
    'statusPage.justNow': '刚刚',
    'statusPage.apiServices': 'API服务状态',
    'statusPage.agentStatus': '客户端监控状态',
    'statusPage.cancelPreviousRequest': 'StatusPage: 取消之前的请求',
    'statusPage.fetchingData': 'StatusPage: 正在获取状态页数据...',
    'statusPage.dataResponse': 'StatusPage: 获取到状态页数据响应:',
    'statusPage.requestCancelled': 'StatusPage: 请求已被取消',
    'statusPage.processingData': 'StatusPage: 处理状态页数据:',
    'statusPage.fetchError': 'StatusPage: 获取状态页数据失败',
    'statusPage.autoRefresh': 'StatusPage: 自动刷新数据...',
    'statusPage.componentUnmount': 'StatusPage: 组件卸载，清除定时器',
    'statusPage.displayResourceData': '显示资源数据:',
    
    // 状态页配置
    'statusPageConfig.title': '状态页配置',
    'statusPageConfig.preview': '预览状态页',
    'statusPageConfig.save': '保存配置',
    'statusPageConfig.general': '基本设置',
    'statusPageConfig.services': 'API服务设置',
    'statusPageConfig.agents': '客户端设置',
    'statusPageConfig.appearance': '外观设置',
    'statusPageConfig.pageTitle': '状态页标题',
    'statusPageConfig.pageTitlePlaceholder': '输入状态页标题',
    'statusPageConfig.pageDescription': '状态页描述',
    'statusPageConfig.pageDescriptionPlaceholder': '输入状态页描述',
    'statusPageConfig.publicUrl': '公共访问URL',
    'statusPageConfig.publicUrlHelp': '此URL可以公开分享，无需登录即可访问',
    'statusPageConfig.selectionNote': '注意：如果您没有选择任何API服务或客户端，对应的部分将不会在状态页上显示。',
    'statusPageConfig.selectServicesPrompt': '选择要在状态页上显示的API服务',
    'statusPageConfig.selectAgentsPrompt': '选择要在状态页上显示的客户端',
    'statusPageConfig.logoUrl': 'Logo URL (可选)',
    'statusPageConfig.logoUrlPlaceholder': '输入logo图片的URL',
    'statusPageConfig.customCss': '自定义CSS (可选)',
    'statusPageConfig.customCssPlaceholder': '输入自定义CSS样式',
    'statusPageConfig.customCssHelp': '高级用户可以添加自定义CSS来修改状态页的外观',
    'statusPageConfig.configSaved': '状态页配置已保存',
    'statusPageConfig.saveError': '保存状态页配置失败',
    'statusPageConfig.fetchingConfig': '开始获取状态页配置...',
    'statusPageConfig.configFromProperty': '从config属性获取的状态页配置:',
    'statusPageConfig.tryingDirectResponse': 'API响应似乎直接包含配置数据，尝试直接使用',
    'statusPageConfig.parseError': '尝试解析API响应失败:',
    'statusPageConfig.receivedConfig': '获取到的状态页配置:',
    'statusPageConfig.monitorListType': '监控项列表类型:',
    'statusPageConfig.monitorCount': '监控项数量:',
    'statusPageConfig.configMonitor': '配置中的监控项',
    'statusPageConfig.noValidConfig': '未获取到有效的状态页配置或配置为空',
    'statusPageConfig.invalidResponse': 'API响应无效',
    'statusPageConfig.fetchingMonitors': '开始获取所有监控项...',
    'statusPageConfig.monitorsResponse': '获取所有监控项响应:',
    'statusPageConfig.foundMonitor': '找到配置中的监控项',
    'statusPageConfig.originalStatus': '原始选中状态',
    'statusPageConfig.processedStatus': '处理后的选中状态',
    'statusPageConfig.notFoundMonitor': '未在配置中找到监控项',
    'statusPageConfig.finalMonitorResult': '最终监控项处理结果',
    'statusPageConfig.selectedStatus': '选中状态',
    'statusPageConfig.processedMonitorList': '处理后的监控项列表',
    'statusPageConfig.fetchingAgents': '开始获取所有客户端...',
    'statusPageConfig.foundAgent': '找到配置中的客户端',
    'statusPageConfig.notFoundAgent': '未在配置中找到客户端',
    'statusPageConfig.finalAgentResult': '最终客户端处理结果',
    'statusPageConfig.processedAgentList': '处理后的客户端列表',
    'statusPageConfig.fetchMonitorsError': '获取监控数据失败',
    'statusPageConfig.fetchDataError': '获取数据失败',
    'statusPageConfig.configLoaded': '状态页配置加载完成，验证监控项选中状态:',
    'statusPageConfig.invalidAgentId': '尝试更改无效的客户端ID:',
    'statusPageConfig.savingConfig': '准备保存配置对象:',
    'statusPageConfig.selectedMonitors': '选中的监控项:',
    'statusPageConfig.selectedMonitorIds': '选中的监控项ID列表:',
    'statusPageConfig.callingSaveApi': '开始调用保存配置API...',
    'statusPageConfig.saveApiResponse': '保存配置API响应:',
    'statusPageConfig.serviceRendering': '服务渲染',
    'statusPageConfig.agentRendering': '客户端渲染',
    'statusPageConfig.monitorStatusChange': '监控项状态变更',
    'statusPageConfig.agentStatusChange': '客户端状态变更',
    'statusPageConfig.from': '从',
    'statusPageConfig.to': '变为',
    'statusPageConfig.components': '组件',
    'statusPageConfig.addComponent': '添加组件',
    'statusPageConfig.incidents': '事件',
    'statusPageConfig.createIncident': '创建事件',
    
    // 404页面
    'notFound.title': '页面未找到',
    'notFound.message': '您访问的页面不存在',
    'notFound.button': '返回首页',
    
    // Auth 相关
    'auth.error.fetchUser': '获取用户信息失败',
    'auth.error.login': '登录失败',
    'auth.error.register': '注册失败',
    'login.error.tryAgain': '登录失败，请稍后再试',
    'register.error.tryAgain': '注册失败，请稍后再试',
    
    // 页脚
    'footer.copyright': '© {year} XUGOU. 保留所有权利。',
    'footer.blog': '博客',
    'footer.youtube': '油管频道',
    'footer.tempMail': '24小时临时邮箱',
    
    // AgentCard 组件
    'agentCard.receivedData': 'AgentCard接收到的客户端数据',
    'agentCard.calculatedResource': '计算后的资源使用情况',
    'agentCard.noMetrics': '客户端没有资源指标数据',
    'agentCard.resourceError': '解析客户端资源使用数据失败',
    'agentCard.status.active': '活跃',
    'agentCard.status.inactive': '离线',
    'agentCard.status.connecting': '连接中',
    
    // ClientResourceSection 组件
    'clientResource.cpu': 'CPU',
    'clientResource.memory': '内存',
    'clientResource.disk': '磁盘',
    'clientResource.network': '网络流量',
    'clientResource.download': '下载',
    'clientResource.upload': '上传',
    
    // MonitorCard 组件
    'monitorCard.status.up': '正常',
    'monitorCard.status.down': '故障',
    'monitorCard.status.pending': '等待检查',
    'monitorCard.responseTime': '响应时间',
    'monitorCard.unknown': '未知',
    
    // ResourceBar 组件
    'resourceBar.title': '资源使用量进度条',
    
    // StatusSummaryCard 组件
    'statusSummary.title': '状态摘要',
    
    // HeartbeatGrid 组件
    'heartbeatGrid.uptime': '正常运行',
    'heartbeatGrid.up': '正常',
    'heartbeatGrid.down': '故障',
    'heartbeatGrid.unknownTime': '未知时间',
  }
};

export default zhCN; 