/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Row, Col, message, Tooltip } from 'antd';
import { EllipsisOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { DropdownStyle, DropdownIconStyleWrapper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/buttons/buttons';

function Dropdowns() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Dropdown',
    },
  ];
  function handleButtonClick() {
    message.info('Click on left button.');
  }

  return (
    <DropdownStyle>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Dropdown"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic Dropdown
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Dropdown placement="bottomLeft">
                    <Link to="#">Hover me</Link>
                  </Dropdown>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Event Menu
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Dropdown action={['hover']} placement="bottomLeft">
                    <Link to="#">hover me </Link>
                  </Dropdown>
                  <Dropdown action={['click']} placement="bottom">
                    <Link to="#">click </Link>
                  </Dropdown>
                  <Dropdown action={['contextMenu']} placement="bottomRight">
                    <Link to="#">context</Link>
                  </Dropdown>
                </div>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Placement
                  </h1>
                </div>
                <div className="p-[25px] gap-x-[10px] gap-y-[10px] flex flex-wrap">
                  <Dropdown placement="bottomLeft">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Bottom Left
                    </Button>
                  </Dropdown>
                  <Dropdown placement="bottom">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Bottom Center
                    </Button>
                  </Dropdown>
                  <Dropdown placement="bottomRight">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Bottom Right
                    </Button>
                  </Dropdown>
                  <Dropdown placement="topLeft">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Top Left
                    </Button>
                  </Dropdown>
                  <Dropdown placement="top">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Top Center
                    </Button>
                  </Dropdown>
                  <Dropdown placement="topRight">
                    <Button
                      className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:bg-transparent dark:text-white60 dark:hover:text-white60 btn-outlined h-[36px] border-deep dark:border-white10  px-[19px] rounded-[5px]"
                      size="small"
                      outlined
                      type="light"
                    >
                      Top Right
                    </Button>
                  </Dropdown>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87  font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Button with dropdown menu
                  </h1>
                </div>
                <DropdownIconStyleWrapper className="flex flex-wrap p-[25px] gap-x-[10px] gap-y-[10px]">
                  <Button
                    onClick={handleButtonClick}
                    className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:text-white60 btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    size="default"
                    outlined
                    type="light"
                  >
                    Bottom Left Click
                    <Dropdown placement="bottomLeft" action={['hover']}>
                      <EllipsisOutlined className="group-hover:text-primary" />
                    </Dropdown>
                  </Button>

                  <Button
                    className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:text-white60 btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    outlined
                    type="light"
                  >
                    Bottom Right hover
                    <Dropdown placement="bottomRight" title="with title">
                      <UserOutlined className="group-hover:text-primary" />
                    </Dropdown>
                  </Button>
                  <Button
                    className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:text-white60 btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    outlined
                    type="light"
                  >
                    Top Left hover
                    <Dropdown placement="topLeft">
                      <EllipsisOutlined className="group-hover:text-primary" />
                    </Dropdown>
                  </Button>
                  <Button
                    className="text-[14px] text-theme-gray hover:text-primary dark:hover:text-primary dark:text-white60 btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    outlined
                    type="light"
                  >
                    Top Right hover
                    <Dropdown placement="topRight">
                      <EllipsisOutlined className="group-hover:text-primary" />
                    </Dropdown>
                  </Button>
                  <Button
                    className="text-[14px] text-danger dark:text-danger dark:hover:text-dark btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    outlined
                    type="error"
                  >
                    <Tooltip title="tooltip" key="leftButton">
                      Tooltip
                    </Tooltip>
                    <Dropdown placement="bottomLeft" size="small">
                      <EllipsisOutlined />
                    </Dropdown>
                  </Button>
                  <Button
                    className="text-[14px] text-warning dark:text-warning dark:hover:text-dark btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent transition duration-300"
                    outlined
                    type="warning"
                  >
                    Warning
                    <Dropdown placement="bottomLeft" size="small">
                      <EllipsisOutlined />
                    </Dropdown>
                  </Button>
                  <Button
                    className="text-[14px] text-info dark:hover:text-dark btn-outlined inline-flex items-center border-deep dark:border-white10 h-[36px] group [&>span>svg]:text-current dark:bg-transparent  transition duration-300"
                    outlined
                    type="light"
                  >
                    Info
                    <Dropdown placement="bottomLeft" size="small">
                      <DownOutlined />
                    </Dropdown>
                  </Button>
                </DropdownIconStyleWrapper>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </DropdownStyle>
  );
}

export default Dropdowns;
