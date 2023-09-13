import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const buttonAsVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      buttonColor: {
        primary:
          "bg-gray1 text-gray13 active:bg-gray3 disabled:bg-gray11 disabled:text-gray8",
        secondary:
          "bg-secondary9 text-secondary3 active:text-secondary2 active:bg-secondary8 disabled:bg-gray11 disabled:text-gray8",
        gray: "bg-gray11 text-gray2 active:bg-gray9 disabled:bg-gray11 disabled:text-gray8",
        plane:
          "bg-gray13 text-gray2 active:bg-gray9 disabled:bg-gray11 disabled:text-gray8",
        primaryGhost:
          "bg-transparent text-gray1 border border-gray1 active:text-gray4 active:border-gray4 disabled:text-gray8 disabled:border-gray8",
        secondaryGhost:
          "bg-transparent text-secondary3 border border-secondary3 active:text-secondary1 active:border-secondary1 disabled:text-gray8 disabled:border-gray8",
        grayGhost:
          "bg-gray13 text-gray2 border border-gray9 active:border-gray2 disabled:text-gray8 disabled:border-gray8",
      },
      size: {
        56: "text-button1 py-[16px] px-[24px] rounded-[12px]",
        48: "text-button2 py-[14px] px-[20px] rounded-[11px]",
        40: "text-button2 py-[10px] px-[16px] rounded-[10px]",
        32: "text-button3 py-[7px] px-[12px] rounded-[8px]",
        28: "text-button4 py-[6px] px-[10px] rounded-[7px]",
      },
      isFull: {
        true: "w-full",
      },
    },
    defaultVariants: {
      buttonColor: "primary",
      size: 48,
      isFull: false,
    },
  }
);

export interface ButtonAsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonAsVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

const ButtonAs = React.forwardRef<HTMLButtonElement, ButtonAsProps>(
  (
    { className, buttonColor, size, asChild = false, isFull = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonAsVariants({ buttonColor, size, className, isFull })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonAs.displayName = "ButtonAs";

export { ButtonAs, buttonAsVariants };
