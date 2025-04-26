export interface PaginationProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  offset: number;
  count: number;
  limit: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}
