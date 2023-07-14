import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import topProduct from '../../../../demoData/table-data.json';

const { topSaleProduct } = topProduct;

const sellingColumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
];

const TopSellingProduct = React.memo(() => {
  const [state, setState] = useState({
    sellingTab: 'today',
  });

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellingTab: value,
    });
  };

  /* State destructuring */
  const { sellingTab } = state;

  const sellingData = [];
  if (topSaleProduct !== null) {
    topSaleProduct[sellingTab].map((value) => {
      const { key, name, img, price, sold, revenue } = value;
      return sellingData.push({
        key,
        name: (
          <div className="flex items-center">
            <div className="ltr:mr-2.5 rtl:ml-2.5 w-[34px] h-[34px]">
              <img
                className="w-[34px] h-[34px] rounded-4"
                src={require(`../../../../static/img/products/electronics/${img}`)}
                alt=""
              />
            </div>
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
          </div>
        ),
        price: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{price}</span>,
        sold: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{sold}</span>,
        revenue: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{revenue}</span>,
      });
    });
  }

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  sellingTab === 'today'
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
                  sellingTab === 'week'
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
                  sellingTab === 'month'
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
        title="Top Selling Products"
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <TableDefaultStyle>
          <div>
            <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
            </div>
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default TopSellingProduct;
