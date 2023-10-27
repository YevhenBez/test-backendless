import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const HomeDummyTable = lazy(() => import('../pages/homeDummyTable'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<HomeDummyTable />}/>
      </Routes>
    </div>
  );
};
