import {
  Dialog,
  // DialogAction,
  // DialogCancel,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@ui";
import { useMemo } from "react";
import { ModalProps } from "./types";
import { on } from "events";
import { cn } from "@lib/utils";
import Separator from "../Separator";

export default function Modal(props: ModalProps) {
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
    hasFooter = true,
    ...rest
  } = props;

  const isControlled = useMemo(() => !!onOpenChange, [onOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange} {...rest}>
      <DialogContent size={size}>
        <DialogHeader>
          {title && (
            <>
              <DialogTitle>{title}</DialogTitle>
            </>
          )}
        </DialogHeader>
        <DialogDescription
          className={cn(
            "overflow-auto max-h-[80vh] p-[32px] sm:flex-1 sm:max-h-none"
          )}
        >
          {children}
        </DialogDescription>
        {!hasFooter ? (
          <DialogFooter>
            <div className="flex flex-wrap justify-between w-full">
              <div className="flex items-center">{footerLeft}</div>
              <div className="flex gap-[8px]">
                <Button
                  onClick={() => {
                    onCancel?.();
                    onOpenChange?.(false);
                  }}
                  size={40}
                  buttonColor={onAction ? "lightGray" : "primary"}
                  {...cancelVariants}
                  // className={cn("w-[860px]")}
                  isFull={
                    cancelVariants?.isFull ? cancelVariants.isFull : false
                  }
                >
                  {cancelLabel ? cancelLabel : "취소"}
                </Button>
                {onAction && (
                  <Button
                    type="submit"
                    onClick={() => {
                      onAction?.();
                      onOpenChange?.(false);
                    }}
                    size={40}
                    {...actionVariants}
                  >
                    {actionLabel ? actionLabel : "확인"}
                  </Button>
                )}
              </div>
            </div>
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
