"use client";

import * as React from "react";

import { Calendar as CalendarUI } from "@ui";
import { CalendarProps } from "./types";
import { ClassNames, DateFormatter } from "react-day-picker";
import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import Tooltip from "../Tooltip";

export default function Calendar(props: CalendarProps) {
  const {
    locale = ko,
    dateConfig,
    classNames,
    components,
    hasTooltip = false,
    ...rest
  } = props;

  const customClassNames: ClassNames = {
    cell: "first:text-red3 last:text-blue3 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    day: "flex group transition-all [&:not([aria-selected=true])]:hover:bg-gray13 rounded-md",
    head_row: "flex justify-between",
    head_cell:
      "flex w-[48px] sm:w-[32px] items-center justify-center text-b3 sm:text-b6 text-gray2 first:text-red3 last:text-blue3",
    row: "justify-between flex",
    ...classNames,
  };

  const formatCaption: DateFormatter = (props) => {
    return <span className="text-b1b">{dayjs(props).format("YYYY. MM")}</span>;
  };

  return (
    <CalendarUI
      classNames={customClassNames}
      className="rounded-md w-full"
      locale={locale}
      formatters={{ formatCaption }}
      components={{
        DayContent: (props) => {
          let reason = null;
          reason =
            dateConfig?.[`${dayjs(props.date).format("YYYY-MM-DD")}`]?.reason;

          const subText =
            dateConfig?.[`${dayjs(props.date).format("YYYY-MM-DD")}`]
              ?.shortenWork.description ||
            dateConfig?.[`${dayjs(props.date).format("YYYY-MM-DD")}`]?.dayOff
              .description;

          const holiday =
            dateConfig?.[`${dayjs(props.date).format("YYYY-MM-DD")}`]?.holiday;

          return hasTooltip && subText ? (
            <Tooltip content={subText}>
              <div
                className="flex flex-col w-[48px] h-[48px] sm:w-[40px] sm:h-[40px] items-center justify-center relative data-[holiday=true]:text-red3"
                data-holiday={!!holiday}
              >
                {dayjs().isSame(props.date, "day") && (
                  <span className="absolute rounded-full top-2 sm:top-1 w-[3px] h-[3px] bg-primary3 group-aria-[selected=true]:bg-gray13"></span>
                )}
                <span className="text-b3 sm:text-b6">
                  {dayjs(props.date).format("D")}
                </span>
                {reason && (
                  <span className="text-b7 absolute bottom-0 ">{reason}</span>
                )}
                {!reason && holiday && (
                  <span className="text-b7 absolute bottom-0 ">{holiday}</span>
                )}
              </div>
            </Tooltip>
          ) : (
            <div
              className="flex flex-col w-[48px] h-[48px] sm:w-[40px] sm:h-[40px] items-center justify-center relative data-[holiday=true]:text-red3"
              data-holiday={!!holiday}
            >
              {dayjs().isSame(props.date, "day") && (
                <span className="absolute rounded-full top-2 sm:top-1 w-[3px] h-[3px] bg-primary3 group-aria-[selected=true]:bg-gray13"></span>
              )}
              <span className="text-b3 sm:text-b6">
                {dayjs(props.date).format("D")}
              </span>
              {reason && (
                <span className="text-b7 absolute bottom-0 ">{reason}</span>
              )}
              {!reason && holiday && (
                <span className="text-b7 absolute bottom-0 ">정상영업</span>
              )}
            </div>
          );
        },
        ...components,
      }}
      {...rest}
    />
  );
}
