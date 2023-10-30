import { Routes, Route, Navigate } from 'react-router-dom';
import {useEffect, useState, lazy } from 'react';
import Layout from '../components/layout';

export const App = () => {
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
  async function fetchTabs() {
    try {
      const data = await import('../service/tabs.json');
      setTabsData(data.tabs);
    } catch (error) {
      console.log(error.message);
    } 
  }
  fetchTabs()
  }, [])
  
  const sortedData = tabsData.sort((a, b) => a.order - b.order);

  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout tabs={sortedData} />}>
          {sortedData.map((tab, i)=> {
              const Page = lazy(() => import(`./${tab.path}`));
              if (i === 0) {
                return (
                  <>
                    <Route key={tab.id} index element={ <Navigate to={tab.id} /> }/>
                    <Route key={tab.id} path={tab.id}  element={<Page />} />
                  </>
                )
              }
              return (
                <Route key={tab.id} path={tab.id} element={<Page />} />
              )
            })}
        </Route>
      </Routes>
    </div>
  );
};

