"use client";

import { useState } from "react";
import { Search } from "@/components/search";
import { Button } from "@/components/button";
import cn from "@/utils/cn";
import { LandingHeaderProps } from "./landing.type";

export const LandingHeader = ({ onAdd, className }: LandingHeaderProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = () => {
    if (searchValue.trim()) {
      onAdd?.(searchValue.trim());
      setSearchValue("");
    }
  };

  const isEmpty = searchValue.trim() === "";

  return (
    <div className={cn("flex items-center gap-2 md:gap-4", className)}>
      <Search
        placeholder="할 일을 입력해주세요"
        className="flex-1"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          // 한글 IME 조합 중에는 Enter 이벤트 무시 (마지막 음절 중복 방지)
          if (e.nativeEvent.isComposing) return;
          if (e.key === "Enter") handleAdd();
        }}
      />

      {/*
        반응형 버튼 처리:
        - lg 이상(Desktop): 168x56 사이즈, 텍스트 포함
        - md: 162x56 사이즈, 텍스트 포함
        - md 미만(Mobile): 56x56 사이즈, 아이콘만 (shape="box")
      */}

      {/* Desktop/Tablet 버전 */}
      <Button
        variant={isEmpty ? "box-light" : "violet"}
        icon={isEmpty ? "plus-gray" : "plus-white"}
        className="hidden min-w-[162px] shrink-0 md:flex lg:min-w-[168px]"
        size="lg"
        onClick={handleAdd}
        disabled={isEmpty}
      >
        추가하기
      </Button>

      {/* Mobile 버전 */}
      <Button
        variant={isEmpty ? "box-light" : "violet"}
        shape="box"
        icon={isEmpty ? "plus-gray" : "plus-white"}
        iconOnly
        className="flex shrink-0 md:hidden"
        onClick={handleAdd}
        disabled={isEmpty}
      />
    </div>
  );
};
