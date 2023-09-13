import { AccordionContent, AccordionTrigger } from "@components/ui";
import { AccordionItemProps } from "./types";
import { cn } from "@lib/utils";

export default function AccordionItem(props: AccordionItemProps) {
  const {
    title,
    content,
    prefixIcon,
    titleClassName = "",
    contentClassName = "",
    ...rest
  } = props;
  return (
    <AccordionItem {...rest}>
      <div className="flex gap-[20px]">
        {prefixIcon && <div>{prefixIcon}</div>}
        <div className="flex-1">
          <AccordionTrigger
            className={cn("hover:no-underline", titleClassName)}
          >
            {title}
          </AccordionTrigger>
          <AccordionContent className={cn(contentClassName)}>
            {content}
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  );
}
