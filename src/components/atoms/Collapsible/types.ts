import { CollapsibleProps as UICollapsibleProps } from "@components/ui";

export interface CollapsibleProps extends Omit<UICollapsibleProps, "title"> {
  title?: string | React.ReactNode;
  triggerNode: React.ReactNode;
  isOpen?: boolean;
  previewContents?: string[] | React.ReactNode[];
}
