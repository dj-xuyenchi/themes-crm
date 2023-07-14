import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { topProduct } = tableData;

const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
    key: 'productname',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Deals',
    dataIndex: 'deals',
    key: 'deals',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
];

const TopProduct = React.memo(() => {
  const [productTab, setProductTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setProductTab(value);
  };

  const productTableData = [];

  topProduct[productTab].map((value) => {
    const { key, img, name, deals, amount } = value;
    return productTableData.push({
      key,
      productname: (
        <div className="flex items-center w-full gap-2.5 ltr:mr-4 rtl:ml-4 ">
          <img
            className="w-[34px] h-[34px] rounded-4"
            src={require(`../../../../static/img/products/electronics/${img}`)}
            alt=""
          />
          <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
        </div>
      ),
      deals: <div className="text-sm">{deals}</div>,
      amount: <div className="text-sm">{amount}</div>,
    });
  });

  return (
    <div className="full-width-table h-full">
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
        <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
          <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Top Product
          </h1>
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  productTab === 'today'
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
                  productTab === 'week'
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
                  productTab === 'month'
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
            <Table columns={productColumns} dataSource={productTableData} pagination={false} />
          </div>
        </TableDefaultStyle>
      </div>
    </div>
  );
});

export default TopProduct;
