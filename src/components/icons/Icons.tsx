import { IconsProps } from "./Icons.type";
import { iconMap } from "./constants";

export const Icons = ({ name, size = 16, className, ...props }: IconsProps) => {
  const icon = iconMap[name];

  if (!icon) {
    console.warn(`Icon "${name}"을 찾을 수 없습니다.`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {icon.render(props)}
    </svg>
  );
};

export default Icons;
