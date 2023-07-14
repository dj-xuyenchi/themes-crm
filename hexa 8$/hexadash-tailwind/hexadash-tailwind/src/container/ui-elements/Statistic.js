import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { LikeOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Button } from '../../components/buttons/buttons';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const { Countdown } = Statistic;

function Statistics() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Statistics',
    },
  ];
  const onFinish = () => {
    // console.log('finished!');
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Statistics"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <Row gutter={16} className="p-[25px]">
                <Col span={12}>
                  <Statistic className="[&>.ant-statistic-content]:text-[20px]" title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic
                    className="[&>.ant-statistic-content]:text-[20px]"
                    title="Account Balance (CNY)"
                    value={112893}
                    precision={2}
                  />
                  <Button
                    className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] mt-[15px]"
                    size="large"
                    type="primary"
                    raised
                  >
                    Recharge
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  In Card
                </h1>
              </div>
              <Row gutter={15} className="p-[25px]">
                <Col md={12}>
                  <Statistic
                    className="[&>.ant-statistic-content]:text-[20px] [&>.ant-statistic-content]:flex [&>.ant-statistic-content]:items-center [&>.ant-statistic-content>span]:flex [&>.ant-statistic-content>span]:items-center"
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#01B81A' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Col>
                <Col md={12}>
                  <Statistic
                    className="[&>.ant-statistic-content]:text-[20px] [&>.ant-statistic-content]:flex [&>.ant-statistic-content]:items-center [&>.ant-statistic-content>span]:flex [&>.ant-statistic-content>span]:items-center"
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#FF0F0F' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Unit
                </h1>
              </div>
              <Row gutter={16} className="p-[25px]">
                <Col span={12}>
                  <Statistic
                    className="[&>.ant-statistic-content]:text-[20px] [&>.ant-statistic-content]:flex [&>.ant-statistic-content]:items-center [&>.ant-statistic-content>span]:flex [&>.ant-statistic-content>span]:items-center"
                    title="Feedback"
                    value={1128}
                    prefix={<LikeOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    className="[&>.ant-statistic-content]:text-[20px] [&>.ant-statistic-content]:flex [&>.ant-statistic-content]:items-center [&>.ant-statistic-content>span]:flex [&>.ant-statistic-content>span]:items-center"
                    title="Unmerged"
                    value={93}
                    suffix="/ 100"
                  />
                </Col>
              </Row>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Count-down
                </h1>
              </div>
              <Row gutter={15} className="p-[25px]">
                <Col md={12}>
                  <Countdown
                    className=" [&>.ant-statistic-content]:text-[20px]"
                    title="Countdown"
                    value={deadline}
                    onFinish={onFinish}
                  />
                </Col>
                <Col md={12}>
                  <Countdown
                    className=" [&>.ant-statistic-content]:text-[20px]"
                    title="Million Seconds"
                    value={deadline}
                    format="HH:mm:ss:SSS"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Statistics;
