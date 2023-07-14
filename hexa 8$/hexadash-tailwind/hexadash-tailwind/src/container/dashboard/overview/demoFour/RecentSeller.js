import { Table } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { resentSeller } = tableData;

function RecentSeller() {
  const [state, setState] = useState({
    sellerStatus: 'all',
  });

  const handleTabChange = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellerStatus: value,
    });
  };

  /* State destructuring */
  const { sellerStatus } = state;
  const dataSource = [];
  if (sellerStatus === 'all') {
    if (resentSeller !== null) {
      resentSeller[sellerStatus].map((value, key) => {
        const { title, id, price, company, device, userImg, status } = value;
        return (
          key <= 3 &&
          dataSource.push({
            key: id,
            name: (
              <div className="flex items-center w-full gap-2.5">
                <img
                  className="w-[34px] h-[34px] rounded-4"
                  src={require(`../../../../static/img/sellers/${userImg}`)}
                  alt=""
                />
                <span className="font-medium capitalize text-dark dark:text-white87 text-15">{title}</span>
              </div>
            ),
            company: <div className="text-dark dark:text-white87">{company}</div>,
            device: <div className="text-dark dark:text-white87">{device}</div>,
            price: <div className="text-dark dark:text-white87">${price}</div>,
            status: (
              <span
                className={`inline-flex items-center justify-center bg-${status.toLowerCase()}-transparent text-${status.toLowerCase()} min-h-[24px] px-3 text-xs font-medium rounded-[15px] capitalize`}
              >
                {status}
              </span>
            ),
          })
        );
      });
    }
  } else if (resentSeller !== null) {
    resentSeller[sellerStatus]
      .filter((item) => item.status === sellerStatus)
      .map((value, key) => {
        const { title, id, price, company, device, userImg, status } = value;
        return (
          key <= 3 &&
          dataSource.push({
            key: id,
            name: (
              <div className="flex items-center w-full gap-2.5">
                <img
                  className="w-[34px] h-[34px] rounded-4"
                  src={require(`../../../../static/img/sellers/${userImg}`)}
                  alt=""
                />
                <span className="font-medium capitalize text-dark dark:text-white87 text-15">{title}</span>
              </div>
            ),
            company: <div className="text-dark dark:text-white87">{company}</div>,
            device: <div className="text-dark dark:text-white87">{device}</div>,
            price: <div className="text-dark dark:text-white87">${price}</div>,
            status: (
              <span
                className={`inline-flex items-center justify-center bg-${status.toLowerCase()}-transparent text-${status.toLowerCase()} min-h-[24px] px-3 text-xs font-medium rounded-[15px] capitalize`}
              >
                {status}
              </span>
            ),
          })
        );
      });
  }

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4 overflow-y-auto',
    },
    {
      title: '',
      dataIndex: 'company',
      key: 'company',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'device',
      key: 'device',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'price',
      key: 'price',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ];

  return (
    <div className="full-width-table h-full">
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
        <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
          <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Recent Seller
          </h1>
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  sellerStatus === 'all'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => handleTabChange('all', e)}
                to="#"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                className={
                  sellerStatus === 'done'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabChange('done', e)}
                to="#"
              >
                Done
              </Link>
            </li>
            <li>
              <Link
                className={
                  sellerStatus === 'pending'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabChange('pending', e)}
                to="#"
              >
                Pending
              </Link>
            </li>
          </ul>
        </div>
        <GlobalUtilityStyle>
          <TableDefaultStyle>
            <div className="table-responsive px-[25px] pb-[25px] table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table columns={columns} dataSource={dataSource} pagination={false} showHeader={false} />
            </div>
          </TableDefaultStyle>
        </GlobalUtilityStyle>
      </div>
    </div>
  );
}

export default RecentSeller;
