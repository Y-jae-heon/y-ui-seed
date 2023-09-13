"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@lib/utils";
import { IconArrowRight, IconArrowUp } from "@icon";

export interface ListAccordionProps
  extends React.ForwardRefExoticComponent<
    (
      | AccordionPrimitive.AccordionSingleProps
      | AccordionPrimitive.AccordionMultipleProps
    ) &
      React.RefAttributes<HTMLDivElement>
  > {}

export interface ListAccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

export interface ListAccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

export interface ListAccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const ListAccordion = AccordionPrimitive.Root;

const ListAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  ListAccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-gray13 transition-colors duration-200", className)}
    {...props}
  />
));
ListAccordionItem.displayName = "AccordionItem";

const ListAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    hasIcon?: boolean;
  }
>(({ className, children, hasIcon = true, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 py-[11px] px-[20px] items-center justify-between transition-all hover:underline text-b4b text-gray2 [&[data-state=open]]:text-primary3 [&>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0",
        className
      )}
      {...props}
    >
      {children}
      {hasIcon ? (
        <IconArrowUp className="shrink-0 transition-transform duration-200" />
      ) : null}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
ListAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const ListAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-b5 text-gray2 bg-gray13 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
));
ListAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  ListAccordion,
  ListAccordionItem,
  ListAccordionTrigger,
  ListAccordionContent,
};
