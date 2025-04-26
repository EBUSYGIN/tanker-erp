import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: ReactNode;
  className?: string;
  title?: string;
}
