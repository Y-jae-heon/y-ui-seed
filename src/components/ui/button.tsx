import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "src/lib/utils";
import {
  buttonColor,
  buttonRound,
  buttonSize,
  buttonWidthFull,
  defaultButtonClass,
  mobileButtonSize,
  tabletButtonSize,
} from "@styles/variants";

const buttonVariants = cva(defaultButtonClass, {
  variants: {
    buttonColor: {
      ...buttonColor,
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      // secondary:
      //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    isFull: {
      ...buttonWidthFull,
    },
    size: {
      ...buttonSize,
    },
    tabletSize: {
      ...tabletButtonSize,
    },
    mobileSize: {
      ...mobileButtonSize,
    },
    isRound: {
      ...buttonRound,
    },
  },
  defaultVariants: {
    buttonColor: "primary",
    isFull: false,
    size: 32,
    isRound: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      buttonColor,
      isFull = false,
      size,
      tabletSize,
      mobileSize,
      isRound,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            buttonColor,
            size,
            isFull,
            isRound,
            className,
            tabletSize,
            mobileSize,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
