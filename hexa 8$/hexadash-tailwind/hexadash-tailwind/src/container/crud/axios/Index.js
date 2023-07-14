import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import { GlobalUtilityStyle, PaginationStyle } from '../../styled';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { axiosDataRead, axiosDataSearch, axiosDataDelete } from '../../../redux/crud/axios/actionCreator';

function ViewPage() {
  const dispatch = useDispatch();
  const { crud, isLoading } = useSelector((state) => {
    return {
      crud: state.AxiosCrud.data,
      isLoading: state.AxiosCrud.loading,
    };
  });

  useEffect(() => {
    if (dispatch) {
      dispatch(axiosDataRead());
    }
  }, [dispatch]);

  const [state, setState] = useState({
    selectedRowKeys: [],
  });
  const { selectedRowKeys } = state;

  const dataSource = [];

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure delete this?');
    if (confirm) {
      dispatch(
        axiosDataDelete({
          id,
          getData: () => {
            dispatch(axiosDataRead());
          },
        }),
      );
    }
    return false;
  };

  const onHandleSearch = (e) => {
    dispatch(axiosDataSearch(e.target.value, crud));
  };

  if (crud.length)
    crud.map((person, key) => {
      const { id, name, email, company, position, join, status, city, country, image } = person;

      return dataSource.push({
        key: key + 1,
        name: (
          <div className="flex items-center">
            <figure className="mx-2 mb-0">
              <img
                className="w-10"
                src={
                  image
                    ? `${process.env.REACT_APP_API_ENDPOINT}/${image}`
                    : require('../../../static/img/avatar/profileImage.png')
                }
                alt={id}
              />
            </figure>
            <figcaption>
              <span className="mb-1 text-sm font-medium text-dark dark:text-white87">{name}</span>
              <span className="flex text-xs font-normal text-light dark:text-white60">
                {city && country ? `${city},${country}` : ''}
              </span>
            </figcaption>
          </div>
        ),
        email: <span className="text-body dark:text-white60 text-[15px] font-medium">{email}</span>,
        company: <span className="text-body dark:text-white60 text-[15px] font-medium">{company}</span>,
        position: <span className="text-body dark:text-white60 text-[15px] font-medium">{position}</span>,
        join: <span className="text-body dark:text-white60 text-[15px] font-medium">{join}</span>,
        status: (
          <span
            className={`inline-flex items-center justify-center bg-${status}-transparent text-${status} min-h-[24px] px-3 text-xs font-medium rounded-[15px]`}
          >
            {status}
          </span>
        ),
        action: (
          <div className="min-w-[150px] text-end -m-2">
            <Link className="inline-block m-2" to={`/admin/axios/crud/edit/${id}`}>
              <UilEdit className="w-4 text-light-extra dark:text-white60" />
            </Link>
            <Link className="inline-block m-2" to="#">
              <UilTrash to="#" onClick={() => handleDelete(id)} className="w-4 text-light-extra dark:text-white60" />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Joining Date',
      dataIndex: 'jdate',
      key: 'jdate',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
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
    <div>
      <PageHeader
        className="flex items-center justify-between px-[30px] py-[25px] bg-transparent [&>div>div>.ant-page-header-heading-title]:text-[22px] [&>div>div>.ant-page-header-heading-title]:font-semibold [&>div>div>.ant-page-header-heading-title]:text-dark dark:[&>div>div>.ant-page-header-heading-title]:text-white leading-[32px] [&>div>div]:flex [&>div>div]:items-center gap-[12px] [&>div]:flex [&>div]:flex-wrap [&>div]:items-center [&>div]:w-full [&>div]:gap-[10px] [&>div>.ant-page-header-heading-left]:m-0 [&>div>.ant-page-header-heading-left]:gap-[12px]"
        subTitle={
          <Link
            className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
            to="/admin/axios/crud/add"
          >
            <UilPlus className="w-[15px] h-[15px]" /> <span>Add New</span>
          </Link>
        }
        buttons={[
          <div key={1} className="relative">
            <span className="absolute left-[18px] top-[50%] translate-y-[-50%]">
              <UilSearch className="w-[16px] h-[16px] text-light dark:text-white60" />
            </span>
            <input
              className="border-none h-[40px] min-w-[280px] ltr:pl-[45px] ltr:pr-[20px] rtl:pr-[45px] rtl:pl-[20px] rounded-6 bg-white dark:bg-white10 focus-none outline-none"
              onChange={onHandleSearch}
              type="text"
              name="recored-search"
              placeholder="Search Here"
            />
          </div>,
        ]}
        ghost
        title="Data List"
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={15}>
          <Col className="w-100" md={24}>
            <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
              {isLoading ? (
                <div className="flex items-center justify-center [&>div]:flex [&>div]:items-center">
                  <Spin />
                </div>
              ) : (
                <GlobalUtilityStyle>
                  <PaginationStyle>
                    <div className="ant-pagination-custom-style table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-selection-col-pl-25 table-tr-selected-background-transparent table-td-border-none bg-white dark:bg-white10 min-sm:p-[25px] rounded-[10px] ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                      <Table
                        className="[&>div>div>.ant-table]:mb-7 [&>div>div>.ant-table]:pb-5 [&>div>div>.ant-table]:border-b [&>div>div>.ant-table]:border-regular dark:[&>div>div>.ant-table]:border-white10 ltr:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pl-[20px] ltr:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pl-[20px] rtl:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pr-[20px] rtl:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pr-[20px]"
                        rowSelection={rowSelection}
                        pagination={{ pageSize: 10, showSizeChanger: true }}
                        dataSource={dataSource}
                        columns={columns}
                      />
                    </div>
                  </PaginationStyle>
                </GlobalUtilityStyle>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewPage;
