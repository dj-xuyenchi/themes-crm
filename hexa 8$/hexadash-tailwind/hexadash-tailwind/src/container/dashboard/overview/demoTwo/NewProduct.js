import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { newProduct } = tableData;

const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'pName',
    key: 'pName',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
];

const NewProduct = React.memo(() => {
  const [state, setState] = useState({
    productTab: 'today',
  });

  /* State destructuring */
  const { productTab } = state;

  const newProductData = [];
  if (newProduct !== null) {
    newProduct[productTab].map((value) => {
      const { key, name, img, price } = value;
      return newProductData.push({
        key,
        pName: (
          <div className="flex items-center">
            <div className="ltr:mr-2.5 rtl:ml-2.5 w-[34px] h-[34px]">
              <img
                className="w-[34px] h-[34px]"
                src={require(`../../../../static/img/products/electronics/${img}`)}
                alt="Product"
              />
            </div>
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{name}</span>
          </div>
        ),
        price: <span className="font-medium text-[14px] text-dark dark:text-white87">{price}</span>,
      });
    });
  }

  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setState({
      ...state,
      productTab: value,
    });
  };

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        isbutton={
          <div className="flex items-center">
            <ul className="flex items-center mb-0">
              <li>
                <Link
                  className={
                    productTab === 'today'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
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
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
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
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary font-medium text-13'
                  }
                  onClick={(e) => handleTabActivation('month', e)}
                  to="#"
                >
                  Month
                </Link>
              </li>
            </ul>
          </div>
        }
        title="New Product"
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <TableDefaultStyle>
          <div>
            <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive">
              <Table columns={productColumns} dataSource={newProductData} pagination={false} />
            </div>
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default NewProduct;
