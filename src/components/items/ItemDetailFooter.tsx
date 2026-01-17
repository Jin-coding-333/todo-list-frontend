"use client";

import { Button } from "@/components/button";
import cn from "@/utils/cn";
import { ItemDetailFooterProps } from "./items.type";

export const ItemDetailFooter = ({
  onSave,
  onDelete,
  isSaveDisabled,
  className,
}: ItemDetailFooterProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-6 lg:justify-end", className)}>
      <Button
        variant={isSaveDisabled ? "box-light" : "primary"}
        icon={isSaveDisabled ? "check" : "check"} // Primary variant might have a different icon color, but both use 'check'
        onClick={onSave}
        className="min-w-[168px]"
        disabled={isSaveDisabled}
      >
        수정 완료
      </Button>
      <Button variant="danger" icon="X" onClick={onDelete} className="min-w-[168px]">
        삭제하기
      </Button>
    </div>
  );
};
