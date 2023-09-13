"use client";

import { Skeleton as SkeletonUI } from "@components/ui";
import { SkeletonProps } from "./types";
import { cn } from "@lib/utils";

export default function Skeleton(props: SkeletonProps) {
  const { className } = props;

  return <SkeletonUI className={cn("w-[250px] h-4", className)} />;
}
