import cn from 'classnames';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableInputCell,
  TableRow,
  TableWrapper,
} from '../../shared/ui';

import styles from './MaterialsTable.module.css';
import { MaterialsTableProps } from './MaterialsTable.props';

export const MaterialsTable = ({ className, ...props }: MaterialsTableProps) => {
  return (
    <TableWrapper className={cn(className)}>
      <Table {...props}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell className={styles.name}>Название</TableCell>
            <TableCell>Ед. изм.</TableCell>
            <TableCell>Получено</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Материал 1</TableCell>
            <TableCell>куб.</TableCell>
            <TableInputCell />
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Материал 2</TableCell>
            <TableCell>куб.</TableCell>
            <TableInputCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
};
