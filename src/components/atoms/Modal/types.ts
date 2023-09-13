import { dialogVariants, buttonVariants } from "@components/ui";
import { DialogProps } from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import React from "react";

export interface ModalProps
  extends DialogProps,
    VariantProps<typeof dialogVariants> {
  title?: string;
  footerLeft?: React.ReactNode;
  // footerLeft?: string | React.ReactNode;
  // footerRight?: string | React.ReactNode;
  isOpen: boolean;
  hasCloseIcon?: boolean; // default = false;
  hasFooter?: boolean; // default = false
  onCancel?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
  onAction?: () => void;
  cancelLabel?: string;
  actionLabel?: string;
  cancelVariants?: VariantProps<typeof buttonVariants>;
  actionVariants?: VariantProps<typeof buttonVariants>;
}
