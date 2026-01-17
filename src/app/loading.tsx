import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div>
          <Image src="/img/image_done_large.svg" alt="Loading" width={120} height={110} priority />
        </div>
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>
        </div>
        <p className="animate-pulse text-lg font-medium tracking-wide text-slate-700">Loading...</p>
      </div>
    </div>
  );
}
