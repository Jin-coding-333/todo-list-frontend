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
        {/* 메모 컴포넌트 전용 스크롤바 스타일 (진한 노란색 핸들, 투명 배경, 매우 얇은 너비) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #memo-scroll-area::-webkit-scrollbar {
            width: 3px !important;
            display: block !important;
          }
          #memo-scroll-area::-webkit-scrollbar-track {
            background-color: transparent !important;
          }
          #memo-scroll-area::-webkit-scrollbar-thumb {
            background-color: #FDE68A !important; /* 요청하신 특정 노란색 */
            border-radius: 10px !important;
          }
          #memo-scroll-area::-webkit-scrollbar-thumb:hover {
            background-color: #FACC15 !important;
          }
          /* Firefox 지원 */
          #memo-scroll-area {
            scrollbar-width: thin;
            scrollbar-color: #FDE68A transparent;
          }
        `,
          }}
        />

        {/* 헤더 - Memo */}
        <div className="flex h-12 items-center justify-center text-lg font-bold text-[#92400E]">
          Memo
        </div>

        {/* 텍스트 입력 영역 (세로 중앙 정렬 유지 및 하단 여백 확보) */}
        {/* 스크롤바를 10px 안쪽으로 들이기 위해 mr-[10px] 적용, 대칭을 위해 ml-[10px] 추가 */}
        <div
          id="memo-scroll-area"
          className="mx-[10px] flex h-[calc(100%-48px)] flex-col items-center justify-center overflow-y-auto pb-8"
        >
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
              "w-full bg-transparent px-2", // 내부 패딩을 px-4에서 px-2로 축소하여 공간 확보
              "text-center font-['NanumSquare'] text-[16px] leading-none font-normal text-slate-800 focus:outline-none", // 타이포그래피 사양 적용
              "resize-none overflow-visible placeholder:text-slate-400"
            )}
            style={{
              lineHeight: "32px", // 줄선 간격은 32px 유지
              height: "auto",
              maxHeight: "100%",
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
      </div>
    );
  }
);

Memo.displayName = "Memo";

export default Memo;
