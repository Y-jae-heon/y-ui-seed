"use client";
import {
  PopoverContent,
  PopoverTrigger,
  Popover as PopoverUI,
} from "@components/ui";
import { PopoverProps } from "./types";
import { Side } from "../common-types";

export default function Popover(props: PopoverProps) {
  const {
    placement = Side.BOTTOM,
    offset = 0,
    children,
    contents,
    ...rest
  } = props;

  return (
    <PopoverUI>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent side={placement} sideOffset={offset}>
        {contents}
      </PopoverContent>
    </PopoverUI>
  );
}
