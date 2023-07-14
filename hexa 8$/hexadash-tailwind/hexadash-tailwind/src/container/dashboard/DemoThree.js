import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle } from '../styled';

const OverviewDataList = lazy(() => import('./overview/demoThree/OverviewDataList'));
const MonthlyEarning = lazy(() => import('./overview/demoThree/MonthlyEarning'));
const ProfitGrowth = lazy(() => import('./overview/demoThree/ProfitGrowth'));
const SalesOverview = lazy(() => import('./overview/demoThree/SalesOverview'));
const TopProduct = lazy(() => import('./overview/demoThree/TopProduct'));
const RecentDeals = lazy(() => import('./overview/demoThree/RecentDeals'));
const ActiveUser = lazy(() => import('./overview/demoThree/ActiveUsers'));

function DemoThree() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 3',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Dashboard"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />

      <>
        <GlobalUtilityStyle>
          <main className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
            <Row justify="center" gutter={25} className="mb-[25px]">
              <Col xxl={16} xs={24} className="3xl:mb-[25px]">
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
              <Col xxl={8} xs={24}>
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
            </Row>
            <Row justify="center" className="mb-[25px]">
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
              <Col xs={24} className="mt-[25px]">
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
            </Row>
          </main>
        </GlobalUtilityStyle>
      </>
    </>
  );
}

export default DemoThree;
