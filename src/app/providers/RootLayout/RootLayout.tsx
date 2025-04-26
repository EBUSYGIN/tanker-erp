import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../../../widget';

import styles from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.pageLayout}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
