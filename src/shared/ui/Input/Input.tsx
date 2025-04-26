import cn from "classnames";

import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import { Icon } from "../Icon/Icon";

export const Input = ({
  placeholder,
  className,
  label,
  icon,
  inputIcon,
  error,
  onClick,
  ...props
}: InputProps) => {
  const IconComponent = icon ? Icon[icon] : null;
  const InputIconComponent = inputIcon ? Icon[inputIcon] : null;

  return (
    <div className={styles.inputBox}>
      <span className={styles.label}>
        {label} {IconComponent && <IconComponent />}
      </span>
      <div className={styles.inputWrapper}>
        <input
          className={cn(styles.input, className, { [styles.invalid]: error })}
          placeholder={placeholder}
          {...props}
        />
        {InputIconComponent && (
          <button onClick={onClick} className={styles.button} title="Нажмите, чтобы искать">
            <InputIconComponent className={styles.inputIcon} />
          </button>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
