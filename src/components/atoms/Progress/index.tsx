"use client";

import { ProgressProps } from "./types";
import { Progress as ProgressUI } from "@components/ui";

export default function Progress(props: ProgressProps) {
  return <ProgressUI {...props} />;
}
