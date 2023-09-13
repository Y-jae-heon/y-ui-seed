"use client";
import { Button as ButtonUi } from "@ui";
import { ButtonProps } from "./types";

/**
 * @author Mumu
 * @param props interface ButtonProps
 * @param size 28 32 40 48 56
 * @param buttonColor
 * @param isFull
 * @returns Button
 */

export default function Button(props: ButtonProps) {
  return <ButtonUi {...props} />;
}
