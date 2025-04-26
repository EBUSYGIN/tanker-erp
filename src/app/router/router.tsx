import { createBrowserRouter } from 'react-router-dom';
import SchemePage from '../../pages/SchemePage/SchemePage';
import { RootLayout } from '../providers';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import WorksPage from '../../pages/WorksPage/WorksPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <SchemePage />},
      {path: '/calendar', element: <CalendarPage />},
      {path: '/works', element: <WorksPage />},
    ]
  },
]);
