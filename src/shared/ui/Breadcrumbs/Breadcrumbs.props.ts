import { IBreadcrumb } from "../../types";

export interface BreadcrumbProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  line: IBreadcrumb[];
}
