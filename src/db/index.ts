// db/index.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

const sqlite = new Database("sqlite.db");
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
});
