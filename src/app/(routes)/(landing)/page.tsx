"use client";

import { useState } from "react";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { TodoSection } from "@/components/landing/TodoSection";
import { DoneSection } from "@/components/landing/DoneSection";

export default function Home() {
  // 데모용 초기 상태 (나중에 API 연동 시 제거)
  const [todos, setTodos] = useState([
    { id: "1", title: "비타민 챙겨 먹기", isCompleted: false },
    { id: "2", title: "맥주 마시기", isCompleted: false },
    { id: "3", title: "운동하기", isCompleted: false },
    { id: "4", title: "은행 다녀오기", isCompleted: true },
    { id: "5", title: "비타민 또 먹기", isCompleted: true },
  ]);

  const todoItems = todos.filter((item) => !item.isCompleted);
  const doneItems = todos.filter((item) => item.isCompleted);

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
    );
  };

  const handleAdd = (title: string) => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      isCompleted: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-6 md:py-10">
        {/* 상단 검색 및 추가 섹션 */}
        <LandingHeader onAdd={handleAdd} className="mb-8 md:mb-10" />

        {/* 메인 콘텐츠 영역 (반응형 그리드) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
          <TodoSection items={todoItems} onToggle={handleToggle} />
          <DoneSection items={doneItems} onToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
}
