"use client";
import { Checkbox as CheckboxUI } from "@components/ui";
import { CheckboxProps } from "./types";

export default function Checkbox(props: CheckboxProps) {
  const { size = 24, checkColor = "primary" } = props;
  return <CheckboxUI size={size} checkColor={checkColor} {...props} />;
}
