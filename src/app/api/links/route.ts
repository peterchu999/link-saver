import { addLinks, fetchLinks, scrapeLinks } from "@/lib/api/links";
import { validateLinkInput } from "@/lib/validate/links";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  return NextResponse.json(await fetchLinks(query));
}

export async function POST(request: Request) {
  const reqBody = await request.json();
  let response = {};
  try {
    switch (reqBody?.event?.toLocaleLowerCase()) {
      case "preview":
        response = await scrapeLinks(reqBody?.url || "");
        break;
      case "add":
        const parsed = validateLinkInput(reqBody.link);
        if (!parsed.success) {
          throw new Error(parsed.error.message);
        }
        response = addLinks(reqBody.link);
        break;
      default:
        return NextResponse.json({ error: "No Such Event" }, { status: 400 });
    }
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "error on database" }, { status: 400 });
  }
  return NextResponse.json(response);
}
