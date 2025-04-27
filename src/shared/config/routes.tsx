import { IconType } from "../ui";

export interface IRoute {
  path?: string;
  name: string;
  icon: IconType;
  altPaths?: string[];
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/calendar",
    name: "Заполнить данные",
    icon: "EditMedium",
    altPaths: ["/calendar"],
  },
  {
    path: "/",
    name: "Схема",
    icon: "Home",
  },

  {
    name: "Справочники",
    icon: "Book",
    altPaths: ["/counteragents", "/technics", "/positions", "/worktypes", "/employees"],
    children: [
      {
        path: "/works",
        name: "Работы",
        icon: "Works",
      },
      {
        path: "/materials",
        name: "Материалы",
        icon: "Badge",
      },
    ],
  },
];
