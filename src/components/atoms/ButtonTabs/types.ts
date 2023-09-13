import { TabsProps as UITabsProps } from "@components/ui";

export interface IButtonTabsContent {
  trigger: string | React.ReactNode;
  content: string | React.ReactNode;
  triggerValue: string;
}
export interface ButtonTabsProps extends UITabsProps {
  contents: IButtonTabsContent[];
}
