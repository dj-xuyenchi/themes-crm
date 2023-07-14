import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';

const { SubMenu } = Menu;
function Menus() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Menu',
    },
  ];
  const [state, setState] = useState({
    current: 'mail',
  });

  const handleClick = (e) => {
    setState({
      current: e.key,
    });
  };

  const onVerticleHandleClick = () => {
    // console.log('click ', e);
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Menu"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={24} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Top Navigation
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Menu
                    className="dark:bg-transparent dark:border-white10"
                    onClick={handleClick}
                    selectedKeys={[state.current]}
                    mode="horizontal"
                  >
                    <Menu.Item className="inline-flex items-center" key="mail" icon={<MailOutlined />}>
                      Navigation One
                    </Menu.Item>
                    <Menu.Item
                      className="inline-flex items-center"
                      key="app"
                      disabled
                      icon={<AppstoreOutlined className="dark:[&+.ant-menu-title-content]:text-white87" />}
                    >
                      Navigation Two
                    </Menu.Item>
                    <SubMenu
                      className="inside-flex-align-center"
                      icon={
                        <SettingOutlined className="dark:[&+.ant-menu-title-content]:text-white87 dark:hover:[&+.ant-menu-title-content]:text-white87" />
                      }
                      title="Navigation Three - Submenu"
                    >
                      <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item className="inline-flex items-center" key="alipay">
                      <Link className="dark:text-white87" to="#" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                      </Link>
                    </Menu.Item>
                  </Menu>
                </div>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Vertical Menu
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Menu
                    className=" dark:bg-transparent dark:border-white10"
                    onClick={onVerticleHandleClick}
                    style={{ width: 256 }}
                    mode="vertical"
                  >
                    <SubMenu
                      className="inside-flex-align-center"
                      key="sub1"
                      icon={<MailOutlined className="dark:[&+.ant-menu-title-content]:text-white87" />}
                      title="Navigation One"
                    >
                      <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                      className="inside-flex-align-center"
                      key="sub2"
                      title={
                        <span>
                          <AppstoreOutlined />
                          <span className="dark:text-white87">Navigation Two</span>
                        </span>
                      }
                    >
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                    <SubMenu
                      className="inside-flex-align-center"
                      key="sub4"
                      icon={<SettingOutlined className="dark:[&+.ant-menu-title-content]:text-white87" />}
                      title="Navigation Three"
                    >
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <Menu.Item key="11">Option 11</Menu.Item>
                      <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </div>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Current Submenu
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Menu
                    className=" dark:bg-transparent dark:border-white10"
                    onClick={onVerticleHandleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                  >
                    <SubMenu
                      className="inside-flex-align-center"
                      key="sub1"
                      title={
                        <span>
                          <MailOutlined />
                          <span>Navigation One</span>
                        </span>
                      }
                    >
                      <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      className="inside-flex-align-center"
                      title={
                        <span>
                          <AppstoreOutlined />
                          <span>Navigation Two</span>
                        </span>
                      }
                    >
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                    <SubMenu
                      key="sub4"
                      className="inside-flex-align-center"
                      title={
                        <span>
                          <SettingOutlined />
                          <span>Navigation Three</span>
                        </span>
                      }
                    >
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <Menu.Item key="11">Option 11</Menu.Item>
                      <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </div>
              </div>
            </Col>
          </Row>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default Menus;
