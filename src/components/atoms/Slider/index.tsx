"use client";
import { Slider as SliderUI } from "@components/ui";
import { SliderProps } from "./types";

export default function Slider(props: SliderProps) {
  const { defaultValue, max, step, className } = props;

  return (
    <SliderUI
      defaultValue={defaultValue}
      max={max}
      step={step}
      className={className}
    />
  );
}
