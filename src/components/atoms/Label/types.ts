import { LabelProps as UILabelProps } from "@components/ui";

export interface LabelProps extends UILabelProps {
  hasHover?: boolean;
  children: string | React.ReactNode;
}
