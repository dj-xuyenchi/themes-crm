import React, { useState } from 'react';
import { Row, Col, Badge, Switch } from 'antd';
import { NavLink, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ClockCircleOutlined, BellOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
} from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { BtnGroup, Button } from '../../components/buttons/buttons';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

function Badges() {
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
  const [state, setState] = useState({
    count: 5,
    show: true,
  });

  const increase = () => {
    const count = state.count + 1;
    setState({ ...state, count });
  };

  const decline = () => {
    let count = state.count - 1;
    if (count < 0) {
      count = 0;
    }
    setState({ ...state, count });
  };

  const onChange = (show) => {
    setState({ ...state, show });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Avatar"
        routes={PageRoutes}
      />

      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} sm={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    With Badge
                  </h1>
                </div>
                <BadgeWraperStyle className="gap-y-[15px] gap-x-[20px] inline-flex flex-wrap p-[25px]">
                  <Badge count={5}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={0} showZero>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                </BadgeWraperStyle>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Overflow Count
                  </h1>
                </div>
                <BadgeWraperStyle>
                  <BadgeOverflowStyle className="gap-y-[15px] gap-x-[30px] inline-flex flex-wrap p-[25px]">
                    <Badge count={99}>
                      <NavLink to="#" className="head-example" />
                    </Badge>
                    <Badge count={100}>
                      <NavLink to="#" className="head-example" />
                    </Badge>
                    <Badge count={99} overflowCount={10}>
                      <NavLink to="#" className="head-example" />
                    </Badge>
                    <Badge count={1000} overflowCount={999}>
                      <NavLink to="#" className="head-example" />
                    </Badge>
                  </BadgeOverflowStyle>
                </BadgeWraperStyle>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Clickable
                  </h1>
                </div>
                <div className="p-[25px]">
                  <BadgeWraperStyle>
                    <Link to="#">
                      <Badge count={5}>
                        <span className="head-example" />
                      </Badge>
                    </Link>
                  </BadgeWraperStyle>
                </div>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Status
                  </h1>
                </div>
                <BadgeWraperStyle className="p-[25px]">
                  <div style={{ marginBottom: 10 }}>
                    {colors.map((color) => (
                      <Badge key={color} color={color} />
                    ))}
                  </div>
                  <div>
                    {colors.map((color) => (
                      <div key={color}>
                        <Badge color={color} text={color} />
                      </div>
                    ))}
                  </div>
                </BadgeWraperStyle>
              </div>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Standalone
                  </h1>
                </div>
                <div className="p-[25px]">
                  <BadgeWraperStyle>
                    <BadgeStandAloneStyle>
                      <Badge count={25} />
                      <Badge
                        count={4}
                        style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                      />
                      <Badge count={109} style={{ backgroundColor: '#01B81A' }} />
                    </BadgeStandAloneStyle>
                  </BadgeWraperStyle>
                </div>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Red badge
                  </h1>
                </div>
                <div className="p-[25px]">
                  <BadgeWraperStyle>
                    <BadgeRedStyle>
                      <Badge dot>
                        <BellOutlined />
                      </Badge>
                      <Badge count={0} dot>
                        <BellOutlined />
                      </Badge>
                      <Badge dot>
                        <Link to="#">Link something</Link>
                      </Badge>
                    </BadgeRedStyle>
                  </BadgeWraperStyle>
                </div>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Dynamic
                  </h1>
                </div>
                <BadgeWraperStyle>
                  <BadgeDynamicStyle className="gap-y-[15px] gap-x-[30px] inline-flex flex-wrap p-[25px]">
                    <div className="w-full badge-dynamic" style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Badge count={state.count}>
                        <Link to="#" className="head-example" />
                      </Badge>
                      <BtnGroup class="border-regular dark:border-white10">
                        <Button onClick={decline}>
                          <MinusOutlined />
                        </Button>
                        <Button onClick={increase}>
                          <PlusOutlined />
                        </Button>
                      </BtnGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10' }}>
                      <Badge dot={state.show}>
                        <Link to="#" className="head-example" />
                      </Badge>
                      <Switch onChange={onChange} checked={state.show} />
                    </div>
                  </BadgeDynamicStyle>
                </BadgeWraperStyle>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Badges;
