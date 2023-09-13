import { HoverCardContentProps } from "@components/ui";
import { HoverCardProps as UIHoverCardProps } from "@radix-ui/react-hover-card";

export interface HoverCardItem {
  element: string | React.ReactNode;
}

export interface HoverCardProps
  extends UIHoverCardProps,
    Omit<HoverCardContentProps, "content"> {
  trigger: string | React.ReactNode;
}
