import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Routing = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Routing',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Routing" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Routing</h2>
                    <p>HexaDash use react-router as base routing system. To add a new route in the template, you can follow the steps below.</p>
                    <h2>Create new route</h2>
                    <p>We place all our pre and post login page components in src/routes/ folder. auth.js file is for authentication and admin folder contains all admin paenl routes.
index.js in this folder is the entry point of all pages, you can basically set your pages in this file.</p>
                    <div className="docs-highlighter">
                        <p className="mb-0">Refer below mentioned code to create a route:</p>
                        <pre>
                            <code className="language-javascript">
{
`
import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';
import Axios from './axios';
import Dashboard from './dashboard';
import Pages from './pages';

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
          <Route path="/*" element={<Dashboard />} />
          <Route path="pages/*" element={<Pages />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Routing;
