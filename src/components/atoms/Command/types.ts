import { CommandProps as UICommandProps } from "@components/ui";

export interface ICommandOption {
  label: string;
  value: string;
  onClick?: () => void;
}

export interface CommandProps extends Omit<UICommandProps, "onChange"> {
  options: ICommandOption[];
  emptyText?: string;
  onChange?: (value: string) => void;
}
