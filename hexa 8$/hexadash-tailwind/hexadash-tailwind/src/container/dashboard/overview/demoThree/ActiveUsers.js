import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { activeUserData } = tableData;

const sellerColumns = [
  {
    title: 'Username Name',
    dataIndex: 'username',
    key: 'username',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
];

const ActiveUser = React.memo(() => {
  const [userTab, setUserTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setUserTab(value);
  };

  const userTableData = [];

  activeUserData[userTab].map((value) => {
    const { key, img, name, company, product, revenue, status } = value;
    return userTableData.push({
      key,
      username: (
        <div className="flex items-center w-full gap-2.5">
          <img className="w-[34px] h-[34px] rounded-4" src={require(`../../../../static/img/sellers/${img}`)} alt="" />
          <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
        </div>
      ),
      company: <div className="text-dark dark:text-white87">{company}</div>,
      product: <div className="text-dark dark:text-white87">{product}</div>,
      revenue: <div className="text-dark dark:text-white87">{revenue}</div>,
      status: (
        <span
          className={`inline-flex items-center justify-center bg-${status.toLowerCase()}-transparent text-${status.toLowerCase()} min-h-[24px] px-3 text-xs font-medium rounded-[15px] capitalize`}
        >
          {status}
        </span>
      ),
    });
  });

  return (
    <div className="full-width-table h-full">
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
        <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
          <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Active User
          </h1>
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  userTab === 'today'
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
                  userTab === 'week'
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
                  userTab === 'month'
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
        </div>
        <TableDefaultStyle>
          <div className="table-responsive px-[25px] pb-[25px] table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
            <Table columns={sellerColumns} dataSource={userTableData} pagination={false} />
          </div>
        </TableDefaultStyle>
      </div>
    </div>
  );
});

export default ActiveUser;
