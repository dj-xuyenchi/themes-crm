import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle } from '../styled';

const OverviewDataList = lazy(() => import('./overview/index/OverviewDataList'));
const SalesReport = lazy(() => import('./overview/index/SalesReport'));
const SalesGrowth = lazy(() => import('./overview/index/SalesGrowth'));
const SalesByLocation = lazy(() => import('./overview/index/SalesByLocation'));
const TopSellingProduct = lazy(() => import('./overview/index/TopSellingProducts'));
const BrowserState = lazy(() => import('./overview/index/BrowserState'));

function Dashboard() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 1',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Dashboard"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col xxl={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless className="mb-[25px]">
                    <Skeleton active />
                  </Cards>
                }
              >
                <OverviewDataList />
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
                <SalesReport />
              </Suspense>
            </Col>
            <Col xxl={8} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <SalesGrowth />
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
                <SalesByLocation />
              </Suspense>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col xl={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <TopSellingProduct />
              </Suspense>
            </Col>
            <Col xl={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <BrowserState />
              </Suspense>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Dashboard;
