import { fetchLinks } from "@/lib/api/links";
import { LinkModel } from "@/types/model/link";
import LinkCard from "../molecules/LinkCard";

type LinkListsProps = {
  query: string;
};

export default async function LinkLists({ query }: LinkListsProps) {
  const links = await fetchLinks(query);
  return (
    <div className="flex flex-col gap-y-6">
      {links.map((link: LinkModel, idx: number) => (
        <LinkCard key={idx} {...link} />
      ))}
      {links.length < 1 && <h1 className="font-black">No data found</h1>}
    </div>
  );
}
