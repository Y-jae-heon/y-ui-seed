import { Form as FormUI } from "@components/ui";
import { FormProps } from "./types";

export default function Form(props: FormProps) {
  return <FormUI {...props} />;
}
