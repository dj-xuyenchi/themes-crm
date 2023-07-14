import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';
import Overview from './Overview';
import Features from './features';
const Installation = lazy(() => import('../../container/pages/Installation'));
const FolderStructure = lazy(() => import('../../container/pages/FolderStructure'));
const NewPage = lazy(() => import('../../container/pages/NewPage'));
const Customization = lazy(() => import('../../container/pages/Customization'));
const Navigation = lazy(() => import('../../container/pages/Navigation'));
const Routing = lazy(() => import('../../container/pages/Routing'));
const MultiLang = lazy(() => import('../../container/pages/Multi-language'));
const Redux = lazy(() => import('../../container/pages/Redux'));
const Auth0 = lazy(() => import('../../container/pages/Auth0'));
const Cridits = lazy(() => import('../../container/pages/Credits'));
const Axios = lazy(() => import('../../container/pages/AxiosIntegration'));
const Firebase = lazy(() => import('../../container/pages/FirebaseIntegration'));
const Charts = lazy(() => import('./charts'));
const Tables = lazy(() => import('./table'));

const Admin = React.memo(() => {
  const {pathname} = useLocation();
  // console.log(location)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />            
          </div>
        }
      >
      <Routes>          
          <Route path="/*" element={<Overview />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/folder-structure" element={<FolderStructure />} />
          <Route path="/create" element={<NewPage />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/routing" element={<Routing />} />
          <Route path="/multi-lang" element={<MultiLang />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/axios-integrate" element={<Axios />} />
          <Route path="/firebase-integrate" element={<Firebase />} />
          <Route path="/auth0-integrate" element={<Auth0 />} />
          <Route path="features/*" element={<Features />} />
          <Route path="/tables/*" element={<Tables />} />  
          <Route path="/credits" element={<Cridits />} />
          <Route path="charts/*" element={<Charts />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
