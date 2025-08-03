import { fetchLinks } from "@/lib/api/links";
import LinkCard from "@/components/molecules/LinkCard";
import { LinkModel } from "@/types/model/link";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || "";

  const links = await fetchLinks(query);

  return (
    <div className="flex flex-col gap-y-6">
      {links.map(({ id, ...link }: LinkModel) => (
        <LinkCard key={id.toString()} {...link} />
      ))}
      {links.length < 1 && <h1 className="font-black">No data found</h1>}
    </div>
  );
}
