"use client";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenu as DropdownUI,
} from "@components/ui";
import { DropdownItem, DropdownProps } from "./types";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Side } from "../common-types";

const renderSeparator = (bool: boolean, idx: number) => {
  if (bool) {
    return <DropdownMenuSeparator key={`dropdown-menu-separator-${idx}`} />;
  }

  return null;
};

const renderDropdownTo = (to: string | React.ReactNode) => {
  if (to) {
    return <DropdownMenuShortcut>{to}</DropdownMenuShortcut>;
  }

  return null;
};

const renderDropdownItem = (item: DropdownItem, idx: number) => {
  const { hasSeparator = false, offset = 0 } = item;

  const items = [];
  switch (item.type) {
    case "label":
      // return (
      // <>
      items.push(
        <DropdownMenuLabel key={`dropdown-menu-label-${idx}`}>
          {item.element}
          {/* {renderDropdownTo(item.to)} */}
        </DropdownMenuLabel>
      );
      items.push(renderSeparator(hasSeparator, idx));

      // {renderSeparator(hasSeparator, idx)}
      // </>
      // );
      break;
    case "menu":
      // return (
      // <>
      items.push(
        <DropdownMenuItem key={`dropdown-menu-item-${idx}`}>
          {item.element}
          {renderDropdownTo(item.to)}
        </DropdownMenuItem>
      );
      items.push(renderSeparator(hasSeparator, idx));
      // {renderSeparator(hasSeparator, idx)}
      // </>
      // );
      break;

    case "parent":
      // <>
      items.push(
        <DropdownMenuSub key={`dropdown-menu-sub-${idx}`}>
          <DropdownMenuSubTrigger>
            {item.element}
            {/* {renderDropdownTo(item.to)} */}
          </DropdownMenuSubTrigger>
          {renderSeparator(hasSeparator, idx)}
          <DropdownMenuPortal key={`dropdown-menu-protal-${idx}`}>
            <DropdownMenuSubContent
              key={`dropdown-menu-sub-content-${idx}`}
              sideOffset={offset}
            >
              {item.children?.map((child, idx) => {
                return renderDropdownItem(child, idx);
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );

      // </>
      break;

    default:
      break;
  }

  return items;
};

export default function Dropdown(props: DropdownProps) {
  const {
    isOpen,
    defaultOpen,
    onOpenChange,
    data,
    renderDropdown,
    children,
    offset = 0,
    placement = Side.BOTTOM,
  } = props;

  const renderDefaultDropdownContent = () => {
    if (renderDropdown) {
      return renderDropdown();
    } else {
      return data?.map((item, idx) => renderDropdownItem(item, idx));
    }
  };

  return (
    <DropdownUI>
      <DropdownMenuTrigger key={"dropdown-trigger-key"}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        key={"dropdown-content-key"}
        side={placement}
        sideOffset={offset}
      >
        {renderDefaultDropdownContent()}
      </DropdownMenuContent>
    </DropdownUI>
  );
}
