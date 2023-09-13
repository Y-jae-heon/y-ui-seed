import Image from "next/image";
import React from "react";
import { SubwayBadgeProps } from "./types";

export default function SubwayBadge(props: SubwayBadgeProps) {
  const { subwayName, size } = props;
  return (
    <Image
      src={`/assets/icons/subwayType/${subwayName}.svg`}
      alt={subwayName}
      style={{ height: `${size}px`, width: "auto" }}
      width={size}
      height={size}
      quality={60}
      priority
    />
  );
}
