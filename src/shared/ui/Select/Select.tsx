import cn from "classnames";

import { Select as HeadlessUISelect, Field, Label } from "@headlessui/react";

import { SelectProps } from "./Select.props";
import styles from "./Select.module.css";
import { Icon } from "../Icon/Icon";

export const Select = ({
  className,
  optionsItems,
  error,
  label,
  icon,
  valueToReturn,
  selectIcon,
  onChange,
  ...props
}: SelectProps) => {
  const IconComponent = icon ? Icon[icon] : null;
  const SelectIcon = selectIcon ? Icon[selectIcon] : null;

  return (
    <Field className={cn(className, styles.selectBox)}>
      {error && <span className={styles.error}>{error}</span>}
      {label && (
        <Label className={styles.label}>
          {label}
          {IconComponent && <IconComponent />}
        </Label>
      )}
      {SelectIcon && <Icon.ArrowBack className={styles.icon} />}
      <HeadlessUISelect className={styles.select} onChange={onChange} {...props}>
        {optionsItems.map((option) => (
          <option key={option.id} value={valueToReturn === "id" ? option.id : option.name}>
            {option.name}
          </option>
        ))}
      </HeadlessUISelect>
    </Field>
  );
};
