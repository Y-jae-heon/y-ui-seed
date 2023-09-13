"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { buttonRound, calendarColor } from "@styles/variants";

// ! -- 라운딩 사이즈 처리 논의 필요
export const calendarDaySelectedVariants = cva("", {
  variants: {
    selectedColor: calendarColor,
    isRound: {
      true: buttonRound.true,
      false: "rounded-md",
    },
  },
  defaultVariants: {
    selectedColor: "secondary",
    isRound: false,
  },
});

export const calendarRowVariants = cva("flex w-full mt-2", {
  variants: {
    // rowGap: calendarRowGap,
    // columnGap: calendarColumnGap,
  },
  defaultVariants: {
    // rowGap: 56,
    // columnGap: 4,
  },
});

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
export interface CalendarVariantProps
  extends VariantProps<typeof calendarDaySelectedVariants>,
    VariantProps<typeof calendarRowVariants> {}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selectedColor,
  components,
  // rowGap,
  // columnGap,
  ...props
}: CalendarProps & CalendarVariantProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        months: "flex flex-col ",
        month: "space-y-4",
        caption: "flex justify-center relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          // buttonVariants({ buttonColor: "plane" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "ml-[8px] disabled:opacity-20",
        nav_button_next: "disabled:opacity-20",
        // nav_button_previous: "absolute left-1 disabled:opacity-20",
        // nav_button_next: "absolute right-1 disabled:opacity-20",
        table: "w-full border-collapse mt-[16px]",
        head_row: "flex ", // + cn(calendarRowVariants({ rowGap })),
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        // row: cn(calendarRowVariants({ rowGap, columnGap })),
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 ",
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-gray2 transition-all"
        ),
        day_selected: cn(
          calendarDaySelectedVariants({ selectedColor }),
          "transition-all"
        ),
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-[24px] w-[24px]" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-[24px] w-[24px]" />
        ),
        ...components,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
