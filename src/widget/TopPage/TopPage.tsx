import cn from 'classnames';

import { TopPageProps } from './TopPage.props';
import styles from './TopPage.module.css';
import { Link } from 'react-router';
import { Breadcrumbs, Icon, Title } from '../../shared/ui';

export const TopPage = ({ className, title, breadcrumbsItems, backLink, children, ...props }: TopPageProps) => {
 return (
   <header className={cn(className, styles.topPage)} {...props}>
     <div className={styles.head}>
       {backLink && <Link to={backLink} className={styles.back}>
         <Icon.LeftArrow />
       </Link>}
       <Title className={styles.title} tag="h1" size="xl">
         {title}
       </Title>
       {children}
     </div>
     {breadcrumbsItems && <Breadcrumbs line={breadcrumbsItems} />}
   </header>
 );
};