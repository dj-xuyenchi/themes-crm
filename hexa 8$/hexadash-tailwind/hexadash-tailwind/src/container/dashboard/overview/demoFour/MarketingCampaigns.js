import { Table, Progress } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../../styled';

const campaignData = {
  today: [
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 90,
      icon: 'static/img/icon/microsoft.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 80,
      icon: 'static/img/icon/wordpress.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 60,
      icon: 'static/img/icon/Slack.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 60,
      icon: 'static/img/icon/adobe.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ],
  week: [
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 90,
      icon: 'static/img/icon/wordpress.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 80,
      icon: 'static/img/icon/microsoft.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 60,
      icon: 'static/img/icon/Slack.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 60,
      icon: 'static/img/icon/adobe.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ],
  month: [
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 80,
      icon: 'static/img/icon/Slack.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 70,
      icon: 'static/img/icon/adobe.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 60,
      icon: 'static/img/icon/wordpress.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 80,
      icon: 'static/img/icon/microsoft.svg',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
      className:
        'ltr:pr-0 rtl:pl-0 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ],
};

function MarketingCampaigns() {
  const [marketingCampaigns, setMarketingCampaigns] = useState('today');

  const handleChangeLocation = (value, e) => {
    e.preventDefault();
    setMarketingCampaigns(value);
  };

  const dataSource = [];

  campaignData[marketingCampaigns].map((value) => {
    const { title, amount, percent, icon, id } = value;
    return dataSource.push({
      key: id,
      name: (
        <div className="flex items-center w-full gap-2.5">
          <img className="w-[25px] h-[25px] rounded-4" src={require(`../../../../${icon}`)} alt="" />
          <span className="font-medium capitalize text-dark dark:text-white87 text-15">{title}</span>
        </div>
      ),
      amount: <span className="text-dark dark:text-white87 text-[14px] font-normal">{amount}</span>,
      percent: <span className="text-dark dark:text-white87 text-[14px] font-normal">{percent}</span>,
      progress: <Progress strokeWidth={10} type="circle" showInfo={false} width={25} percent={percent} />,
    });
  });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-[9px] last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'amount',
      key: 'amount',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-[9px] last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'percent',
      key: 'percent',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-[9px] last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'progress',
      key: 'progress',
      className:
        'ltr:pr-0 rtl:pl-0 text-light dark:text-white60 text-[12px] py-[9px] last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ];

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
        <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Marketing Campaigns
        </h1>
        <ul className="flex items-center mb-0">
          <li>
            <Link
              className={
                marketingCampaigns === 'today'
                  ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                  : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
              }
              onClick={(e) => handleChangeLocation('today', e)}
              to="#"
            >
              Today
            </Link>
          </li>
          <li>
            <Link
              className={
                marketingCampaigns === 'week'
                  ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                  : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
              }
              onClick={(e) => handleChangeLocation('week', e)}
              to="#"
            >
              Week
            </Link>
          </li>
          <li>
            <Link
              className={
                marketingCampaigns === 'month'
                  ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                  : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
              }
              onClick={(e) => handleChangeLocation('month', e)}
              to="#"
            >
              Month
            </Link>
          </li>
        </ul>
      </div>
      <GlobalUtilityStyle>
        <div className="px-[25px] pb-[25px]">
          <div className="table-responsive table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </div>
        </div>
      </GlobalUtilityStyle>
    </div>
  );
}

export default MarketingCampaigns;
