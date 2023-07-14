import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const NewPage = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'New Page',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="New Page" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>How to create new page</h2>
                    <p>Here is the example on how to create your custom page and add it to the leftsidebar menu, breadcrumbs.</p>
                    <p className="mb-0">1. Create page component <code>src/containers/pages/MyPage.js</code></p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
import React from 'react';
import { Main } from '../styled';

const MyPage = () => {
    return (
    <Main>
        {/* Write Your JSX HERE */}
    </Main>
    );
};

export default MyPage;
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">2. Update the routes <code>src/routes/admin/pages.js</code></p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

+ const MyPage = lazy(() => import('../../container/pages/MyPage'));

const PagesRoute = () => {

    return (
    <Routes>
        <Route path="new-page" element={<MyPage />} />
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mt-35 mb-0">3. Then update the menu item <code>src/layout/MenuItems.js</code></p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
const items = [
    getItem(
        <NavLink onClick={toggleCollapsed} to={'/admin/new-page'}>
            New Page
        </NavLink>, 
        'page-key', 
        null
    )
];
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

export default NewPage;
