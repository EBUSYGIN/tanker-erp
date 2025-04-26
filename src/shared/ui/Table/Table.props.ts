export type TableProps = React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type TableItemProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export interface TableInputCellProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
