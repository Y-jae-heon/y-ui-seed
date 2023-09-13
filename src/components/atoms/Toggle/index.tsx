import { Toggle as ToggleUI } from "@components/ui";
import { ToggleProps } from "./types";

export default function Toggle(props: ToggleProps) {
  const { children, ...rest } = props;
  return <ToggleUI {...rest}>{children}</ToggleUI>;
}
