import React, { useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle } from '../styled';

function Paginations() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Paginations',
    },
  ];
  const [state, setstate] = useState({
    current: 0,
    pageSize: 0,
    page: 0,
  });
  const onShowSizeChange = (current, pageSize) => {
    setstate({ ...state, current, pageSize });
  };

  const onChange = (pageNumber) => {
    setstate({ ...state, pageNumber });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Paginations"
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <PaginationStyle>
                <div className="p-[25px] ant-pagination-custom-style">
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </PaginationStyle>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  More pages
                </h1>
              </div>
              <PaginationStyle>
                <div className="p-[25px] ant-pagination-custom-style">
                  <Pagination defaultCurrent={1} total={500} />
                </div>
              </PaginationStyle>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Page size
                </h1>
              </div>
              <PaginationStyle>
                <div className="p-[25px] ant-pagination-custom-style">
                  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
                </div>
              </PaginationStyle>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Quick Jumper
                </h1>
              </div>
              <PaginationStyle>
                <div className="p-[25px] ant-pagination-custom-style">
                  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                </div>
              </PaginationStyle>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Paginations;
