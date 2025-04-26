import { CheckboxProps } from "./Checkbox.props";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input type="checkbox" {...props} />
      Отметьте, если пользователь администратор
    </div>
  );
};
