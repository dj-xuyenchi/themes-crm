import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { WizardBlock } from './Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';

const WizardsOne = lazy(() => import('./overview/WizardsOne'));
const WizardsTwo = lazy(() => import('./overview/WizardsTwo'));
const WizardsThree = lazy(() => import('./overview/WizardsThree'));
const WizardsFour = lazy(() => import('./overview/WizardsFour'));
const WizardsFive = lazy(() => import('./overview/WizardsFive'));
const WizardsSix = lazy(() => import('./overview/WizardsSix'));

function Wizards() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Wizards',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Wizards"
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 20 }} active />
                </Cards>
              }
            >
              <WizardBlock>
                <Cards headless>
                  <Row justify="center">
                    <Col xxl={20} xs={24}>
                      <Routes>
                        <Route path="one" element={<WizardsOne />} />
                        <Route path="two" element={<WizardsTwo />} />
                        <Route path="three" element={<WizardsThree />} />
                        <Route path="four" element={<WizardsFour />} />
                        <Route path="five" element={<WizardsFive />} />
                        <Route path="six" element={<WizardsSix />} />
                      </Routes>
                    </Col>
                  </Row>
                </Cards>
              </WizardBlock>
            </Suspense>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Wizards;
