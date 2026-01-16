import { ButtonShape, ButtonSize, ButtonVariant } from "./Button.type";

/**
 * Variant별 스타일 매핑
 * - 모든 버튼에 검정 보더 라인 적용
 * - 네오브루탈리즘 스타일 오프셋 그림자 (동일 크기의 어두운 박스가 오른쪽 아래로 이동)
 */
export const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-white border-2 border-slate-900 text-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:bg-slate-50",
  danger:
    "bg-rose-500 border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#0f172a] hover:bg-rose-600",
  primary:
    "bg-lime-300 border-2 border-slate-900 text-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:bg-lime-400",
  violet:
    "bg-violet-600 border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#0f172a] hover:bg-violet-700",
  navy: "bg-slate-900 border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#334155] hover:bg-slate-800",
  // FAB 전용 variant(그림자 없음)
  "fab-light": "bg-slate-200 border-2 border-slate-900 text-slate-500 hover:bg-slate-300",
  "fab-dark": "bg-slate-900/50 border-2 border-slate-900 text-white hover:bg-slate-900/60",
};

/**
 * Shape별 스타일 매핑
 */
export const shapeStyles: Record<ButtonShape, string> = {
  default: "rounded-full",
  fab: "rounded-full aspect-square",
};

/**
 * Size별 스타일 매핑 (default shape)
 * - sm: 162px × 56px
 * - lg: 168px × 56px
 */
export const sizeStyles: Record<ButtonSize, string> = {
  sm: "w-[162px] h-14 text-base",
  lg: "w-[168px] h-14 text-base",
};

/**
 * Size별 스타일 매핑 (fab shape)
 */
export const fabSizeStyles: Record<ButtonSize, string> = {
  sm: "w-16 h-16",
  lg: "w-16 h-16",
};

/**
 * Size별 아이콘 크기 매핑
 */
export const iconSizes: Record<ButtonSize, number> = {
  sm: 24,
  lg: 24,
};
