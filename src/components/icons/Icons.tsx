import React from "react";
import { IconName } from "./Icons.type";
import { IconsProps } from "./Icons.type";

// 아이콘 맵: 각 아이콘의 viewBox와 렌더링 함수를 정의
const iconMap: Record<
  IconName,
  {
    viewBox: string;
    render: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  }
> = {
  X: {
    viewBox: "0 0 16 16",
    render: (props) => (
      <>
        <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  check: {
    viewBox: "0 0 16 16",
    render: () => (
      <path
        d="M2 7L6.5 11.5L14 4"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  "check-in-circle": {
    viewBox: "0 0 32 32",
    render: () => (
      <>
        <circle cx="16" cy="16" r="16" fill="#7C3AED" />
        <path
          d="M8 16.2857L13.8182 22L24 12"
          stroke="#FEFCE8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  "empty-circle": {
    viewBox: "0 0 32 32",
    render: () => <circle cx="16" cy="16" r="15" fill="#FEFCE8" stroke="#0F172A" strokeWidth="2" />,
  },
  edit: {
    viewBox: "0 0 24 24",
    render: () => (
      <path
        d="M13.3098 3.86603C13.586 3.38773 14.1975 3.22386 14.6758 3.5L18.0481 5.44698C18.5264 5.72312 18.6903 6.33471 18.4141 6.81301L11.1837 19.3366C11.072 19.5299 10.8989 19.6803 10.6919 19.7639L7.12194 21.2048C6.81834 21.3273 6.48085 21.1299 6.43891 20.8052L5.95038 17.0233C5.92229 16.8058 5.96647 16.5851 6.07612 16.3952L13.3098 3.86603Z"
        fill="currentColor"
      />
    ),
  },
  "plus-white": {
    viewBox: "0 0 16 16",
    render: () => (
      <>
        <path d="M2 8L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14L8 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  "plus-gray": {
    viewBox: "0 0 16 16",
    render: () => (
      <>
        <path d="M2 8L14 8" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14L8 2" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
};

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
