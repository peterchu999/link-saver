import LinkLists from "@/components/organisms/LinkLists";
import SearchBar from "@/components/organisms/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const query = (await searchParams).q || "";
  return (
    <>
      <h1 className="text-xl font-bold">Link Saver</h1>
      <SearchBar />
      <LinkLists query={query} />
    </>
  );
}
