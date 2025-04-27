import { useState } from 'react';

import { Button, Modal } from '../../shared/ui';
import { WorksTable } from '../../widget';

import styles from './WorksPage.module.css';
import { CreateWorkForm } from '../../feature/works/ui';

const WorksPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button className={styles.button} appearance="ghost-blue" onClick={() => setIsOpen(true)}>
        Добавить работу
      </Button>
      <WorksTable />
      <Modal title='Добавить работу' isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreateWorkForm />
      </Modal>
    </>
  );
};

export default WorksPage;
