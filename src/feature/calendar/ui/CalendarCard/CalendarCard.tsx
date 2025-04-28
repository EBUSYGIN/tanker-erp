import cn from "classnames";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import { ru } from "date-fns/locale/ru";

import { CalendarCardProps } from "./CalendarCard.props";
import styles from "./CalendarCard.module.css";
import { Button } from "../../../../shared/ui";

const WEEK_DAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

export const CalendarCard = ({ className, monthName, month, year, ...props }: CalendarCardProps) => {
  const monthStart = startOfMonth(new Date(year, month));
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const today = new Date();

  const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <div className={cn(className, styles.calendarCard)} {...props}>
      <h6 className={styles.title}>{monthName}</h6>
      <div className={styles.weekdays}>
        {WEEK_DAYS.map((day, index) => (
          <div key={index} className={styles.weekday}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.days}>
        {days.map((day, index) => {
          return day.getMonth() === month ? (
            <Button
              size="boxed"
              appearance="dark"
              key={index}
              typeOf="link"
              path={`/calendar/${format(day, "yyyy-MM-dd")}`}
              className={cn(styles.day, {
                [styles.today]: isSameDay(day, today),
              })}
            >
              {format(day, "d", { locale: ru })}
            </Button>
          ) : <span key={index} />;
        })}
      </div>
    </div>
  );
};
