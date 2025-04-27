import cn from 'classnames';

import { Table, TableBody, TableCell, TableHead, TableInputCell, TableRow, TableWrapper } from '../../shared/ui';

import { MaterialsTableProps } from './MaterialsTable.props';
import styles from './MaterialsTable.module.css';

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
            <TableCell>
              <TableInputCell />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Материал 2</TableCell>
            <TableCell>куб.</TableCell>
            <TableCell>
              <TableInputCell />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
};
