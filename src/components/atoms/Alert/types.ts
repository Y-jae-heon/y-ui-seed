import {
  AlertDialogProps,
  alertDialogVariants,
  buttonVariants,
} from "@components/ui";
import { VariantProps } from "class-variance-authority";
import React from "react";

export interface AlertModalProps {
  title: string;
  description: string | React.ReactNode;
  cancelText: string;
  okText?: string;
  onCancel: () => void;
  onOk?: () => void;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}

export interface AlertProps
  extends AlertDialogProps,
    VariantProps<typeof alertDialogVariants> {
  title?: string;
  content?: string | React.ReactNode;
  // footerLeft?: string | React.ReactNode;
  // footerRight?: string | React.ReactNode;
  footerLeft?: React.ReactNode;
  isOpen: boolean;
  hasCloseIcon?: boolean; // default = false;
  onCancel?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
  onAction?: () => void;
  cancelLabel?: string;
  actionLabel?: string;
  cancelVariants?: VariantProps<typeof buttonVariants>;
  actionVariants?: VariantProps<typeof buttonVariants>;
  disabled?: boolean;
  customFooter?: React.ReactNode;
  contentClassName?: string;

  // hasOutsideClose?: boolean; // default = false;
  // hasBackground?: boolean; // default = false;
}
