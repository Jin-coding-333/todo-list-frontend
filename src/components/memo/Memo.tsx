"use client";

import { forwardRef, useState, useEffect, useRef } from "react";
import { MemoProps } from "./Memo.type";
import cn from "@/utils/cn";

export const Memo = forwardRef<HTMLDivElement, MemoProps>(
  (
    {
      value: propsValue,
      onChange,
      placeholder = "메모를 입력해주세요",
      className,
      disabled = false,
    },
    ref
  ) => {
    // 내부 상태 (uncontrolled 지원)
    const [internalValue, setInternalValue] = useState(propsValue || "");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (propsValue !== undefined) {
        setInternalValue(propsValue);
      }
    }, [propsValue]);

    const value = propsValue !== undefined ? propsValue : internalValue;

    // 텍스트 길이에 따라 textarea 높이 자동 조절
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value]);

    const handleValueChange = (val: string) => {
      if (propsValue === undefined) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          "h-[311px] w-full lg:w-[588px]",
          "rounded-3xl",
          "bg-[#FFFEE8]", // 연한 노란색 배경
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        style={{
          // 줄선 효과: 헤더와 텍스트 시작 위치를 고려하여 포지셔닝
          backgroundImage: `linear-gradient(#FDE68A 1px, transparent 1px)`,
          backgroundSize: "100% 32px",
          backgroundPosition: "0 48px", // "Memo" 헤더 영역(48px) 뒤부터 선이 시작되도록 함
        }}
      >
        {/* 헤더 - Memo */}
        <div className="flex h-12 items-center justify-center text-lg font-bold text-[#92400E]">
          Memo
        </div>

        {/* 텍스트 입력 영역 */}
        {/* 스크롤바를 10px 안쪽으로 들이기 위해 mr-[10px] 적용, 대칭을 위해 ml-[10px] 추가 */}
        <div
          id="memo-scroll-area"
          className="mx-[10px] mb-8 h-[calc(100%-80px)] overflow-y-auto pb-12"
        >
          <div className="flex min-h-full items-center justify-center pt-14 pb-4">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                handleValueChange(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // 한영 전환 시 중복 입력 방지
                  if (e.nativeEvent.isComposing) return;
                }
              }}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                "w-full bg-transparent px-2",
                "text-center font-['NanumSquare'] text-[16px] leading-none font-normal text-slate-800 focus:outline-none", // 타이포그래피 사양 적용
                "resize-none overflow-hidden placeholder:text-slate-400"
              )}
              style={{
                lineHeight: "32px", // 줄선 간격은 32px 유지
                minHeight: "32px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

Memo.displayName = "Memo";

export default Memo;
