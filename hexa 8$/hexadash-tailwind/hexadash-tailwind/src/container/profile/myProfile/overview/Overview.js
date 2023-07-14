import React from 'react';
import { Row, Col, Table } from 'antd';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilArrowDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import { NavLink } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';

const moreContent = (
  <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Printer</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>PDF</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>CSV</span>
    </NavLink>
  </div>
);

function Overview() {
  const dataSource = [
    {
      key: '1',
      name: 'Samsung Galaxy S8 256GB',
      price: '$280',
      sold: 126,
      revenue: '$38,536',
      className: 'text-[14px] text-theme-gray dark:text-white60 font-medium',
    },
    {
      key: '2',
      name: 'Half Sleeve Shirt',
      price: '$25',
      sold: 80,
      revenue: '$38,536',
      className: 'text-[14px] text-theme-gray dark:text-white60 font-medium',
    },
    {
      key: '3',
      name: 'Marco Shoes',
      price: '$32',
      sold: 58,
      revenue: '$38,536',
      className: 'text-[14px] text-theme-gray dark:text-white60 font-medium',
    },
    {
      key: '4',
      name: '15" Mackbook Pro        ',
      price: '$950',
      sold: 36,
      revenue: '$38,536',
      className: 'text-[14px] text-theme-gray dark:text-white60 font-medium',
    },
    {
      key: '5',
      name: 'Apple iPhone X',
      price: '$985',
      sold: 24,
      revenue: '$38,536',
      className: 'text-[14px] text-theme-gray dark:text-white60 font-medium',
    },
  ];

  const columns = [
    {
      title: 'Products Name',
      dataIndex: 'name',
      key: 'name',
      className:
        'text-[14px] font-normal text-theme-gray dark:text-white60 dark:border-white10 before:hidden px-[25px] [th&]:text-dark [th&]:font-medium [th&]:text-[15px]',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      className:
        'text-[14px] font-normal text-theme-gray dark:text-white60 dark:border-white10 before:hidden px-[25px] [th&]:text-dark [th&]:font-medium [th&]:text-[15px]',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
      className:
        'text-[14px] font-normal text-theme-gray dark:text-white60 dark:border-white10 before:hidden px-[25px] [th&]:text-dark [th&]:font-medium [th&]:text-[15px]',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      className:
        'text-[14px] font-normal text-theme-gray dark:text-white60 dark:border-white10 before:hidden px-[25px] [th&]:text-dark [th&]:font-medium [th&]:text-[15px]',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <div className="flex flex-wrap ltr:items-end rtl:items-start bg-white dark:bg-white10 rounded-10 p-[25px] mb-[25px]">
          <div className="w-[50%] flex-[50%]">
            <h4 className="text-3xl lg:text-[26px] sm:text-2xl font-semibold text-dark dark:text-white87 mb-[5px]">
              7,461
            </h4>
            <span className="font-normal text-body dark:text-white60 text-15">Orders</span>
            <div className="mt-3">
              <div className="inline-flex items-center flex-wrap gap-[6px]">
                <span className="flex items-center text-sm font-medium text-success">
                  <UilArrowUp className="w-5 h-5" /> 25%
                </span>
                <span className=" text-theme-gray dark:text-white60 text-[14px]">Since last week</span>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex-[50%]">
            <div className="hexadash-chart-container">
              <DashboardChart
                type="bar"
                height={180}
                id="bar1"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                datasets={[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#8e1dce30',
                    hoverBackgroundColor: '#8e1dce',
                    label: 'Orders',
                    barPercentage: 1,
                  },
                ]}
                scales={{
                  y: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  x: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                }}
                // options={chartOptions}
              />
            </div>
          </div>
        </div>
      </Col>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <div className="flex flex-wrap ltr:items-end rtl:items-start bg-white dark:bg-white10 rounded-10 p-[25px] mb-[25px]">
          <div className="w-[50%] flex-[50%]">
            <h4 className="text-3xl lg:text-[26px] sm:text-2xl font-semibold text-dark dark:text-white87 mb-[5px]">
              $28,947
            </h4>
            <span className="font-normal text-body dark:text-white60 text-15">Revenue</span>
            <div className="mt-3">
              <div className="inline-flex items-center flex-wrap gap-[6px]">
                <span className="flex items-center text-sm font-medium text-danger">
                  <UilArrowDown className="w-5 h-5" /> 25%
                </span>
                <span className=" text-theme-gray dark:text-white60 text-[14px]">Since last week</span>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex-[50%]">
            <div className="hexadash-chart-container">
              <DashboardChart
                height={180}
                type="bar"
                id="bar2"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                datasets={[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#FF69A520',
                    hoverBackgroundColor: '#FF69A5',
                    label: 'Revenue',
                    barPercentage: 1,
                  },
                ]}
                legends={{
                  display: false,
                }}
                scales={{
                  y: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  x: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Col>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <div className="flex flex-wrap ltr:items-end rtl:items-start bg-white dark:bg-white10 rounded-10 p-[25px] mb-[25px]">
          <div className="w-[50%] flex-[50%]">
            <h4 className="text-3xl lg:text-[26px] sm:text-2xl font-semibold text-dark dark:text-white87 mb-[5px]">
              $3,241
            </h4>
            <span className="font-normal text-body dark:text-white60 text-15">Avg. order value</span>
            <div className="mt-3">
              <div className="inline-flex items-center flex-wrap gap-[6px]">
                <span className="flex items-center text-sm font-medium text-success">
                  <UilArrowUp className="w-5 h-5" /> 25%
                </span>
                <span className=" text-theme-gray dark:text-white60 text-[14px]">Since last week</span>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex-[50%]">
            <div className="hexadash-chart-container">
              <DashboardChart
                height={180}
                type="bar"
                id="bar3"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                datasets={[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#20C99720',
                    hoverBackgroundColor: '#20C997',
                    label: 'Avg Orders',
                    barPercentage: 1,
                  },
                ]}
                legends={{
                  display: false,
                }}
                scales={{
                  y: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  x: {
                    display: false,
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Col>

      <Col xs={24}>
        <GlobalUtilityStyle>
          <Cards
            className="ant-card-body-px-0 [&>.ant-card-body]:pb-30px [&>.ant-card-body]:pt-[1px] ant-card-head-px-25 ant-card-head-title-base [&>.ant-card-head]:border-regular dark:[&>.ant-card-head]:border-white10 [&>.ant-card-head]:border-b-1 "
            more={moreContent}
            title="My Products"
            size="default"
          >
            <Table
              className="table-responsive [&>div>div>div>div>div>table>thead>tr>th]:!bg-transparent [&>div>div>div>div>div>table>tbody>tr]last-child:mb-0 "
              pagination={false}
              dataSource={dataSource}
              columns={columns}
            />
          </Cards>
        </GlobalUtilityStyle>
      </Col>
    </Row>
  );
}

export default Overview;
