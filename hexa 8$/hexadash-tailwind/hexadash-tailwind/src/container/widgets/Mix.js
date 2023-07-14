import React, { lazy } from 'react';
import { Row, Col } from 'antd';
import { MixedCardWrap } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

import Ordersummary from '../ecommerce/overview/Ordersummary';

const SalesByLocation = lazy(() => import('../dashboard/overview/index/SalesByLocation'));

function WidgetsCard() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Widgets Mixed',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Widgets Mixed"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <MixedCardWrap>
          <Row gutter={25}>
            <Col xxl={8} xl={10} xs={24}>
              <div className="bg-white dark:bg-white10 xl:mb-[25px] p-[25px] rounded-[4px]">
                <Ordersummary subtotal={1200} />
              </div>
            </Col>
            <Col xxl={16} xl={14} xs={24}>
              <SalesByLocation />
            </Col>
          </Row>
        </MixedCardWrap>
      </main>
    </>
  );
}

export default WidgetsCard;
