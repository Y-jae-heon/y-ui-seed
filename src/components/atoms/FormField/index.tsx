import {
  FormControl,
  FormDescription,
  FormField as FormFieldUI,
  FormItem,
  FormMessage,
} from "@components/ui";
import { cn } from "@lib/utils";
import { FormFieldProps } from "./types";

export default function FormField(props: FormFieldProps) {
  const { label, description, render, className, ...rest } = props;
  return (
    <FormFieldUI
      {...props}
      render={(form) => (
        <FormItem className={cn("relative", className)}>
          {/* {label && (
            <FormLabel className="absolute left-[24px] px-[4px] top-[0] -translate-y-[25%] bg-gray13 z-[5]">
              {label}
            </FormLabel>
          )} */}
          <FormControl>{render(form)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
