"use client";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Menubar as MenubarUI,
} from "@components/ui";
import { IMenubarMenu, IMenubarMenuItem, MenubarProps } from "./types";
import { MenubarLabel } from "@radix-ui/react-menubar";
import { Side } from "../common-types";

const renderSeparator = (bool: boolean) => {
  if (bool) {
    return <MenubarSeparator />;
  }

  return null;
};

const renderMenubarTo = (to: string | React.ReactNode) => {
  if (to) {
    return <MenubarShortcut>{to}</MenubarShortcut>;
  }

  return null;
};

const renderMenubarItem = (item: IMenubarMenuItem, idx: number) => {
  const { hasSeparator = false, offset = 0 } = item;
  switch (item.type) {
    case "label":
      return (
        <>
          <MenubarLabel key={`menubar-menu-label-${idx}`}>
            {item.element}
            {renderMenubarTo(item.to)}
          </MenubarLabel>
          {renderSeparator(hasSeparator)}
        </>
      );

    case "menu":
      return (
        <>
          <MenubarItem key={`menubar-menu-item-${idx}`}>
            {item.element}
            {renderMenubarTo(item.to)}
          </MenubarItem>
          {renderSeparator(hasSeparator)}
        </>
      );

    case "parent":
      return (
        <>
          <MenubarSub key={`menubar-menu-sub-${idx}`}>
            <MenubarSubTrigger>
              {item.element}
              {renderMenubarTo(item.to)}
            </MenubarSubTrigger>
            {renderSeparator(hasSeparator)}
            <MenubarPortal>
              <MenubarSubContent sideOffset={offset}>
                {item.children?.map((child, idx) => {
                  return renderMenubarItem(child, idx);
                })}
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
        </>
      );

    default:
      break;
  }
};

const renderMenubar = (item: IMenubarMenu, idx: number) => {
  const { placement = Side.BOTTOM, offset = 0 } = item;
  return (
    <MenubarMenu key={`menubar-menu-${idx}`}>
      <MenubarTrigger>{item.element}</MenubarTrigger>
      <MenubarContent side={placement} sideOffset={offset}>
        {item.children?.map((child: IMenubarMenuItem, idx: number) =>
          renderMenubarItem(child, idx)
        )}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default function Menubar(props: MenubarProps) {
  const { menus } = props;
  return (
    <MenubarUI>{menus?.map((item, idx) => renderMenubar(item, idx))}</MenubarUI>
  );
}
