"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import {
  buttonRound,
  checkboxPointColor,
  checkboxSize,
  checkboxColor,
  hasBackgroundTextColor,
} from "@styles/variants";

// const checkboxVariants = cva(
//   "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
//   {
//     variants: {
//       variant: {
//         primary: "bg-primary text-primary-foreground hover:bg-primary/90",
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         24: "h-[24px] w-[24px]",
//         30: "h-[30px] w-[30px]",
//         42: "h-[42px] w-[42px]",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: 24,
//     },
//   }
// );

const checkboxVariants = cva(
  // "before:content[''] disabled:bg-gray10 peer relative h-[24px] w-[24px] cursor-pointer rounded-md appearance-none border border-gray9 disabled:border-gray9 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10",
  // "rounded-full relative peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  "group bg-gray13 before:content[''] disabled:data-[state=checked]:bg-gray10 disabled:data-[state=checked]:border-gray9 disabled:bg-gray10 relative cursor-pointer appearance-none border border-gray9 disabled:border-gray9 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 duration-300",
  {
    variants: {
      checkColor: checkboxColor,
      size: checkboxSize,
      isRound: {
        true: buttonRound.true,
        false: "rounded-md",
      },
      hasBackgroundColor: {
        true: "",
        false:
          "data-[state=checked]:bg-transparent data-[state=checked]:border-transparent border-transparent",
      },
    },
    defaultVariants: {
      isRound: false,
      checkColor: "primary",
      hasBackgroundColor: true,
      size: 24,
    },
  }
);

const checkSvgVariants = cva(
  "pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  opacity-0 transition-opacity group-data-[state=checked]:opacity-100 group-disabled:text-gray8 transition-all duration-500",
  {
    variants: {
      checkColor: checkboxPointColor,
      size: checkboxSize,
      hasBackgroundColor: {
        true: "",
        false: cn("data-[state=indeterminate]:text-gray8 opacity-1"),
      },
    },
    defaultVariants: {
      checkColor: "primary",
      size: 24,
      hasBackgroundColor: true,
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants>,
    VariantProps<typeof checkSvgVariants> {
  asChild?: boolean;
  checkClassName?: string;
}

// HTMLButtonElement, ButtonProps>

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      checkColor,
      checkClassName,
      isRound,
      hasBackgroundColor = true,
      size,
      ...props
    },
    ref
  ) => {
    const defaultFalseValue = !hasBackgroundColor ? "indeterminate" : false;

    const [checked, setChecked] = React.useState<"indeterminate" | boolean>(
      defaultFalseValue
    );

    return (
      <CheckboxPrimitive.Root
        checked={props?.checked !== undefined ? props.checked : checked}
        onCheckedChange={(e) => {
          setChecked(e || defaultFalseValue);
          props?.onCheckedChange?.(e || defaultFalseValue);
        }}
        ref={ref}
        className={cn(
          checkboxVariants({
            checkColor,
            className,
            size,
            isRound,
            hasBackgroundColor,
          })
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            checkSvgVariants({
              checkColor,
              size,
              hasBackgroundColor,
              className: checkClassName,
            }),
            !hasBackgroundColor &&
              hasBackgroundTextColor[
                (checkColor = checkColor ? checkColor : "primary")
              ]
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-[${size}px] w-[${size}px]`}
            viewBox="-2 -2 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
