import { createBrowserRouter } from 'react-router-dom';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import DayData from '../../pages/DayData/DayData';
import MaterialsPage from '../../pages/MaterialsPage/MaterialsPage';
import SchemePage from '../../pages/SchemePage/SchemePage';
import WorksPage from '../../pages/WorksPage/WorksPage';
import { RootLayout } from '../providers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <SchemePage /> },
      { path: '/calendar', element: <CalendarPage /> },
      { path: '/works', element: <WorksPage /> },
      { path: '/materials', element: <MaterialsPage /> },
      { path: '/calendar/:date', element: <DayData /> },
    ],
  },
]);
