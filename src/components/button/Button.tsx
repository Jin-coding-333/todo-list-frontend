"use client";

import { variantStyles, shapeStyles, sizeStyles, fabSizeStyles, iconSizes } from "./styles";
import { forwardRef } from "react";
import { Icons } from "@/components/icons";
import { ButtonProps } from "./Button.type";
import cn from "@/lib/cn";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      shape = "default",
      size = "lg",
      icon,
      iconOnly = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // FAB일 경우 iconOnly 강제
    const isIconOnly = shape === "fab" || iconOnly;

    // 아이콘 색상 결정 (variant에 따라)
    const getIconName = () => {
      if (!icon) return null;

      // plus 아이콘의 경우 variant에 따라 색상 변경
      if (icon === "plus-white" || icon === "plus-gray") {
        if (variant === "default") return "plus-gray";
        if (variant === "fab-light") return "plus-gray";
        return "plus-white";
      }

      return icon;
    };

    const iconName = getIconName();
    const iconElement = iconName ? <Icons name={iconName} size={iconSizes[size]} /> : null;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // 기본 스타일
          "inline-flex items-center justify-center gap-2 font-bold transition-all duration-200",
          "focus:outline-none active:scale-95",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:transform-none",
          // Variant 스타일
          variantStyles[variant],
          // Shape 스타일
          shapeStyles[shape],
          // Size 스타일
          shape === "fab" ? fabSizeStyles[size] : sizeStyles[size],
          // 추가 클래스
          className
        )}
        {...props}
      >
        {/* 아이콘 */}
        {iconElement}

        {/* 텍스트 */}
        {!isIconOnly && children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
