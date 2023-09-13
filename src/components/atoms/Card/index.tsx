"use client";
import * as React from "react";

import {
  Card as CardUI,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui";
import { CardProps } from "./types";

export default function Card(props: CardProps) {
  const { title, footer, children, description, className } = props;

  return (
    <CardUI className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="w-full">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardUI>
  );
}
