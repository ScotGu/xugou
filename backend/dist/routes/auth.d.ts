import { Hono } from 'hono';
type Bindings = {
    DB: D1Database;
    JWT_SECRET: string;
};
interface D1Database {
    prepare(query: string): D1PreparedStatement;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
    exec<T = unknown>(query: string): Promise<D1Result<T>>;
}
interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = unknown>(colName?: string): Promise<T>;
    run<T = unknown>(): Promise<D1Result<T>>;
    all<T = unknown>(): Promise<D1Result<T>>;
    raw<T = unknown>(): Promise<T[]>;
}
interface D1Result<T = unknown> {
    results?: T[];
    success: boolean;
    error?: string;
    meta?: object;
}
declare const auth: Hono<{
    Bindings: Bindings;
}, import("hono/types").BlankSchema, "/">;
export default auth;
