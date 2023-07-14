import { Progress, Table } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { revenueGenerated } = tableData;

const locationColumns = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: 'Page View',
    dataIndex: 'pageView',
    key: 'pageView',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
];

const RevenueGenerated = React.memo(() => {
  const [state, setState] = useState({
    revenueTab: 'today',
  });

  /* State destructuring */
  const { revenueTab } = state;

  const revenueData = [];

  if (revenueGenerated !== null) {
    revenueGenerated[revenueTab].map((value) => {
      const { key, name, icon, visitors, pageView, revenue, trend, type } = value;
      return revenueData.push({
        key,
        source: (
          <div className="flex items-center">
            <div
              className={`bg-${icon}-transparent text-${icon} flex items-center justify-center w-8 h-8 text-[15px] ltr:mr-2.5 rtl:ml-2.5 rounded-[8px]`}
            >
              <i className={`fa fa-${icon}`} />
            </div>
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
          </div>
        ),
        visitors: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{visitors}</span>,
        pageView: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{pageView}</span>,
        revenue: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{revenue}</span>,
        trend: (
          <div className={`flex items-center gap-[14px] text-${icon}`}>
            <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{trend}%</span>
            {type === 'secondary' ? (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-secondary"
              />
            ) : type === 'success' ? (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-success"
              />
            ) : type === 'info' ? (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-info"
              />
            ) : type === 'warning' ? (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-warning"
              />
            ) : type === 'violet' ? (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-violet"
              />
            ) : (
              <Progress
                percent={trend}
                strokeWidth={4}
                status="active"
                showInfo={false}
                className="min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-primary"
              />
            )}
          </div>
        ),
      });
    });
  }

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      revenueTab: value,
    });
  };

  return (
    <div className="full-width-table h-full bg-white dark:bg-whiteDark rounded-[10px]">
      <GlobalUtilityStyle>
        <Cards
          isbutton={
            <ul className="flex items-center mb-0">
              <li>
                <Link
                  className={
                    revenueTab === 'today'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                  }
                  onClick={(e) => handleTabActivation('today', e)}
                  to="#"
                >
                  Today
                </Link>
              </li>
              <li>
                <Link
                  className={
                    revenueTab === 'week'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                  }
                  onClick={(e) => handleTabActivation('week', e)}
                  to="#"
                >
                  Week
                </Link>
              </li>
              <li>
                <Link
                  className={
                    revenueTab === 'month'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                  }
                  onClick={(e) => handleTabActivation('month', e)}
                  to="#"
                >
                  Month
                </Link>
              </li>
            </ul>
          }
          title="Source Of Revenue Generated"
          size="large"
          className="border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
        >
          <TableDefaultStyle>
            <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table columns={locationColumns} dataSource={revenueData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </GlobalUtilityStyle>
    </div>
  );
});

export default RevenueGenerated;
