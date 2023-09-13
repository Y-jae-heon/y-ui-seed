"use client";
import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "@ui";
import { AvatarProps, AvatarType } from "./types";

/**
 * @author Mumu
 * @param props interface AvatarProps
 * @returns Avatar
 */

export default function Avatar(props: AvatarProps) {
  const { src, size = 24, alt, type = "image" } = props;

  const renderAvatarType = (type: AvatarType) => {
    switch (type) {
      case "string":
        return <AvatarFallback>{src}</AvatarFallback>;

      case "image":
        return <AvatarImage src={src} alt={alt} />;

      default:
        return <AvatarImage src={src} alt={alt} />;
    }
  };
  return (
    <AvatarUI style={{ width: `${size}px`, height: `${size}px` }}>
      {renderAvatarType(type)}
      {/* <AvatarImage src={src} alt="@shadcn" /> */}
      {/* <AvatarFallback></AvatarFallback> */}
    </AvatarUI>
  );
}
