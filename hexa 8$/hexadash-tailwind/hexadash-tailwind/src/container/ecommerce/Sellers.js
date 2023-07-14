import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle, PaginationStyle } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';

function Sellers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Sellers',
    },
  ];
  const { searchData, sellers } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      sellers: state.sellers,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    item: sellers,
    selectedRowKeys: [],
  });
  const { notData, selectedRowKeys, item } = state;

  useEffect(() => {
    if (sellers) {
      setState({
        item: sellers,
        selectedRowKeys,
      });
    }
  }, [sellers, selectedRowKeys]);

  const handleSearch = (searchText) => {
    const data = searchData.filter((value) => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const dataSource = [];
  if (sellers.length)
    item.map((value) => {
      const { storeName, id, name, product, amount, date, img } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="flex items-center">
            <img className="ltr:mr-3 rtl:ml-3" src={require(`../../${img}`)} alt="" />
            <span className="font-medium text-body dark:text-white60">{name}</span>
          </div>
        ),
        store: <span className="font-medium text-body dark:text-white60">{storeName}</span>,
        product: <span className="product-id text-body dark:text-white60">{product}</span>,
        amount: <span className="font-medium text-body dark:text-white60">{amount}</span>,
        date: <span className="font-medium text-body dark:text-white60">{date}</span>,
        action: (
          <div className="min-w-[150px] text-end -m-2">
            <Link className="inline-block m-2" to="#">
              <UilEdit className="w-4 text-light-extra dark:text-white60" />
            </Link>
            <Link className="inline-block m-2" to="#">
              <UilTrashAlt className="w-4 text-light-extra dark:text-white60" />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: 'Sellers',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
    },
    {
      title: 'Products',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Create Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Sellers"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <GlobalUtilityStyle className="bg-white dark:bg-white10 p-[25px] rounded-10">
          <Row gutter={15}>
            <Col xs={24}>
              <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px] md:flex-col md:justify-center">
                <div className="flex items-center flex-wrap gap-[20px] md:justify-center">
                  <div className="[&>div>div>span>.ant-select-selection-search-input]:bg-regularBG dark:[&>div>div>span>.ant-select-selection-search-input]:bg-regularBGdark [&>div>div>span>.ant-select-selection-search-input]:h-10 [&>div>div>span>.ant-select-selection-search-input]:border-none [&>div>div>span>.ant-select-selection-search-input>input]:bg-regularBG dark:[&>div>div>span>.ant-select-selection-search-input>input]:bg-transparent min-lg:[&>div>div>span>span>input]:min-w-[350px]">
                    <AutoComplete onSearch={handleSearch} dataSource={notData} width="100%" patterns />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-[6px] md:justify-center">
                  <Button
                    size="small"
                    type="secondary"
                    transparented
                    className="bg-[#5840ff15] h-[38px] px-[13px] text-secondary text-[13px] font-medium rounded-md border-none"
                  >
                    Export
                  </Button>
                  <Button
                    size="small"
                    type="primary"
                    className="flex items-center bg-primary h-[38px] gap-[6px] px-[13px] text-white dark:text-white87 text-[13px] font-medium rounded-md border-none"
                  >
                    <UilPlus className="w-[14px] h-[14px]" /> Add Seller
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={24}>
              <PaginationStyle>
                <div className="ant-pagination-custom-style table-responsive table-head-rounded table-th-shape-none table-th-border-none table-last-th-text-right hover-tr-none table-td-border-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                  <Table
                    className="[&>div>div>.ant-table]:mb-7 [&>div>div>.ant-table]:pb-5 [&>div>div>.ant-table]:border-b [&>div>div>.ant-table]:border-regular dark:[&>div>div>.ant-table]:border-white10 ltr:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pl-[20px] ltr:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pl-[20px] rtl:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pr-[20px] rtl:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pr-[20px] "
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ pageSize: 7, showSizeChanger: true, total: sellers.length }}
                  />
                </div>
              </PaginationStyle>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </>
  );
}

export default Sellers;
