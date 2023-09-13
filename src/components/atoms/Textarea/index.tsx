"use client";

import { Textarea as TextareaUI } from "@components/ui";
import { cn } from "@lib/utils";
import { useId, useState } from "react";
import { TextareaProps } from "./types";

export default function Textarea(props: TextareaProps) {
  const { placeholder, ...rest } = props;

  const [isFocus, setIsFocus] = useState(false);

  const defaultId = useId();

  return (
    <div className="relative flex w-full">
      {placeholder ? (
        <label
          data-active={isFocus || !!rest.value}
          data-disabled={rest.disabled}
          className="absolute left-[12px] px-[4px] top-[0] translate-y-[8px] select-none cursor-text text-gray7 text-b4 data-[active=true]:text-b6 data-[active=true]:-translate-y-[50%] data-[active=true]:translate-x-[8px] [&:not([data-disabled=true])]:bg-gray13 transition-all duration-200"
          htmlFor={rest.id || defaultId}
        >
          {placeholder}
        </label>
      ) : null}
      <TextareaUI
        {...rest}
        className={cn(
          "border-gray9 pl-[22px] pr-[12px] py-[12px] placeholder:text-gray7 disabled:bg-gray11 disabled:text-gray8 disabled:border-gray11 aria-[invalid=true]:border-red3 focus:border-primary2 focus-visible:ring-0 focus:shadow-[0px_0px_0px_3px] focus:shadow-primary10 aria-[invalid=true]:shadow-[0px_0px_0px_3px_#FCECEE]",
          rest.className
        )}
        onFocus={(e) => {
          rest.onFocus?.(e);
          setIsFocus(true);
        }}
        onBlur={(e) => {
          rest.onBlur?.(e);
          setIsFocus(false);
        }}
        id={rest.id || defaultId}
      />
    </div>
  );
}
