"use client";
import { AlertDescription, AlertTitle, Alert as AlertUI } from "@components/ui";
import { AlertProps } from "./types";

export default function Notification(props: AlertProps) {
  const { icon, children, title, hasShadow = true, ...rest } = props;
  return (
    <AlertUI
      hasIcon={!!icon}
      hasIconWithoutTitle={!!icon && !title}
      hasShadow={hasShadow}
      {...rest}
    >
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription hasTitle={!!title}>{children}</AlertDescription>
    </AlertUI>
  );
}
