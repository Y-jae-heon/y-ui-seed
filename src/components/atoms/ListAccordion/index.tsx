"use client";
import { IconArrowUp } from "@icon";
import {
  ListAccordion as AccordionUI,
  ListAccordionContent,
  ListAccordionItem,
  ListAccordionTrigger,
} from "@ui";
import Link from "next/link";
import { ListAccordionMenu, ListAccordionProps } from "./types";

/**
 * @author Mumu
 * @param props interface AccordionProps
 * @returns Accordions
 */

export default function ListAccordion(props: ListAccordionProps) {
  const { prefixIcon, contents, type = "single", defaultValue } = props;

  const renderContent = (item: ListAccordionMenu, idx: number) => {
    return item.href ? (
      <ListAccordionItem key={idx.toString()} value={item.id}>
        <Link
          className="active:bg-gray12"
          href={item.href}
          onClick={item.onClick}
        >
          <div className="flex gap-[20px]">
            {prefixIcon && <div>{prefixIcon}</div>}
            <div className="flex-1">
              <ListAccordionTrigger
                className="hover:no-underline"
                hasIcon={item.hasIcon}
              >
                {item.title}
              </ListAccordionTrigger>
              <ListAccordionContent>{item.content}</ListAccordionContent>
            </div>
          </div>
        </Link>
      </ListAccordionItem>
    ) : (
      <ListAccordionItem key={idx.toString()} value={item.id}>
        <div className="flex gap-[20px]">
          {prefixIcon && <div>{prefixIcon}</div>}
          <div className="flex-1">
            <ListAccordionTrigger
              className="hover:no-underline"
              hasIcon={item.hasIcon}
            >
              {item.title}
            </ListAccordionTrigger>
            <ListAccordionContent>{item.content}</ListAccordionContent>
          </div>
        </div>
      </ListAccordionItem>
    );
  };

  return (
    <AccordionUI
      type={type}
      collapsible
      className="w-full"
      defaultValue={defaultValue}
    >
      {contents.map((item, idx) => renderContent(item, idx))}
    </AccordionUI>
  );
}
