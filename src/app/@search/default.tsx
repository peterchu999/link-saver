import { fetchLinks } from "@/lib/api/links";
import LinkCard from "@/components/molecules/LinkCard";
import { LinkModel } from "@/types/model/link";

export default async function DefaultSearchPage() {
  const links = await fetchLinks("");

  return (
    <div className="flex flex-col gap-y-6">
      {links.map(({ id, ...link }: LinkModel) => (
        <LinkCard key={id.toString()} {...link} />
      ))}
      {links.length < 1 && <h1 className="font-black">No data found</h1>}
    </div>
  );
}
