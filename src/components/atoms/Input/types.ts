import { InputProps as UIInputProps } from "@components/ui";

export interface InputProps extends Omit<UIInputProps, "onChange"> {
  hasClear?: boolean;
  isRound?: boolean;
  parantClassName?: string;
  onChange?: (val: string) => void;
}
