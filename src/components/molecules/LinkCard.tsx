/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { LinkViewModel } from "@/types/model/link";

import { HTMLAttributes } from "react";

type LinkCardProps = HTMLAttributes<HTMLBaseElement> & LinkViewModel;

export default function LinkCard({
  title,
  url,
  description,
  favicon,
  className,
}: LinkCardProps) {
  return (
    <a target="_blank" href={url} className={cn("flex gap-4", className)}>
      <img
        className="max-w-2xs rounded-x object-contain"
        src={favicon || undefined}
        alt="favicon.png"
      />
      <div>
        <h1 className="font-bold">{title}</h1>
        <h2>
          <b>URL: </b>
          {url}
        </h2>
        <label className="font-bold">Description: </label>
        <p>{description}</p>
      </div>
    </a>
  );
}
