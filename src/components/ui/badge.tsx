import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      badgeColor: {
        primary:
          "bg-gray1 text-gray13 hover:bg-gray3 disabled:bg-gray11 disabled:text-gray8",
        lightPrimary:
          "bg-gray11 text-gray2 hover:bg-gray10 disabled:bg-gray11 disabled:text-gray8",
        secondary:
          "bg-secondary3 text-gray13 hover:text-gray13 hover:bg-secondary2 disabled:bg-gray11 disabled:text-gray8",
        lightSecondary:
          "bg-secondary9 text-secondary3 hover:text-secondary2 hover:bg-secondary8 disabled:bg-gray11 disabled:text-gray8",
        gray: "bg-gray7 text-gray13 hover:bg-gray6 disabled:bg-gray11 disabled:text-gray8",
        lightGray:
          "bg-gray13 text-gray2 border border-gray9 hover:border-gray2 disabled:text-gray8 disabled:border-gray8",
        red: "bg-red2 text-gray13 hover:bg-red1 disabled:bg-gray11 disabled:text-gray8",
        lightRed:
          "bg-red6 text-red2 hover:bg-red5 disabled:bg-gray11 disabled:text-gray8",
        yellow:
          "bg-yellow2 text-gray13 hover:bg-yellow1 disabled:bg-gray11 disabled:text-gray8",
        lightYellow:
          "bg-yellow6 text-yellow2 hover:bg-yellow5 disabled:bg-gray11 disabled:text-gray8",
        orange:
          "bg-orange2 text-gray13 hover:bg-orange1 disabled:bg-gray11 disabled:text-gray8",
        lightOrange:
          "bg-orange6 text-orange2 hover:bg-orange5 disabled:bg-gray11 disabled:text-gray8",
        green:
          "bg-green2 text-gray13 hover:bg-green1 disabled:bg-gray11 disabled:text-gray8",
        lightGreen:
          "bg-green6 text-green2 hover:bg-green5 disabled:bg-gray11 disabled:text-gray8",
        blue: "bg-blue2 text-gray13 hover:bg-blue1 disabled:bg-gray11 disabled:text-gray8",
        lightBlue:
          "bg-blue6 text-blue2 hover:bg-blue5 disabled:bg-gray11 disabled:text-gray8",
        purple:
          "bg-purple2 text-gray13 hover:bg-purple1 disabled:bg-gray11 disabled:text-gray8",
        lightPurple:
          "bg-purple6 text-purple2 hover:bg-purple5 disabled:bg-gray11 disabled:text-gray8",
      },
      size: {
        32: "text-label1 py-[8px] px-[12px] rounded-[8px]",
        22: "text-label2 py-[4px] px-[8px] rounded-[6px]",
        18: "text-label3 py-[3px] px-[6px] rounded-[4px]",
      },
      isFull: {
        true: "w-full",
      },
      isRound: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      badgeColor: "lightPrimary",
      size: 18,
      isFull: false,
      isRound: false,
    },
  }
);

export enum BadgeColorTypes {
  PRIMARY = "primary",
  LIGHT_PRIMARY = "lightPrimary",
  SECONDARY = "secondary",
  LIGHT_SECONDARY = "lightSecondary",
  GRAY = "gray",
  LIGHT_GRAY = "lightGray",
  RED = "red",
  LIGHT_RED = "lightRed",
  YELLOW = "yellow",
  LIGHT_YELLOW = "lightYellow",
  ORANGE = "orange",
  LIGHT_ORANGE = "lightOrange",
  GREEN = "green",
  LIGHT_GREEN = "lightGreen",
  BLUE = "blue",
  LIGHT_BLUE = "lightBlue",
  PURPLE = "purple",
  LIGHT_PURPLE = "lightPurple",
}

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  disabled?: boolean;
  isFull?: boolean;
  isRound?: boolean;
  badgeColor?: BadgeColorTypes;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      badgeColor,
      size,
      asChild = false,
      isFull = false,
      isRound = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(
          badgeVariants({ badgeColor, size, className, isFull, isRound })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
