import React from 'react';
import { Row, Col, Breadcrumb, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { BreadcrumbWrapperStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
// import withRouter from '../../HOC/withRouter';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

function Breadcrumbs() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Avatar',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Breadcrumb"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <BreadcrumbWrapperStyle>
                  <Breadcrumb className="p-[25px]">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application Center</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbWrapperStyle>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Bread crumbs with drop down menu
                  </h1>
                </div>
                <BreadcrumbWrapperStyle>
                  <Breadcrumb className="p-[25px]">
                    <Breadcrumb.Item>
                      <NavLink to="#">Design</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Component</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="inline-flex items-center" menu={menu}>
                      <NavLink to="#">
                        <span>General</span>
                      </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Button</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbWrapperStyle>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    With Icon
                  </h1>
                </div>
                <BreadcrumbWrapperStyle>
                  <Breadcrumb className="p-[25px]">
                    <Breadcrumb.Item>
                      <HomeOutlined className="inline-flex items-center text-light dark:text-white60" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application Center</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">
                        <span>Application List</span>
                      </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbWrapperStyle>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Configuring the Separator
                  </h1>
                </div>
                <BreadcrumbWrapperStyle>
                  <Breadcrumb className="p-[25px]" separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application Center</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbWrapperStyle>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Configuring the Separator
                  </h1>
                </div>
                <BreadcrumbWrapperStyle>
                  <Breadcrumb className="p-[25px]" separator="">
                    <Breadcrumb.Item>Location</Breadcrumb.Item>
                    <Breadcrumb.Separator>:</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                      <NavLink to="#">Application Center</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                      <NavLink to="#">Application List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>
                </BreadcrumbWrapperStyle>
              </div>
            </Col>
          </Row>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default Breadcrumbs;
