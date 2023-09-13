"use client";
import { CollapsibleProps } from "./types";
import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible as CollapsibleUI,
} from "@components/ui";

export default function Collapsible(props: CollapsibleProps) {
  const {
    isOpen,
    onOpenChange,
    triggerNode,
    title,
    previewContents,
    children,
  } = props;

  const renderTitle = () => {
    switch (typeof title) {
      case "string":
        return <h4 className="text-sm font-semibold">{title}</h4>;

      default:
        return title;
    }
  };

  return (
    <CollapsibleUI open={isOpen} onOpenChange={onOpenChange}>
      <div className="flex items-center justify-between space-x-4">
        {renderTitle()}
        <CollapsibleTrigger asChild>{triggerNode}</CollapsibleTrigger>
      </div>
      {previewContents}
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </CollapsibleUI>
  );
}
