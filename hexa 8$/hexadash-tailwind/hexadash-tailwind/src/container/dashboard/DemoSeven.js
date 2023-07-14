import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';

const OverviewDataList = lazy(() => import('./overview/demoSeven/OverviewDataList'));
const SaleRevenue = lazy(() => import('./overview/demoTwo/SaleRevenue'));
const NewProduct = lazy(() => import('./overview/demoTwo/NewProduct'));
const RevenueGenerated = lazy(() => import('./overview/demoSeven/RevenueGenerated'));
const BestSeller = lazy(() => import('./overview/demoTwo/BestSeller'));

function DemoSeven() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 7',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Dashboard"
        routes={PageRoutes}
      />

      <main className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row justify="center">
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataList />
            </Suspense>
          </Col>
        </Row>

        <Row justify="center" gutter={25}>
          <Col xxl={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SaleRevenue />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RevenueGenerated />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24} className="3xl:mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <NewProduct />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <BestSeller />
            </Suspense>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default DemoSeven;
