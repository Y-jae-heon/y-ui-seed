import { ControllerProps } from "react-hook-form";

export interface FormFieldProps extends ControllerProps {
  label: string;
  description?: string;
  className?: string;
}
