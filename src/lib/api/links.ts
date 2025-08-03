import { db } from "@/db";
import { links } from "@/db/schema";
import { LinkModel, LinkViewModel } from "@/types/model/link";
import { JSDOM } from "jsdom";

export async function fetchLinks(query: string): Promise<Array<LinkModel>> {
  const result = await db.select().from(links);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return result.filter((l) =>
    l.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}

export async function addLinks(link: LinkModel) {
  const result = await db
    .insert(links)
    .values({
      title: link.title,
      url: link.url,
      description: link.description,
      favicon: link.favicon,
    })
    .returning();
  return result[0];
}

export async function scrapeLinks(url: string): Promise<LinkViewModel> {
  if (!isValidUrl(url)) {
    throw new Error("Invalid URL format.");
  }

  return await scrapeMeta(url);
}

export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function scrapeMeta(url: string): Promise<LinkViewModel> {
  const res = await fetch(url);
  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const title =
    doc.querySelector("meta[property='og:title']")?.getAttribute("content") ||
    doc.querySelector("title")?.textContent ||
    "";

  const description =
    doc.querySelector("meta[name='description']")?.getAttribute("content") ||
    doc
      .querySelector("meta[property='og:description']")
      ?.getAttribute("content") ||
    "";

  const favicon =
    doc.querySelector("link[rel~='icon']")?.getAttribute("href") ||
    "/favicon.ico";

  const fullFavicon = favicon.startsWith("http")
    ? favicon
    : new URL(favicon, url).href;

  return {
    title,
    description,
    favicon: fullFavicon,
    url,
  };
}
