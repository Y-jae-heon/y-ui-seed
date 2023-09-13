import { TooltipContentProps as UITooltipProps } from "@components/ui";
import { Side } from "../common-types";

export interface TooltipProps extends Omit<UITooltipProps, "content"> {
  placement?: Side;
  content?: string | React.ReactNode;
  offset?: number;
}
