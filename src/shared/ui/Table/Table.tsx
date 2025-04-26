import cn from "classnames";

import { TableProps, TableItemProps, TableInputCellProps } from "./Table.props";
import styles from "./Table.module.css";

export const TableWrapper = ({ children, className }: TableItemProps<HTMLDivElement>) => {
  return <div className={cn(className, styles.wrapper)}>{children}</div>;
};

export const Table = ({ className, children }: TableProps) => {
  return <table className={cn(styles.table, className)}>{children}</table>;
};

export const TableHead = ({ className, children }: TableItemProps<HTMLTableSectionElement>) => {
  return <thead className={cn(styles.thead, className)}>{children}</thead>;
};

export const TableBody = ({ className, children }: TableItemProps<HTMLTableSectionElement>) => {
  return <tbody className={cn(styles.tbody, className)}>{children}</tbody>;
};

export const TableRow = ({ className, children }: TableItemProps<HTMLTableRowElement>) => {
  return <tr className={cn(styles.tr, className)}>{children}</tr>;
};

export const TableCell = ({
  className,
  component = "td",
  children,
  ...props
}: { component?: "th" | "td" } & TableItemProps<
  HTMLTableCellElement | HTMLTableDataCellElement
>) => {
  const Component = component;
  return (
    <Component className={cn(styles.cell, className)} {...props}>
      {children}
    </Component>
  );
};

export const TableInputCell = ({ placeholder, className, ...props }: TableInputCellProps) => {
  return (
    <TableCell className={cn(className)}>
      <input placeholder={placeholder} className={styles.input} {...props} />
    </TableCell>
  );
};
