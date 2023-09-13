import { ListAccordionProps as UIAccordionProps } from "@components/ui";
// import { AccordionMultipleProps as UIAccordionMultipleProps } from "@radix-ui/react-accordion";
import React from "react";

export interface AccordionMenu {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}

// interface AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;

// export interface

export interface AccordionProps extends Omit<UIAccordionProps, "$$typeof"> {
  type: "single";
  contents: AccordionMenu[];
  prefixIcon?: React.ReactNode;
  itemClassName?: string;
  hasAnimation?: boolean;
}

// export interface AccordionProps extends (AccordionSingleProps | AccordionMultipleProps) {
//   type?: AccordionType;
//   contents: AccordionMenu[];
// }
