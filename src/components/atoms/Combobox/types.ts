import { HTMLAttributes } from "react";
import { CommandProps } from "@components/ui";

export interface ICommboboxOption {
  label: string;
  value: string;
}
export interface ComboboxProps extends Omit<CommandProps, "onChange"> {
  options: ICommboboxOption[];
  isOpen?: boolean;
  setIsOpen?: (bool: boolean) => void;
  onChange?: (value: string) => void;
  searchPlaceholder?: string;
  emptyText?: string;
}
