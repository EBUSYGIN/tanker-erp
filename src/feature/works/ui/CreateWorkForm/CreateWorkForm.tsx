import cn from 'classnames';

import { Input } from '../../../../shared/ui';
import { CreateWorkFormProps } from './CreateWorkForm.props';

import styles from './CreateWorkForm.module.css';

export const CreateWorkForm = ({ className, ...props }: CreateWorkFormProps) => {
  return (
    <form className={cn(styles.form, className)} {...props}>
      <Input placeholder="Название" />
      <Input placeholder="Ед. изм." />
      <Input placeholder="Количество" />
    </form>
  );
};
