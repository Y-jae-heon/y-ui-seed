import { AlertProps as UIAlertProps, alertVariants } from "@components/ui";
import { VariantProps } from "class-variance-authority";

export interface AlertProps
  extends UIAlertProps,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  hasShadow?: boolean;
}
