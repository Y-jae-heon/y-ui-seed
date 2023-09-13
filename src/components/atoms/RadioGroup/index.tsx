"use client";

import { IRadioGroupItem, RadioGroupProps } from "./types";
import {
  Label,
  RadioGroupItem,
  RadioGroup as RadioGroupUI,
} from "@components/ui";

const renderRadioGroupItem = (item: IRadioGroupItem, idx: number) => {
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      key={`radio-group-item-${idx}`}
    >
      <RadioGroupItem value={item.value} id={`r-${idx}`} />
      {item.label && (
        <Label className="cursor-pointer" htmlFor={`r-${idx}`}>
          {item.label}
        </Label>
      )}
    </div>
  );
};

export default function RadioGroup(props: RadioGroupProps) {
  const {
    value,
    options,
    defaultValue,
    onChange,
    orientation = "vertical",
    ...rest
  } = props;

  const orient = orientation === "vertical" ? "flex-col" : "flex-row";

  return (
    <RadioGroupUI
      {...rest}
      orientation={orientation}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      className={orient}
    >
      {options?.map((item, idx) => renderRadioGroupItem(item, idx))}
    </RadioGroupUI>
  );
}
