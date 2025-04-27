import cn from 'classnames';

import { Input } from '../../../../shared/ui';
import { CreateMaterialFormProps } from './CreateMaterialForm.props';

import styles from './CreateMaterialForm.module.css';

export const CreateMaterialForm = ({ className, ...props }: CreateMaterialFormProps) => {
  return (
    <form className={cn(styles.form, className)} {...props}>
      <Input placeholder="Название" />
      <Input placeholder="Ед. изм." />
      <Input placeholder="Получено" />
    </form>
  );
};
