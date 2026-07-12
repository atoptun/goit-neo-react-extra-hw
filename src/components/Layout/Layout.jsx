import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';

function Layout() {
  return (
    <div>
      <header>
        <AppBar />
      </header>

      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
export default Layout;
