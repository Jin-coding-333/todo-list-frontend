export interface DoneSectionProps {
  items?: any[]; // 임시 타입, 실제 데이터 연동 시 수정 예정
  onToggle?: (id: string) => void;
  className?: string;
}

export interface LandingHeaderProps {
  onAdd?: (title: string) => void;
  className?: string;
}

export interface TodoSectionProps {
  items?: any[]; // 임시 타입, 실제 데이터 연동 시 수정 예정
  onToggle?: (id: string) => void;
  className?: string;
}
