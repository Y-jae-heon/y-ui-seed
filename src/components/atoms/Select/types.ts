import { SelectProps as UISelectProps } from "@components/ui";
import React from "react";

export enum SelectItemType {
  LABEL = "label",
  SELECT = "select",
}

export interface ISelectItem {
  label: string | React.ReactNode;
  value: string;
  hasSeparator?: boolean;
  type?: SelectItemType;
}

export interface SelectProps extends UISelectProps {
  options?: ISelectItem[];
  placeholder?: string;
  hasAllSeparator?: boolean;
  isRound?: boolean;
  triggerClassName?: string;
  dropdownClassName?: string;
  onlyEvent?: boolean;
  id?: string;
}
