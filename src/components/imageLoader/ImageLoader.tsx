"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";
import { ImageLoaderProps } from "./ImageLoader.type";
import { Icons } from "@/components/icons";
import { Button } from "@/components/button";
import cn from "@/utils/cn";

export const ImageLoader = forwardRef<HTMLDivElement, ImageLoaderProps>(
  ({ src, alt = "업로드된 이미지", onFileSelect, onRemove, className, disabled = false }, ref) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    // URL 안전 처리 (한글 깨짐 및 NFD/NFC 대응)
    // 파일 선택 클릭 (컨테이너/이미지 클릭 시)
    const handleClick = () => {
      if (!disabled && fileInputRef.current) {
        // 이미지가 있든 없든 클릭하면 파일 선택창 열기
        fileInputRef.current.click();
      }
    };

    // 수정 버튼(FAB) 전용 핸들러
    const handleEditClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation(); // 컨테이너의 handleClick 중복 방지
      fileInputRef.current?.click();
    };

    // 파일 변경 핸들러
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // 5MB 제한 (5 * 1024 * 1024 bytes)
        if (file.size > 5 * 1024 * 1024) {
          alert("파일 크기는 5MB 이하여야 합니다.");
          e.target.value = ""; // 초기화
          return;
        }

        if (onFileSelect) {
          onFileSelect(file);
        }
      }
      // 같은 파일 재선택 가능하도록 초기화
      e.target.value = "";
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          "group relative",
          "h-[311px] w-full lg:w-[384px]",
          "rounded-3xl bg-slate-50 transition-colors duration-200",
          !disabled && "cursor-pointer hover:bg-slate-100",
          "overflow-hidden",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        style={{
          // 이미지가 없을 때만 점선 보더 표시 (이미지 로드 시 뒤에 비치는 '깨짐' 현상 방지)
          backgroundImage: !src
            ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23CBD5E1' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
            : "none",
        }}
      >
        {src ? (
          <div className="relative h-full w-full">
            <img src={src} alt={alt} className="h-full w-full object-cover" />
            {onRemove && !disabled && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove();
                }}
                className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm transition-colors hover:bg-slate-900/70"
                aria-label="이미지 삭제"
              >
                <Icons name="X" size={16} />
              </button>
            )}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="relative h-16 w-16">
              <Image src="/ic/img.svg" alt="placeholder" fill className="object-contain" />
            </div>
          </div>
        )}

        {/* 하단 FAB (상태에 따라 아이콘 및 스타일 변경) */}
        <div className="absolute right-4 bottom-4">
          <Button
            variant={src ? "fab-dark" : "fab-light"}
            shape="fab"
            icon={src ? "edit" : "plus-gray"}
            size="sm"
            noBorder
            iconSize={20}
            disabled={disabled}
            onClick={handleEditClick}
            className={cn("h-12 w-12", !src && "bg-slate-200")}
          />
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
    );
  }
);

ImageLoader.displayName = "ImageLoader";

export default ImageLoader;
