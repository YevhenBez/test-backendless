import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';


const Layout = ({ tabs }) => {
  return (
    <>
      <header >
        <Navigation dataTabs={tabs} />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;