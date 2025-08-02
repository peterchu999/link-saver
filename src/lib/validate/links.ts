// lib/validateLink.ts
import { LinkModel } from "@/types/model/link";
import { z } from "zod";

export const LinkInputSchema = z.object({
  url: z.url(),
  title: z.string().min(1),
  description: z.string().optional(),
  favicon: z.url().optional(),
});

export function validateLinkInput(data: LinkModel) {
  return LinkInputSchema.safeParse(data);
}
