export type IconName =
  | "X"
  | "check"
  | "check-in-circle"
  | "empty-circle"
  | "edit"
  | "plus-white"
  | "plus-gray";

export interface IconsProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}
