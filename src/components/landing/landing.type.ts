import { TodoItem } from "@/api/todo/types";

export interface DoneSectionProps {
  items?: TodoItem[];
  onToggle?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
  className?: string;
}

export interface LandingHeaderProps {
  onAdd?: (title: string) => void;
  className?: string;
}

export interface TodoSectionProps {
  items?: TodoItem[];
  onToggle?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
  className?: string;
}
