"use client";

import React from "react";
import { DatePickerProps } from "./types";
import Flatpickr, { DateTimePickerProps } from "react-flatpickr";
import Input from "../Input";
import { useEffect, useRef } from "react";
import { cn } from "@lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui";
import Button from "../Button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Calendar from "../Calendar";

export default function DatePicker(props: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          buttonColor={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          asChild
        >
          <div>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div>
          <Calendar
            className="test"
            mode="default"
            selected={date}
            initialFocus
          />
          <div>hiadsifasidfi</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
