import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';


const Layout = () => {
  return (
    <>
      <header >
        <Navigation />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;