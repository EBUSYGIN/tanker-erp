import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import cn from "classnames";

import { Card } from "../Card/Card";
import { ModalProps } from "./Modal.props";
import styles from "./Modal.module.css";

export const Modal = ({ children, isOpen, setIsOpen, className, title }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={styles.background}>
        <DialogPanel className={cn(styles.panel, className)}>
          <Card>
            {title && <DialogTitle className={styles.title}>{title}</DialogTitle>}
            {children}
          </Card>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
