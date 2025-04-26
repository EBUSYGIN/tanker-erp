import { Button } from "../../shared/ui";

import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.props";

export const Pagination = ({ limit, setOffset, count, offset }: PaginationProps) => {
  const nextPage = () => {
    if (count < offset + limit + 1) return;
    setOffset(offset + limit);
  };

  const prevPage = () => {
    if (offset === 0) return;
    setOffset(offset - limit);
  };

  return (
    <div className={styles.pagination}>
      <Button icon="ArrowBack" size="s" onClick={prevPage} />
      <Button icon="ArrowForward" size="s" onClick={nextPage} />
    </div>
  );
};
