// 환경변수에서 API 설정 로드 (기본값은 하위 호환성을 위해 유지)
export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://assignment-todolist-api.vercel.app/api";
export const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID || "jinhan";
