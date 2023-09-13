"use client";

// import { cn } from "@lib/utils";
// import { Check } from "lucide-react";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Command as CommandUI,
} from "@components/ui";
import { CommandProps } from "./types";

export default function Command(props: CommandProps) {
  const {
    value,
    defaultValue,
    options,
    placeholder,
    emptyText,
    onChange,
    ...rest
  } = props;
  return (
    <CommandUI {...rest}>
      <CommandInput placeholder={placeholder} />
      <CommandEmpty>{emptyText}</CommandEmpty>
      <CommandGroup>
        {options.map((option) => (
          <CommandItem
            key={option.value}
            onSelect={(currentValue) => {
              //   onChange?.(currentValue === value ? "" : currentValue);
              option.onClick?.();
              //   handleSetOpen(false);
            }}
          >
            {option.label}
            {/* <Check
              className={cn(
                "ml-auto h-4 w-4",
                value === option.value ? "opacity-100" : "opacity-0"
              )}
            /> */}
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandUI>
  );
}
