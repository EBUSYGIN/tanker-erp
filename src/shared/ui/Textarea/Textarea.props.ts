import { IconType } from "../Icon/Icon";

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  icon?: IconType;
  error?: string;
}
