import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";

export const links = sqliteTable("links", {
  id: int("id").primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  favicon: text("favicon"),
});
