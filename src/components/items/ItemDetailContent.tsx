"use client";

import { ImageLoader } from "@/components/imageLoader";
import { Memo } from "@/components/memo";
import cn from "@/utils/cn";
import { ItemDetailContentProps } from "./items.type";

export const ItemDetailContent = ({
  imageUrl,
  memo,
  onImageFileSelect,
  onImageRemove,
  onMemoChange,
  className,
}: ItemDetailContentProps) => {
  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:justify-between", className)}>
      {/* 이미지 로더 섹션 */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <ImageLoader src={imageUrl} onFileSelect={onImageFileSelect} onRemove={onImageRemove} />
      </div>

      {/* 메모 섹션 */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <Memo
          value={memo}
          onChange={(val) => onMemoChange?.(val)}
          className="h-full min-h-[300px]"
        />
      </div>
    </div>
  );
};
