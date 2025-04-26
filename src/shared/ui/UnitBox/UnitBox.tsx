import cn from "classnames";

import { UnitBoxProps } from "./UnitBox.props";
import styles from "./UnitBox.module.css";

export const UnitBox = ({ children, className }: UnitBoxProps) => {
  return <div className={cn(styles.box, className)}>{children}</div>;
};
