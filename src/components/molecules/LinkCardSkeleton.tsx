export default function LinkCardSkeleton() {
  return (
    <div className="flex gap-4 animate-pulse w-2xl">
      <div className="w-8 h-8 bg-gray-500 rounded object-contain"></div>

      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-500 rounded w-3/4"></div>
        <div className="space-y-1">
          <div className="h-3 bg-gray-500 rounded w-1/2"></div>
          <div className="h-3 bg-gray-500 rounded w-2/3"></div>
        </div>

        <div className="space-y-1">
          <div className="h-3 bg-gray-500 rounded w-1/4"></div>
          <div className="h-3 bg-gray-500 rounded w-full"></div>
          <div className="h-3 bg-gray-500 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
