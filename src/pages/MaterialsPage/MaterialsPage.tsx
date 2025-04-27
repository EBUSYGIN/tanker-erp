import { useState } from 'react';

import { Button, Modal } from '../../shared/ui';
import { MaterialsTable } from '../../widget';

import { CreateMaterialForm } from '../../feature/materials/ui';
import styles from './MaterialsPage.module.css';

const MaterialsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button className={styles.button} appearance="ghost-blue" onClick={() => setIsOpen(true)}>
        Добавить Материал
      </Button>
      <MaterialsTable />
      <Modal title="Добавить материал" isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreateMaterialForm />
      </Modal>
    </>
  );
};

export default MaterialsPage;
