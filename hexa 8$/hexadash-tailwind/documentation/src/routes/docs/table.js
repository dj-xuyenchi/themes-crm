import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Basic = lazy(() => import('../../container/table/Table'));
const DataTable = lazy(() => import('../../container/table/DataTable'));

const TableRoute = () => {
 
  return (
    <Routes>
      <Route path={`basic`} element={<Basic />} />
      <Route path={`dataTable`} element={<DataTable />} />
    </Routes>
  );
};

export default TableRoute;
