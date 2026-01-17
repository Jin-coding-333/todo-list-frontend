"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ItemDetailHeader } from "@/components/items/ItemDetailHeader";
import { ItemDetailContent } from "@/components/items/ItemDetailContent";
import { ItemDetailFooter } from "@/components/items/ItemDetailFooter";

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();

  // 데모용 초기 데이터
  const DEFAULT_ITEM = {
    id: params.itemId as string,
    title: "비타민 챙겨 먹기",
    isCompleted: false,
    imageUrl: null as string | null,
    memo: "매일 아침 식사 후에 챙겨 먹기!",
  };

  const [item, setItem] = useState(DEFAULT_ITEM);
  // 저장된 기준 상태 (저장 버튼 활성화 여부 판단용)
  const [savedItem, setSavedItem] = useState(DEFAULT_ITEM);

  // 변경 여부 확인 (마지막으로 '저장'된 상태와 비교)
  const isChanged =
    item.title !== savedItem.title ||
    item.isCompleted !== savedItem.isCompleted ||
    item.imageUrl !== savedItem.imageUrl ||
    item.memo !== savedItem.memo;

  const handleToggle = () => {
    setItem((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setItem((prev) => ({ ...prev, imageUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setItem((prev) => ({ ...prev, imageUrl: null }));
  };

  const handleMemoChange = (value: string) => {
    setItem((prev) => ({ ...prev, memo: value }));
  };

  const handleSave = () => {
    if (!isChanged) return;

    // 현재 상태를 '저장된 상태'로 업데이트
    setSavedItem(item);
    alert("수정 내용이 저장되었습니다!");
    // router.push("/") 를 제거하여 현재 페이지에 유지
  };

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      alert("삭제되었습니다!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[996px] px-4 py-6 md:px-6 md:py-10 lg:px-0">
        {/* 상단 제목 및 상태 */}
        <ItemDetailHeader
          title={item.title}
          isCompleted={item.isCompleted}
          onToggle={handleToggle}
          className="mb-6"
        />

        {/* 메인 콘텐츠 (이미지 + 메모) */}
        <ItemDetailContent
          imageUrl={item.imageUrl}
          memo={item.memo}
          onImageFileSelect={handleImageSelect}
          onImageRemove={handleImageRemove}
          onMemoChange={handleMemoChange}
          className="mb-6"
        />

        {/* 하단 제어 버튼 */}
        <ItemDetailFooter onSave={handleSave} onDelete={handleDelete} isSaveDisabled={!isChanged} />
      </div>
    </div>
  );
}
