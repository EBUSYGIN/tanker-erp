import cn from 'classnames';

import { Table, TableBody, TableCell, TableHead, TableRow, TableWrapper } from '../../shared/ui';

import { WorksTableProps } from './WorksTable.props';
import styles from "./WorksTable.module.css";

export const WorksTable = ({ className, ...props }: WorksTableProps) => {
  return (
    <TableWrapper className={cn(className)}>
      <Table {...props}>
        <TableHead>
          <TableRow>
            <TableCell className={styles.name}>
              Наименование объекта ремонта. Содержание ремонтных работ. Наименование и краткая
              техническая характеристика применяемых для выполнения работ запасных частей, расходных
              материалов и горюче-смазочных материалов
            </TableCell>
            <TableCell>Ед. изм.</TableCell>
            <TableCell>Кол-во</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Установить/снять емкость для мусора ( не менее 8 м3) с последующей утилизацией.
            </TableCell>
            <TableCell>шт.</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Подключить/отключить электропитание 440 V, 60 Гц.</TableCell>
            <TableCell>шт.</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
};
