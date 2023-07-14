import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import browserStates from '../../../../demoData/table-data.json';

const { browserState } = browserStates;

const BrowserState = React.memo(() => {
  const [state, setState] = useState({
    browserTab: 'today',
  });

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      browserTab: value,
    });
  };

  /* State destructuring */
  const { browserTab } = state;

  const browserData = [];

  if (browserState !== null) {
    browserState[browserTab].map((value) => {
      const { key, name, img, session, bounceRate, cte, goalRate } = value;
      return browserData.push({
        key,
        browser: (
          <div className="flex items-center">
            <div className="ltr:mr-2.5 rtl:ml-2.5 w-8 h-8">
              <img className="w-8 h-8" src={require(`../../../../static/img/browser/${img}`)} alt="hexadash browser" />
            </div>
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
          </div>
        ),
        session: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{session}</span>,
        bounceRate: (
          <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{bounceRate}</span>
        ),
        cte: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{cte}</span>,
        goalRate: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{goalRate}</span>,
      });
    });
  }

  const browserColumns = [
    {
      title: 'Browsers',
      dataIndex: 'browser',
      key: 'browser',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: 'Session',
      dataIndex: 'session',
      key: 'session',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
    },
    {
      title: 'Bounce rate',
      dataIndex: 'bounceRate',
      key: 'bounceRate',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
    },
    {
      title: 'cte',
      dataIndex: 'cte',
      key: 'cte',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
    },
    {
      title: 'goal conv. rate',
      dataIndex: 'goalRate',
      key: 'goalRate',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
    },
  ];

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  browserTab === 'today'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => handleChangePeriod('today', e)}
                to="#"
              >
                Today
              </Link>
            </li>
            <li>
              <Link
                className={
                  browserTab === 'week'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleChangePeriod('week', e)}
                to="#"
              >
                Week
              </Link>
            </li>
            <li>
              <Link
                className={
                  browserTab === 'month'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleChangePeriod('month', e)}
                to="#"
              >
                Month
              </Link>
            </li>
          </ul>
        }
        title="Browser State"
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <TableDefaultStyle>
          <div>
            <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table columns={browserColumns} dataSource={browserData} pagination={false} />
            </div>
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default BrowserState;
