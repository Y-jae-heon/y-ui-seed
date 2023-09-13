"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@ui";
import { useMemo } from "react";
import { AlertProps } from "./types";
import { cn } from "@lib/utils";

/**
 * @author Mumu
 * @param props interface AlertProps
 * @param size 360 480 560 660 860
 * @returns Alert
 */

export default function Alert(props: AlertProps) {
  const {
    title,
    children,
    footerLeft,
    isOpen,
    hasCloseIcon = false, // default = false;
    onCancel,
    onAction,
    cancelLabel,
    actionLabel,
    cancelVariants,
    actionVariants,
    size = 480,
    onOpenChange,
    disabled = false,
    customFooter,
    contentClassName,
    ...rest
  } = props;

  const isControlled = useMemo(() => !!onOpenChange, [onOpenChange]);

  return (
    <AlertDialog {...rest} open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent size={size}>
        {hasCloseIcon ? <AlertDialogClose /> : null}
        <AlertDialogHeader>
          <AlertDialogTitle className="text-b1b text-gray2">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription
            size={size}
            className={cn("overflow-auto max-h-[80vh]", contentClassName)}
          >
            {children}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {customFooter || (
            <div className="flex gap-[8px] justify-between w-full">
              <AlertDialogCancel
                onClick={onCancel}
                size={56}
                isRound
                buttonColor={onAction ? "lightGray" : "primary"}
                {...cancelVariants}
                isFull
                disabled={onAction ? undefined : disabled}
              >
                {cancelLabel ? cancelLabel : "취소"}
              </AlertDialogCancel>
              {onAction && (
                <AlertDialogAction
                  onClick={onAction}
                  size={56}
                  isRound
                  {...actionVariants}
                  isFull
                  disabled={disabled}
                >
                  {actionLabel ? actionLabel : "확인"}
                </AlertDialogAction>
              )}
            </div>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
