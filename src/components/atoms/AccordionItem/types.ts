import { AccordionItemProps as UIAccordionItemProps } from "@components/ui";

export interface AccordionItemProps
  extends Omit<UIAccordionItemProps, "title" | "content"> {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  prefixIcon?: React.ReactNode;
  titleClassName?: string;
  contentClassName?: string;
}
