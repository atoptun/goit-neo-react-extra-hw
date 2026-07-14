import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { withGuardSuspense } from './guards/helper';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const AppLayout = lazy(() => import('./components/AppLayout/AppLayout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(
  () => import('./pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(
  () => import('./pages/ContactsPage/ContactsPage.jsx'),
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: withGuardSuspense(AppLayout),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withGuardSuspense(HomePage) },
      {
        path: '/register',
        element: withGuardSuspense(RegistrationPage, {
          isRestricted: true,
          redirectTo: '/contacts',
        }),
      },
      {
        path: '/login',
        element: withGuardSuspense(LoginPage, {
          isRestricted: true,
          redirectTo: '/contacts',
        }),
      },
      {
        path: '/contacts',
        element: withGuardSuspense(ContactsPage, {
          isPrivate: true,
          redirectTo: '/login',
        }),
      },

      { path: '*', element: withGuardSuspense(NotFoundPage) },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
