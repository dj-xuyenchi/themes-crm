import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const FirestoreView = lazy(() => import('../../container/crud/firestore/Index'));
const FirestoreAdd = lazy(() => import('../../container/crud/firestore/Add'));
const FirestoreEdit = lazy(() => import('../../container/crud/firestore/Edit'));
const NotFound = lazy(() => import('../../container/pages/404'));

function FirestoreRoute() {
  return (
    <Routes>
      <Route path="crud/*" element={<FirestoreView />} />
      <Route path="crud/add" element={<FirestoreAdd />} />
      <Route path="crud/edit/:id" element={<FirestoreEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default FirestoreRoute;
