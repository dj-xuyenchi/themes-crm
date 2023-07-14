import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const BlankPage = lazy(() => import('../../container/pages/BlankPage'));

function PagesRoute() {
  return (
    <Routes>
      <Route index element={<BlankPage />} />
      <Route path="starter" element={<BlankPage />} />
    </Routes>
  );
}

export default PagesRoute;
