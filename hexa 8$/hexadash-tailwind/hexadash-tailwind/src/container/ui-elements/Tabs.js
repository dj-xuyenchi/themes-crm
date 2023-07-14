import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Tab } from '../../components/tabs/tabs';
import tabData from '../../demoData/tab-data.json';

const { data, dataIcon, icon } = tabData;

function Tabs() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Tabs',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Tabs"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Tab data={data} />
          </Col>
          <Col md={12} xs={24}>
            <Tab data={data} color="default" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <div className="[&>div>div>div>div>*.ant-tabs-tab>div>span]:flex [&>div>div>div>div>*.ant-tabs-tab>div>span]:gap-[10px] [&>div>div>div>div>*.ant-tabs-tab>div>span]:items-center [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:w-[20px] [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:h-[20px]">
              <Tab data={dataIcon} type="primary" color="#FB3586" />
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className="[&>div>div>div>div>*.ant-tabs-tab>div>span]:flex [&>div>div>div>div>*.ant-tabs-tab>div>span]:gap-[10px] [&>div>div>div>div>*.ant-tabs-tab>div>span]:items-center [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:w-[20px] [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:h-[20px]">
              <Tab data={icon} type="primary" color="#FB3586" />
            </div>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <div className="[&>div>div>div>div>*.ant-tabs-tab>div>span]:flex [&>div>div>div>div>*.ant-tabs-tab>div>span]:gap-[10px] [&>div>div>div>div>*.ant-tabs-tab>div>span]:items-center [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:w-[20px] [&>div>div>div>div>*.ant-tabs-tab>div>span>svg]:h-[20px]">
              <Tab data={dataIcon} type="white" color="#ffffff" />
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Tabs;
