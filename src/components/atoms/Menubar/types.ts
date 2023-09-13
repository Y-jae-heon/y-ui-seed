import { MenubarProps as UIMenubarProps } from "@components/ui";
import { Side } from "../common-types";

// export enum MenubarType {
//   RADIO = "radio",
//   DEFAULT = "default",
// }

export enum MenubarType {
  LABEL = "label",
  MENU = "menu",
  PARENT = "parent",
}

export interface IMenubarMenuItem {
  element: string | React.ReactNode;
  to?: string | React.ReactNode;
  hasSeparator?: boolean;
  type?: MenubarType;
  offset?: number;
  href?: string;
  children?: IMenubarMenuItem[];
}

export interface IMenubarMenu {
  element: string | React.ReactNode;
  placement?: Side;
  offset?: number;
  href?: string;
  children: IMenubarMenuItem[];
}

export interface MenubarProps extends UIMenubarProps {
  menus: IMenubarMenu[];
}
