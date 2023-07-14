import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../../container/pages/Overview'));

const DashboardRoutes = () => {
    
  return (
    <Routes>
      <Route index element={<Dashboard />} />      
    </Routes>
  );
};

export default DashboardRoutes;
