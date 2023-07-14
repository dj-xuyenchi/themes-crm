import React from 'react';
import { Row, Col, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { SwitchStyleWrap } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';

function Switches() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Switch',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Switch"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <div className="p-[25px]">
                <Switch defaultChecked />
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Size
                </h1>
              </div>
              <SwitchStyleWrap className="p-[25px]">
                <Switch defaultChecked />
                <Switch defaultChecked size="small" />
              </SwitchStyleWrap>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Text With Icon
                </h1>
              </div>
              <div className="p-[25px]">
                <Switch checkedChildren="a" unCheckedChildren="b" defaultChecked />
                <br />
                <Switch checkedChildren="1" unCheckedChildren="0" />
                <br />
                <SwitchStyleWrap className="[&>button>.ant-switch-inner]:flex">
                  <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                  <Switch defaultChecked />
                </SwitchStyleWrap>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  loading
                </h1>
              </div>
              <div className="p-[25px]">
                <Switch loading defaultChecked />
                <br />
                <Switch size="small" loading />
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Switches;
