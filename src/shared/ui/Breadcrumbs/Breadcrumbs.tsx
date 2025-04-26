import { Link } from "react-router";
import cn from "classnames";

import styles from "./Breadcrumbs.module.css";
import { BreadcrumbProps } from "./Breadcrumbs.props";

export const Breadcrumbs = ({ line, ...props }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumbs} {...props}>
      {line.map((pageObj, index) => (
        <span key={pageObj.path || index}>
          {index > 0 && " / "}
          {pageObj.type === "link" ? (
            <Link
              to={pageObj.path}
              className={cn(styles.piece, {
                [styles.active]: index === line.length - 1,
              })}
            >
              {pageObj.name}
            </Link>
          ) : (
            <span
              className={cn(styles.piece, {
                [styles.active]: index === line.length - 1,
              })}
            >
              {pageObj.name}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};
