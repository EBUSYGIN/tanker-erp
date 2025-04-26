import cn from "classnames";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { TabsProps } from "./Tabs.props";
import styles from "./Tabs.module.css";

export const Tabs = ({ children, className }: TabsProps) => {
  return (
    <TabGroup className={cn(styles.tabs, className)}>
      {children}
    </TabGroup>
  );
};

Tabs.Tab = ({ children, className }: TabsProps) => {
  return <Tab className={({ selected }) => cn(styles.tab, className, { [styles.active]: selected })}>{children}</Tab>;
};

Tabs.TabList = ({ children, className }: TabsProps) => {
  return <TabList className={cn(styles.list, className)}>{children}</TabList>;
};

Tabs.TabPanels = ({ children, className }: TabsProps) => {
  return <TabPanels className={cn(styles.panels, className)}>{children}</TabPanels>;
};

Tabs.TabPanel = ({ children, className }: TabsProps) => {
  return <TabPanel className={cn(styles.panel, className)}>{children}</TabPanel>;
};
