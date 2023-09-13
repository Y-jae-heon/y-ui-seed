import {
  CalendarProps as UICalendarProps,
  CalendarVariantProps,
} from "@components/ui";
import { ReservationAvailableDatesDto } from "@teamslogup/boostree-api-lib/dist/api/reservation/types";
import {
  DayPickerDefaultProps,
  DayPickerMultipleProps,
  DayPickerRangeProps,
  DayPickerSingleProps,
  Matcher,
  SelectMultipleEventHandler,
  SelectRangeEventHandler,
  SelectSingleEventHandler,
} from "react-day-picker";

export interface ShortenWork {
  title: string;
  description: string;
  startedAt: string;
  endedAt: string;
  nodeId: number;
}

export interface TDateConfig {
  dayOff: ShortenWork;
  shortenWork: ShortenWork;
  isWork: boolean;
  holiday: string | null;
  reason: string | null;
}

export type CalendarProps = UICalendarProps &
  CalendarVariantProps & {
    dateConfig?:
      | Record<string, TDateConfig>
      | ReservationAvailableDatesDto
      | undefined;
    hasTooltip?: boolean;
    disabledHover?: boolean;
  };
