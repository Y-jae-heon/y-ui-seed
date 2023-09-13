import { cn } from "@lib/utils";
import Image from "next/image";
import React from "react";
import { BusTypeBadgeProps } from "./types";

function BusTypeBadge(props: BusTypeBadgeProps) {
  const { busType } = props;

  const renderValue = () => {
    switch (busType) {
      case "BLUE":
        return "간선";
      case "GREEN":
        return "지선";
      case "RED":
        return "광역";
      case "YELLOW":
        return "순환";
      default:
        return "";
    }
  };

  if (!busType) {
    return null;
  }

  return (
    <div className={cn("w-[53px] h-[24px] flex-shrink-0 inline-flex")}>
      <Image
        className="flex-shrink-0"
        src={`/assets/icons/busType/icon-bus-type-${busType}.png`}
        alt={renderValue()}
        width={53}
        height={24}
        quality={60}
        priority
      />
    </div>
  );
}

export default BusTypeBadge;
