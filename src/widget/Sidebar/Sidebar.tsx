import cn from "classnames";

import { useLocation } from "react-router";
import { IRoute, routes } from "../../shared/config";
import { Button, Title } from "../../shared/ui";

import styles from "./Sidebar.module.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { useCallback } from "react";

export const Sidebar = () => {
  const location = useLocation();

  const buildSecondLevelMenu = useCallback(
    (route: IRoute, index: number) => {
      return (
        <Button
          key={route.path || index}
          className={cn(styles.menuItem, styles.menuItemChildren, {
            [styles.active]:
              location.pathname === route.path ||
              (route.altPaths &&
                route.altPaths.some((altPath) => location.pathname.includes(altPath))),
          })}
          appearance="ghost"
          size="m"
          typeOf="link"
          path={route.path}
          icon={route.icon}
          iconClassName={styles.buttonIcon}
        >
          {route.name}
        </Button>
      );
    },
    [location.pathname]
  );

  return (
    <nav className={styles.nav}>
      <Title tag="h2" color="white" size="l">
        Теплогаз
      </Title>
      {routes.map((route, index) => (
        <Disclosure key={route.path || index}>
          {({ open }) => (
            <div>
              {route.children ? (
                <DisclosureButton className={styles.buttonBox}>
                  <Button
                    className={cn(styles.menuItem, {
                      [styles.active]:
                        location.pathname === route.path ||
                        (route.altPaths &&
                          route.altPaths.some((altPath) => location.pathname.includes(altPath))),
                      [styles.menuItemParent]: route.children,
                      [styles.open]: open,
                    })}
                    appearance="ghost"
                    size="m"
                    typeOf={route.path ? "link" : "div"}
                    path={route.path}
                    icon={route.icon}
                    iconClassName={styles.buttonIcon}
                  >
                    {route.name}
                  </Button>
                </DisclosureButton>
              ) : (
                <Button
                  className={cn(styles.menuItem, {
                    [styles.active]:
                      location.pathname === route.path ||
                      (route.altPaths &&
                        route.altPaths.some((altPath) => location.pathname.includes(altPath))),
                    [styles.menuItemParent]: route.children,
                    [styles.open]: open,
                  })}
                  appearance="ghost"
                  size="m"
                  typeOf={route.path ? "link" : "div"}
                  path={route.path}
                  icon={route.icon}
                  iconClassName={styles.buttonIcon}
                >
                  {route.name}
                </Button>
              )}
              {route.children && (
                <DisclosurePanel className={styles.panel}>
                  {route.children.map((childrenItem, index) =>
                    buildSecondLevelMenu(childrenItem, index)
                  )}
                </DisclosurePanel>
              )}
            </div>
          )}
        </Disclosure>
      ))}
    </nav>
  );
};
