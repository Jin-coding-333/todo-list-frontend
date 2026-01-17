"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import cn from "@/utils/cn";
import { Button } from "@/components/button";
import { ButtonVariant } from "@/components/button/Button.type";

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: ButtonVariant;
  cancelVariant?: ButtonVariant;
}

interface ConfirmContextValue {
  showConfirm: (options: ConfirmOptions) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextValue | null>(null);

// Confirm 훅
export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context;
}

// Confirm 프로바이더
export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

  const showConfirm = useCallback((opts: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setOptions(opts);
      setIsOpen(true);
      setResolver(() => resolve);
    });
  }, []);

  const handleConfirm = () => {
    resolver?.(true);
    setIsOpen(false);
    setOptions(null);
    setResolver(null);
  };

  const handleCancel = () => {
    resolver?.(false);
    setIsOpen(false);
    setOptions(null);
    setResolver(null);
  };

  return (
    <ConfirmContext.Provider value={{ showConfirm }}>
      {children}
      {/* 모달 오버레이 */}
      {isOpen && options && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className={cn(
              "mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl",
              "animate-fade-in"
            )}
          >
            {options.title && (
              <h3 className="mb-2 text-lg font-bold text-slate-900">{options.title}</h3>
            )}
            <p className="mb-6 text-slate-600">{options.message}</p>
            <div className="flex gap-3">
              <Button
                variant={options.cancelVariant || "default"}
                onClick={handleCancel}
                className="flex-1"
              >
                {options.cancelText || "취소"}
              </Button>
              <Button
                variant={options.confirmVariant || "danger"}
                onClick={handleConfirm}
                className="flex-1"
              >
                {options.confirmText || "확인"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
}
