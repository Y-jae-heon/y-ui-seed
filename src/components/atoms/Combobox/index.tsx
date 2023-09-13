"use client";

import { cn } from "@lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { ComboboxProps } from "./types";
import { useMemo, useState } from "react";
import Button from "../Button";

export default function Combobox(props: ComboboxProps) {
  const {
    value,
    defaultValue,
    onChange,
    options,
    isOpen,
    setIsOpen,
    className,
    placeholder,
    searchPlaceholder,
    emptyText,
    ...rest
  } = props;

  const isControl = useMemo(() => {
    return isOpen !== undefined;
  }, [isOpen]);

  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpen = (bool: boolean) => {
    setOpen(bool);
    setIsOpen?.(bool);
  };

  return (
    <Popover open={isControl ? isOpen : open} onOpenChange={handleSetOpen}>
      <PopoverTrigger>
        <Button
          buttonColor={"outline"}
          role="combobox"
          aria-expanded={isControl ? isOpen : open}
          className={className}
        >
          {value ? (
            options.find((option) => option.value === value)?.label
          ) : (
            <span className="font-light text-gray5">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command {...rest}>
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  onChange?.(currentValue === value ? "" : currentValue);
                  handleSetOpen(false);
                }}
              >
                {option.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
