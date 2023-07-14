import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';

const OverviewDataList = lazy(() => import('./overview/demoEight/OverviewDataList'));
const MonthlyEarning = lazy(() => import('./overview/demoThree/MonthlyEarning'));
const ProfitGrowth = lazy(() => import('./overview/demoThree/ProfitGrowth'));
const SalesOverview = lazy(() => import('./overview/demoThree/SalesOverview'));
const TopProduct = lazy(() => import('./overview/demoThree/TopProduct'));
const RecentDeals = lazy(() => import('./overview/demoThree/RecentDeals'));
const ActiveUser = lazy(() => import('./overview/demoThree/ActiveUsers'));
const TotalEarning = lazy(() => import('./overview/demoThree/TotalEarning'));

function DemoEight() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 8',
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
          <Col xxl={16} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <MonthlyEarning />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProfitGrowth />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24} className="lg:mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TotalEarning />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ActiveUser />
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
              <SalesOverview />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24} className="lg:mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopProduct />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RecentDeals />
            </Suspense>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default DemoEight;
