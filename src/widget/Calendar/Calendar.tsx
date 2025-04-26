import cn from "classnames";

import { CalendarProps } from "./Calendar.props";
import styles from "./Calendar.module.css";
import { CalendarCard } from "../../feature/calendar/ui";
import { getYear } from "date-fns";
import { useState } from "react";
import { Icon } from "../../shared/ui";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const Calendar = ({ className, ...props }: CalendarProps) => {
  const [year, setYear] = useState(getYear(new Date()));
  
  return (
    <div className={cn(className, styles.calendar)} {...props}>
      <div className={styles.yearHandler}>
        <button className={styles.yearHandlerButton} onClick={() => setYear((prevYear) => prevYear - 1)}>
          <Icon.ArrowForward className={cn(styles.icon, styles.arrowLeft)} />
        </button>
        {year}
        <button className={styles.yearHandlerButton} onClick={() => setYear((prevYear) => prevYear + 1)}>
          <Icon.ArrowForward className={cn(styles.icon)} />
        </button>
      </div>
      <div className={styles.months}>
        {MONTHS.map((month, index) => (
          <CalendarCard year={year} key={month} monthName={month} month={index} />
        ))}
      </div>
    </div>
  );
};
