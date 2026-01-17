export interface ItemDetailHeaderProps {
  title: string;
  isCompleted: boolean;
  onToggle?: () => void;
  className?: string;
}

export interface ItemDetailContentProps {
  imageUrl?: string | null;
  memo?: string;
  onImageFileSelect?: (file: File) => void;
  onImageRemove?: () => void;
  onMemoChange?: (value: string) => void;
  className?: string;
}

export interface ItemDetailFooterProps {
  onSave?: () => void;
  onDelete?: () => void;
  isSaveDisabled?: boolean;
  className?: string;
}
