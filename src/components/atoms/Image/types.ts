import { ImageProps as NextImageProps, StaticImageData } from "next/image";

export type ImageType = "default" | "ratio";

export interface ImageProps extends NextImageProps {
  type: ImageType;
  ratio?: [number, number];
}
