"use client";

import { forwardRef } from "react";
import { CheckListProps } from "./CheckList.type";
import { Icons } from "@/components/icons";
import cn from "@/utils/cn";
import { containerStyles, checkboxStyles, deleteButtonStyles, textStyles } from "./styles";

export const CheckList = forwardRef<HTMLDivElement, CheckListProps>(
  (
    {
      title,
      isCompleted = false,
      variant = "default",
      onToggle,
      onClick,
      onDelete,
      className,
    },
    ref
  ) => {
    // 체크박스 클릭 핸들러
    const handleCheckboxClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 부모 onClick 방지
      onToggle?.();
    };

    // 삭제 버튼 클릭 핸들러
    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 부모 onClick 방지
      onDelete?.();
    };

    // 전체 컨테이너 클릭 핸들러
    const handleContainerClick = () => {
      if (variant === "detail") {
        onToggle?.();
      }
      onClick?.();
    };

    return (
      <div
        ref={ref}
        onClick={handleContainerClick}
        className={cn(
          containerStyles.base,
          containerStyles.variants[variant],
          isCompleted ? containerStyles.completed : containerStyles.notCompleted,
          className
        )}
      >
        {/* 체크박스 아이콘 */}
        <button
          type="button"
          onClick={handleCheckboxClick}
          className={checkboxStyles}
          aria-label={isCompleted ? "완료 취소" : "완료 처리"}
        >
          <Icons name={isCompleted ? "check-in-circle" : "empty-circle"} size={32} />
        </button>

        {/* 할 일 제목 */}
        <span
          className={cn(
            textStyles.base,
            textStyles.variants[variant],
            isCompleted && textStyles.completed
          )}
        >
          {title}
        </span>

        {/* 삭제 버튼 (onDelete가 있을 때만 표시) */}
        {onDelete && (
          <button
            type="button"
            onClick={handleRemoveClick}
            className={deleteButtonStyles}
            aria-label="삭제하기"
          >
            <Icons name="X" size={24} />
          </button>
        )}
      </div>
    );
  }
);

CheckList.displayName = "CheckList";

export default CheckList;
