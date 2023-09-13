import { ButtonProps as UIButtonProps } from "@components/ui";

export interface ButtonProps extends UIButtonProps {
  onClick?: () => void;
  isFull?: boolean;
}
