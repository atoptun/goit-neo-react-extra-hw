import { Suspense } from 'react';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

export const withGuardSuspense = (
  Component,
  { isPrivate = false, isRestricted = false, redirectTo = '/' } = {},
) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      {isPrivate ? (
        <PrivateRoute component={Component} redirectTo={redirectTo} />
      ) : isRestricted ? (
        <RestrictedRoute component={Component} redirectTo={redirectTo} />
      ) : (
        <Component />
      )}
    </Suspense>
  );
};
