"use client";
import { IconArrowUp } from "@icon";
import {
  Accordion as AccordionUI,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui";
import { AccordionProps } from "./types";

const ANIMATION_DELAY = 300;

/**
 * @author Mumu
 * @param props interface AccordionProps
 * @returns Accordions
 */

export default function Accordion(props: AccordionProps) {
  const {
    prefixIcon,
    contents,
    type = "single",
    itemClassName,
    hasAnimation = false,
  } = props;

  return (
    <AccordionUI
      type={type}
      collapsible
      className="w-full flex flex-col gap-[8px]"
    >
      {contents.map((item, idx) => (
        <AccordionItem
          data-aos={hasAnimation ? "fade-up" : ""}
          data-aos-delay={String(ANIMATION_DELAY * idx)}
          className={itemClassName}
          key={idx.toString()}
          value={idx.toString()}
        >
          <div className="flex gap-[20px]">
            {prefixIcon && <div>{prefixIcon}</div>}
            <div className="flex-1">
              <AccordionTrigger className="hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </div>
          </div>
        </AccordionItem>
      ))}
    </AccordionUI>
  );
}
