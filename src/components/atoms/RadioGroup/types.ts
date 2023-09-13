"use client";
import { RadioGroupProps as UIRadioGroupProps } from "@components/ui";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface IRadioGroupItem {
  label?: string;
  value: string;
}

export interface RadioGroupProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
      "onChange"
    >,
    Omit<UIRadioGroupProps, "onChange"> {
  value?: string;
  onChange?: (e: string) => void;
  options?: IRadioGroupItem[];
}
