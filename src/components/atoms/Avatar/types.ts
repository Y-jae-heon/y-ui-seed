import { AvatarImageProps } from "@radix-ui/react-avatar";
import { AvatarProps as UIAvatarProps } from "@components/ui";
import { ImageProps } from "next/image";

export type AvatarType = "image" | "file" | "string";

export interface AvatarProps extends UIAvatarProps {
  src: AvatarImageProps["src"];
  size?: 24 | 30 | 50;
  type?: AvatarType;
  alt?: string;
}
