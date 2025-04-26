export interface CalendarCardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  monthName: string;
  month: number;
  year: number;
}