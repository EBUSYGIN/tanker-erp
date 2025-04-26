import { IBreadcrumb } from "../../shared/types";

export interface TopPageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string;
    breadcrumbsItems?: IBreadcrumb[];
    backLink?: string;
  }