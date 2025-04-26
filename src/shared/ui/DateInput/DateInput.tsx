import cn from "classnames";

import { Icon } from "../Icon/Icon";
import styles from "./DateInput.module.css";
import { DateInputProps } from "./DateInput.props";

export const DateInput = ({
  icon,
  inputIcon,
  className,
  label,
  placeholder,
  error,
  ...props
}: DateInputProps) => {
  const IconComponent = icon ? Icon[icon] : null;
  const InputIconComponent = inputIcon ? Icon[inputIcon] : null;

  return (
    <div className={styles.inputBox}>
      <span className={styles.label}>
        {label} {IconComponent && <IconComponent />}
      </span>
      <input
        className={cn(styles.input, className, { [styles.invalid]: error })}
        placeholder={placeholder}
        type="date"
        {...props}
      />
      {InputIconComponent && <InputIconComponent className={styles.inputIcon} />}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
