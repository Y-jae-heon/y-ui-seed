import {
  HoverCardContent,
  HoverCardTrigger,
  HoverCard as HoverCardUI,
} from "@components/ui";
import { HoverCardProps } from "./types";

export default function HoverCard(props: HoverCardProps) {
  const { children, trigger } = props;
  return (
    <HoverCardUI>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </HoverCardUI>
  );
}
