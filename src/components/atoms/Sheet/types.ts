import { HTMLAttributes } from "react";
import { Side } from "../common-types";
import { VariantProps } from "class-variance-authority";
import { sheetVariants } from "@components/ui";
import { DialogProps } from "@radix-ui/react-dialog";

export interface ISheetData {
  header?: string | React.ReactNode;
  headerTitle?: string | React.ReactNode;
  headerDescription?: string | React.ReactNode;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  onFooterClick?: () => void;
}

export interface SheetProps extends DialogProps {
  hasCloseButton?: boolean;
  placement?: Side;
  size?: number;
  mobileSize?: number;
  tabletSize?: number;
  isOpen: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  hasOutsideClose?: boolean;
  hasBackground?: boolean;
  data?: ISheetData;
  sheetVariants?: VariantProps<typeof sheetVariants>;
  className?: string;
  rootClassName?: string;
  sheetClassName?: string;
  type?: "mobile" | "default";
}
