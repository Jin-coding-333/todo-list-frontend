export const containerStyles = {
  base: "group flex cursor-pointer items-center gap-3 rounded-full transition-all duration-200 border-2 border-slate-900",
  variants: {
    default: "h-[50px] px-4",
    detail: "justify-center px-6 py-4",
  },
  completed: "bg-violet-100",
  notCompleted: "bg-white",
};

export const checkboxStyles =
  "flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none active:scale-95";

export const deleteButtonStyles =
  "ml-auto flex-shrink-0 cursor-pointer text-slate-400 transition-all duration-200 hover:scale-110 hover:text-slate-600 focus:outline-none active:scale-95";

export const textStyles = {
  base: "truncate text-slate-900",
  variants: {
    default: "text-base flex-1 group-hover:underline group-hover:underline-offset-4",
    detail: "text-lg font-bold underline underline-offset-8",
  },
  completed: "text-slate-500 line-through",
};
