"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "src/lib/utils";
import {
  buttonWidthFull,
  defaultLabelClass,
  labelColor,
  labelRound,
  labelSize,
} from "@styles/variants";

const labelVariants = cva(defaultLabelClass, {
  variants: {
    labelColor: {
      ...labelColor,
    },
    isFull: {
      ...buttonWidthFull,
    },
    isRound: {
      ...labelRound,
    },
    size: {
      ...labelSize,
    },
  },
  defaultVariants: {
    labelColor: "primary",
    isFull: false,
    isRound: false,
    size: 24,
  },
});

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  disabled?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, labelColor, isFull, isRound, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ labelColor, isFull, isRound, size, className })
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
