"use client";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipUI,
} from "@components/ui";
import { TooltipProps } from "./types";
import { Side } from "../common-types";

// "top" | "right" | "bottom" | "left"
export default function Tooltip(props: TooltipProps) {
  const {
    content,
    children,
    className,
    placement = Side.BOTTOM,
    offset = 0,
  } = props;

  return (
    <TooltipProvider delayDuration={100}>
      <TooltipUI>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side={placement}
          sideOffset={offset}
          className={className}
        >
          {content}
        </TooltipContent>
      </TooltipUI>
    </TooltipProvider>
  );
}
