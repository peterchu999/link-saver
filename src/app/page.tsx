import LinkLists from "@/components/organisms/LinkLists";
import SearchBar from "@/components/organisms/SearchBar";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const query = searchParams.q || "";
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start w-[100%]">
        <h1 className="text-xl font-bold">Link Saver</h1>
        <SearchBar />
        <LinkLists query={query} />
      </main>
    </div>
  );
}
