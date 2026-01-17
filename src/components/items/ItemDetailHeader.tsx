"use client";

import { CheckList } from "@/components/checkList";
import cn from "@/utils/cn";
import { ItemDetailHeaderProps } from "./items.type";

export const ItemDetailHeader = ({
  title,
  isCompleted,
  onToggle,
  className,
}: ItemDetailHeaderProps) => {
  return (
    <div className={cn("w-full py-4", className)}>
      <CheckList
        variant="detail"
        title={title}
        isCompleted={isCompleted}
        onToggle={onToggle}
        className="w-full"
      />
    </div>
  );
};
