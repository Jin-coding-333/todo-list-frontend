"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckList } from "@/components/checkList";
import cn from "@/utils/cn";
import { TodoSectionProps } from "./landing.type";

export const TodoSection = ({ items = [], onToggle, className }: TodoSectionProps) => {
  const router = useRouter();
  const isEmpty = items.length === 0;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* 라벨 이미지 */}
      <div className="w-fit">
        <Image src="/img/todo.svg" alt="TO DO" width={101} height={36} priority />
      </div>

      <div className="flex flex-col gap-4">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* 큰 화면용 이미지 */}
            <div className="hidden md:block">
              <Image src="/img/image_todo_large.svg" alt="No Todo" width={240} height={240} />
            </div>
            {/* 작은 화면용 이미지 */}
            <div className="block md:hidden">
              <Image src="/img/image_todo_small.svg" alt="No Todo" width={120} height={120} />
            </div>
            <p className="mt-4 font-bold text-slate-400">
              할 일이 없어요.
              <br />
              TODO를 새롭게 추가해주세요!
            </p>
          </div>
        ) : (
          items.map((item) => (
            <CheckList
              key={item.id}
              title={item.title}
              isCompleted={false}
              onToggle={() => onToggle?.(item.id)}
              onClick={() => router.push(`/items/${item.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};
