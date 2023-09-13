"use client";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet as SheetUI,
} from "@components/ui";
import { ISheetData, SheetProps } from "./types";
import Button from "../Button";
import { Side } from "../common-types";

const renderSheetHeader = (data: ISheetData) => {
  const render = [];

  if (data.headerTitle) {
    render.push(<SheetTitle>{data.headerTitle}</SheetTitle>);
  }
  if (data.headerDescription) {
    render.push(<SheetDescription>{data.headerDescription}</SheetDescription>);
  }

  return render;
};

const renderSheetFooter = (data: ISheetData) => {
  if (data.footer) {
    return data.footer;
  }
  if (data.onFooterClick) {
    return (
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    );
  }
};

export default function Sheet(props: SheetProps) {
  const {
    isOpen,
    onOpenChange,
    data,
    mobileSize,
    tabletSize,
    size,
    placement = Side.RIGHT,
    hasOutsideClose,
    hasBackground,
    children,
    className,
    sheetVariants,
    rootClassName,
    hasCloseButton,
    sheetClassName,
    type,
    ...rest
  } = props;
  return (
    <div className={sheetClassName}>
      <SheetUI open={isOpen} onOpenChange={(e) => onOpenChange?.(e)} {...rest}>
        {/* <SheetTrigger asChild>{children}</SheetTrigger> */}
        <SheetContent
          sheetClassName={sheetClassName}
          className={className}
          side={placement}
          hasBackground={hasBackground}
          hasCloseButton={hasCloseButton}
          {...sheetVariants}
        >
          {children}
        </SheetContent>
      </SheetUI>
    </div>
  );
}
