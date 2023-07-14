import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { bestSeller } = tableData;

const sellerColumns = [
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    key: 'sellerName',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
];

const BestSeller = React.memo(() => {
  const [state, setState] = useState({
    sellerTab: 'today',
  });

  const { sellerTab } = state;

  const bestSellerData = [];

  if (bestSeller !== null) {
    bestSeller[sellerTab].map((value) => {
      const { key, img, name, company, product, revenue, status } = value;
      return bestSellerData.push({
        key,
        sellerName: (
          <div className="flex items-center">
            <div className="ltr:mr-2.5 rtl:ml-2.5 w-[34px] h-[34px]">
              <img className="w-[34px] h-[34px]" src={require(`../../../../static/img/sellers/${img}`)} alt="Product" />
            </div>
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
          </div>
        ),
        company: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{company}</span>,
        product: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{product}</span>,
        revenue: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{revenue}</span>,
        status: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{status}</span>,
      });
    });
  }

  const handleTabChange = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellerTab: value,
    });
  };

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  sellerTab === 'today'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
                }
                onClick={(e) => handleTabChange('today', e)}
                to="#"
              >
                Today
              </Link>
            </li>
            <li>
              <Link
                className={
                  sellerTab === 'week'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
                }
                onClick={(e) => handleTabChange('week', e)}
                to="#"
              >
                Week
              </Link>
            </li>
            <li>
              <Link
                className={
                  sellerTab === 'month'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
                }
                onClick={(e) => handleTabChange('month', e)}
                to="#"
              >
                Month
              </Link>
            </li>
          </ul>
        }
        title="Best Seller"
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <TableDefaultStyle>
          <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive">
            <Table columns={sellerColumns} dataSource={bestSellerData} pagination={false} />
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default BestSeller;
