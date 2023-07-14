import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { DropdownStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Button } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';

function Popovers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Popovers',
    },
  ];
  return (
    <DropdownStyle>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Popovers"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic Popover
                </h1>
              </div>
              <div className="p-[25px]">
                <Popover placement="bottomLeft">
                  <NavLink to="#">Hover me </NavLink>
                </Popover>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Event Menu
                </h1>
              </div>
              <div className="p-[25px] inline-flex flex-wrap gap-[10px]">
                <Popover action="hover" placement="bottomLeft">
                  <Button type="primary">Hover</Button>
                </Popover>
                <Popover action="click" placement="bottom">
                  <Button type="primary">Click</Button>
                </Popover>
                <Popover action="contextMenu" placement="bottomRight">
                  <Button type="primary">Context</Button>
                </Popover>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Placement
                </h1>
              </div>
              <div className="p-[25px] inline-flex flex-wrap gap-[10px]">
                <Popover placement="bottomLeft">
                  <Button type="primary">BottomLeft</Button>
                </Popover>
                <Popover placement="bottom">
                  <Button type="primary">Bottom</Button>
                </Popover>
                <Popover placement="bottomRight">
                  <Button type="primary">BottomRight</Button>
                </Popover>
                <br />
                <Popover placement="topLeft">
                  <Button type="primary">TopLeft</Button>
                </Popover>
                <Popover placement="top">
                  <Button type="primary">TopCenter</Button>
                </Popover>
                <Popover placement="topRight">
                  <Button type="primary">TopRight</Button>
                </Popover>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </DropdownStyle>
  );
}

export default Popovers;
