import { ListAccordionProps as UIAccordionProps } from "@components/ui";
// import { AccordionMultipleProps as UIAccordionMultipleProps } from "@radix-ui/react-accordion";
import React from "react";

export interface ListAccordionMenu {
  id: string;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  hasIcon?: boolean;
  href?: string;
  onClick?: () => void;
}

// interface AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;

// export interface

export interface ListAccordionProps extends Omit<UIAccordionProps, "$$typeof"> {
  type: "single";
  contents: ListAccordionMenu[];
  prefixIcon?: React.ReactNode;
  defaultValue: string;
}

// export interface AccordionProps extends (AccordionSingleProps | AccordionMultipleProps) {
//   type?: AccordionType;
//   contents: AccordionMenu[];
// }
