// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ChartOptionsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative mb-2 overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-6 w-6 rounded-full bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1 truncate rounded-xl bg-white px-4 py-3">
        <div className="h-7  w-full rounded-md bg-gray-200 " />
        <div className="h-7  w-full rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <div
      className={`${shimmer} relative mb-2 overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="-mx-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex flex-col  truncate rounded-xl bg-white px-4 py-4">
        <div className="my-1 h-7 w-full rounded-md bg-gray-200" />
        <div className="my-1 h-7 w-full rounded-md bg-gray-200" />
        <div className="my-1 h-7 w-full rounded-md bg-gray-200" />
        <div className="my-1 h-7 w-full rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
