CREATE TABLE `links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`url` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`favicon` text
);
