import LinkCardSkeleton from "../molecules/LinkCardSkeleton";

export default function LinkListsSkeleton() {
  return (
    <div className="flex flex-col gap-y-6">
      <LinkCardSkeleton />
      <LinkCardSkeleton />
      <LinkCardSkeleton />
    </div>
  );
}
