import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Overview = lazy(() => import('../../container/pages/Overview'));

const OverviewRoutes = () => {
    
  return (
    <Routes>
      <Route index element={<Overview />} />      
    </Routes>
  );
};

export default OverviewRoutes;