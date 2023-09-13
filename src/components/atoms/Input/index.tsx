import { cn } from "@lib/utils";
import { InputProps } from "./types";
import { Input as InputUI } from "@components/ui";
import { IconClear } from "@icon";
import { forwardRef, useId, useState } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      isRound,
      className,
      parantClassName,
      hasClear,
      onChange,
      placeholder,
      ...rest
    } = props;

    const [isFocus, setIsFocus] = useState(false);

    const defaultId = useId();

    return (
      <div className={cn("flex w-full relative", parantClassName)}>
        {placeholder ? (
          <label
            data-active={isFocus || !!rest.value}
            data-disabled={rest.disabled}
            className="absolute left-[12px] px-[4px] top-[50%] -translate-y-[50%] select-none cursor-text text-gray7 text-b4 data-[active=true]:text-b6 data-[active=true]:-translate-y-[170%] data-[active=true]:translate-x-[8px] [&:not([data-disabled=true])]:bg-gray13 transition-all duration-200"
            htmlFor={rest.id || defaultId}
          >
            {placeholder}
          </label>
        ) : null}
        <InputUI
          className={cn(
            isRound && "rounded-full",
            "border-gray9 pl-[23px] pr-[12px] py-[11px] placeholder:text-gray7 disabled:bg-gray11 disabled:text-gray8 disabled:border-gray11 aria-[invalid=true]:border-red3 focus:border-primary2 focus-visible:ring-0 focus:shadow-[0px_0px_0px_3px] focus:shadow-primary10 aria-[invalid=true]:shadow-[0px_0px_0px_3px_#FCECEE]",
            className
          )}
          {...rest}
          onFocus={(e) => {
            rest.onFocus?.(e);
            setIsFocus(true);
          }}
          onBlur={(e) => {
            rest.onBlur?.(e);
            setIsFocus(false);
          }}
          id={rest.id || defaultId}
          onChange={(evt) => {
            onChange?.(evt.target.value);
          }}
          ref={ref}
        />
        {hasClear && props.value && (
          <IconClear
            className={cn(
              "absolute right-[12px] top-[50%] -translate-y-2/4 cursor-pointer"
            )}
            onClick={() => {
              if (rest.disabled) return;

              props.onChange?.("");
            }}
          />
        )}
      </div>
    );
  }
);

Input.displayName = "inputAtom";

export default Input;
