import { IconType } from "../Icon/Icon";

export interface DateInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  icon?: IconType;
  error?: string;
  inputIcon?: IconType;
}
