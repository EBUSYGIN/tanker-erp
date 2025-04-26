import { IconType } from "../Icon/Icon";

type ValueToReturn = "name" | "id";

interface IOption {
  id: string | number;
  name: string;
}

interface IExtendedOption extends IOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SelectProps {
  className?: string;
  optionsItems: IExtendedOption[];
  label?: string;
  error?: string;
  icon?: IconType;
  valueToReturn: ValueToReturn;
  selectIcon?: IconType;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}
