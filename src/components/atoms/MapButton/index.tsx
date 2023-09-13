import Image from "next/image";
import Link from "next/link";
import { MapButtonProps } from "./types";
import { cn } from "@lib/utils";

export default function MapButton(props: MapButtonProps) {
  const { href, name, iconSrc, target = "_blank", isRound, className } = props;

  return (
    <Link
      className={cn(
        "flex items-center py-[12px] bg-gray12 rounded-full text-button2 gap-[8px] justify-center",
        isRound && "rounded-[180px]",
        className
      )}
      href={href}
      target={target}
    >
      <figure className="w-[20px] h-[20px]">
        <Image
          src={iconSrc}
          alt="네이버지도"
          width={30}
          height={30}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </figure>
      {name}
    </Link>
  );
}
