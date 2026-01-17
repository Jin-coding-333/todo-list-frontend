"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckList } from "@/components/checkList";
import cn from "@/utils/cn";
import { DoneSectionProps } from "./landing.type";

export const DoneSection = ({ items = [], onToggle, className }: DoneSectionProps) => {
  const router = useRouter();
  const isEmpty = items.length === 0;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* 라벨 이미지 */}
      <div className="w-fit">
        <Image src="/img/done.svg" alt="DONE" width={101} height={36} priority />
      </div>

      <div className="flex flex-col gap-4">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* 큰 화면용 이미지 */}
            <div className="hidden md:block">
              <Image src="/img/image_done_large.svg" alt="No Done" width={240} height={240} />
            </div>
            {/* 작은 화면용 이미지 */}
            <div className="block md:hidden">
              <Image src="/img/image_done_small.svg" alt="No Done" width={120} height={120} />
            </div>
            <p className="mt-4 font-bold text-slate-400">
              아직 다 한 일이 없어요.
              <br />
              해야 할 일들을 체크해보세요!
            </p>
          </div>
        ) : (
          items.map((item) => (
            <CheckList
              key={item.id}
              title={item.title}
              isCompleted={true}
              onToggle={() => onToggle?.(item.id)}
              onClick={() => router.push(`/items/${item.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};
