import React, { HTMLAttributes, PropsWithChildren } from "react";
import { CardProps as UICardProps } from "@components/ui";
export interface CardProps extends Omit<UICardProps, "title"> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  hasCollpase?: boolean; // default = false
  hasSeparator?: boolean; // default = fals
  className?: string;
}
