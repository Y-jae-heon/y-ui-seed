"use client";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs as TabsUI,
} from "@components/ui";
import { ButtonTabsProps } from "./types";

const renderTabsTrigger = (
  trigger: string | React.ReactNode,
  value: string,
  idx: number
) => {
  return (
    <TabsTrigger
      key={`trigger-${idx}`}
      className="data-[state=active]:bg-primary3 data-[state=active]:text-gray13 border-gray9 border rounded-full data-[state=active]:border-primary3 text-gray2"
      value={value}
    >
      {trigger}
    </TabsTrigger>
  );
};

const renderTabsContent = (
  content: string | React.ReactNode,
  value: string,
  idx: number
) => {
  return (
    <TabsContent key={`trigger-val-${idx}`} value={value}>
      {content}
    </TabsContent>
  );
};

export default function ButtonTabs(props: ButtonTabsProps) {
  const { contents, value, defaultValue, ...rest } = props;
  return (
    <TabsUI value={value} defaultValue={defaultValue}>
      <TabsList className="bg-transparent gap-[14px]">
        {contents.map((item, idx) =>
          renderTabsTrigger(item.trigger, item.triggerValue, idx)
        )}
      </TabsList>
      {contents.map((item, idx) =>
        renderTabsContent(item.content, item.triggerValue, idx)
      )}
    </TabsUI>
  );
}
