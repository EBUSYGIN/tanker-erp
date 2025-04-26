import cn from "classnames";
import { createElement, memo } from "react";

import { TitleProps } from "./Title.props";
import styles from "./Title.module.css";

export const Title = memo(
  ({ children, className, color = "black", tag, size }: TitleProps) => {
    return createElement(
      tag,
      {
        className: cn(styles[size], styles[color], className),
      },
      children
    );
  }
);
