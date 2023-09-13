import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";
import { tooltipColor } from "@styles/variants";

export const alertVariants = cva(
  "relative w-full rounded-[24px] [&:has(svg)]:pl-14 pr-4 break-keep [&>svg]:translate-y-[-50%] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-[50%] [&>svg]:text-foreground",
  {
    variants: {
      isRound: {
        true: "rounded-full",
        false: "",
      },
      bgColor: { ...tooltipColor },
      hasIcon: {
        true: "py-[13px] sm:py-[10px] sm:[&:has(svg)]:pl-12",
        false: "py-[8px] px-[12px]",
      },
      hasIconWithoutTitle: {
        true: "",
        false: "",
      },

      hasShadow: {
        true: "shadow-[0px_4px_20px_0px_#0000001F]",
        false: "",
      },
    },
    defaultVariants: {
      bgColor: "default",
      isRound: false,
      hasIcon: false,
      hasIconWithoutTitle: false,
      hasShadow: true,
    },
  }
);

export const alertDescriptionVariants = cva("", {
  variants: {
    hasTitle: {
      true: "text-b6",
      false: "text-b5",
    },
  },
  defaultVariants: {
    hasTitle: false,
  },
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Alert = React.forwardRef<
  HTMLDivElement,
  AlertProps & VariantProps<typeof alertVariants>
>(
  (
    {
      className,
      bgColor,
      isRound,
      hasIcon = false,
      hasIconWithoutTitle,
      hasShadow,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({
          bgColor,
          isRound,
          hasIcon,
          hasIconWithoutTitle,
          hasShadow,
        }),
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-0 text-b5b", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps & VariantProps<typeof alertDescriptionVariants>
>(({ className, hasTitle, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescriptionVariants({ hasTitle }), className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
