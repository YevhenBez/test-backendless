import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/layout';
const HomeDummyList = lazy(() => import('../pages/homeDummyList'));
const DummyTable = lazy(() => import('../pages/dummyTable'));
const DummyChart = lazy(() => import('../pages/dummyChart'));

export const App = () => {
  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeDummyList />} />
          <Route path="dummyList" element={<HomeDummyList />} />
          <Route path="dummyTable" element={<DummyTable />} />
          <Route path="dummyChart" element={<DummyChart />} />
        </Route>
      </Routes>
    </div>
  );
};
