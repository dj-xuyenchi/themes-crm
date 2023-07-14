import React, { lazy } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import TotalLineChart from '../dashboard/overview/index/TotalLineChart';
import SalesOverview from '../dashboard/overview/index/SalesOverview';
import SaleRevenue from '../dashboard/overview/demoTwo/SaleRevenue';
import MonthlyEarning from '../dashboard/overview/demoThree/MonthlyEarning';

const SalesGrowth = lazy(() => import('../dashboard/overview/index/SalesGrowth'));

function Widgets() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Widgets Charts',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Widgets Charts"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xs={24}>
            <TotalLineChart />
          </Col>
          <Col xxl={9} xs={24} className="mb-[25px]">
            <SalesOverview />
          </Col>
          <Col xxl={15} xs={24} className="mb-[25px]">
            <SaleRevenue />
          </Col>
          <Col xxl={15} xs={24}>
            <MonthlyEarning />
          </Col>
          <Col xxl={9} xs={24}>
            <SalesGrowth />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Widgets;
