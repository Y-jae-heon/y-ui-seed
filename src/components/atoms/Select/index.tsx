"use client";
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "@components/ui";
import { ISelectItem, SelectItemType, SelectProps } from "./types";
import { cn } from "@lib/utils";
import ArrowDownFill from "src/assets/svg/arrow-down-fill.svg";
import { IconArrowDownFill, IconSelectArrowDown } from "@icon";
import { useId, useState } from "react";

const renderSelectItem = (
  item: ISelectItem,
  idx: number,
  hasAllSeparator: boolean,
  className?: string
) => {
  switch (hasAllSeparator) {
    case true:
      switch (item.type) {
        case SelectItemType.LABEL:
          return (
            <>
              <SelectLabel
                className={cn(
                  "cursor-pointer px-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-label-${idx}`}
              >
                {item.label}
              </SelectLabel>
              <SelectSeparator />
            </>
          );
        case SelectItemType.SELECT:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              <SelectSeparator />
            </>
          );
        default:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              <SelectSeparator />
            </>
          );
      }
    case false:
      switch (item.type) {
        case SelectItemType.LABEL:
          return (
            <>
              <SelectLabel
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-label-${idx}`}
              >
                {item.label}
              </SelectLabel>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
        case SelectItemType.SELECT:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
        default:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer w-full max-w-[--radix-popper-anchor-width] pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
      }

    default:
      switch (item.type) {
        case SelectItemType.LABEL:
          return (
            <>
              <SelectLabel
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-label-${idx}`}
              >
                {item.label}
              </SelectLabel>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
        case SelectItemType.SELECT:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
        default:
          return (
            <>
              <SelectItem
                className={cn(
                  "cursor-pointer w-full pl-[16px] pr-[16px] py-[11px] text-b4 data-[state=checked]:text-b4b data-[state=checked]:text-primary3 focus:bg-primary10",
                  className
                )}
                key={`select-item-${idx}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
              {item.hasSeparator && <SelectSeparator />}
            </>
          );
      }
  }
};

export default function Select(props: SelectProps) {
  const {
    options,
    children,
    placeholder,
    hasAllSeparator = false,
    isRound = false,
    triggerClassName,
    dropdownClassName,
    onlyEvent = false,
    ...rest
  } = props;

  const defaultId = useId();

  return (
    <div className="relative">
      <SelectUI {...rest} value={onlyEvent ? "" : rest.value}>
        {!onlyEvent && (
          <label
            data-active={!!rest.value}
            data-disabled={rest.disabled}
            className="absolute left-[12px] px-[4px] top-[50%] -translate-y-[50%] select-none cursor-text text-gray7 text-b4 data-[active=true]:text-b6 data-[active=true]:-translate-y-[170%] data-[active=true]:translate-x-[8px] [&:not([data-disabled=true])]:bg-gray13 transition-all duration-200"
            htmlFor={rest.id || defaultId}
          >
            {placeholder}
          </label>
        )}
        <SelectTrigger
          className={cn(
            isRound && "rounded-full",
            "group [&>span:first-child]:flex-1 gap-[8px] text-left border-gray9 focus:border-primary2 focus-visible:ring-0 focus:shadow-[0px_0px_0px_3px] focus:shadow-primary10 aria-[invalid=true]:shadow-[0px_0px_0px_3px_#FCECEE]",
            triggerClassName
          )}
        >
          {!onlyEvent ? (
            <SelectValue />
          ) : (
            <span className="text-b4 text-gray7">{placeholder}</span>
          )}
          <SelectIcon className="group-data-[state=open]:rotate-180" asChild>
            <IconSelectArrowDown fill="#000" />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup className="w-full">
            {options?.map((item, idx) =>
              renderSelectItem(item, idx, hasAllSeparator, dropdownClassName)
            )}
          </SelectGroup>
        </SelectContent>
      </SelectUI>
    </div>
  );
}
