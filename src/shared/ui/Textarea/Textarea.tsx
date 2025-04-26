import cn from "classnames";

import { Textarea as HeadlessUITextarea } from "@headlessui/react";

import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import { Icon } from "../Icon/Icon";

export const Textarea = ({ placeholder, className, label, icon, error, ...props }: TextareaProps) => {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <div className={styles.inputBox}>
      <span className={styles.label}>
        {label} {IconComponent && <IconComponent />}
      </span>
      <HeadlessUITextarea
        className={cn(styles.input, className, { [styles.invalid]: error })}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
