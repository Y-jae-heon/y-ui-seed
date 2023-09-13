import { PopoverProps as UIPopoverProps } from "@components/ui";
import { Side } from "../common-types";

export interface PopoverProps extends UIPopoverProps {
  placement?: Side;
  offset?: number;
  contents?: string | React.ReactNode;
}
