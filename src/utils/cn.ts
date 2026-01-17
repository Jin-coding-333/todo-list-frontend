import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 *
 * clsx로 조건부 클래스를 결합하고, tailwind-merge로 충돌을 해결합니다.
 *
 * @example
 * cn("p-2", "p-4") // → "p-4" (충돌 해결)
 * cn("text-red-500", isActive && "text-blue-500") // 조건부 클래스
 * cn(baseStyles, className) // 외부 className으로 override 가능
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default cn;
