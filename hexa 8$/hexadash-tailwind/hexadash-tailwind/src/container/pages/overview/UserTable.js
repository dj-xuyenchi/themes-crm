import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { GlobalUtilityStyle, PaginationStyle } from '../../styled';
import Heading from '../../../components/heading/heading';

function UserListTable() {
  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  const usersTableData = [];

  users.map((user) => {
    const { id, name, designation, img, status } = user;

    return usersTableData.push({
      key: id,
      user: (
        <div className="flex items-center">
          <figure className="mx-2 mb-0">
            <img style={{ width: '40px' }} src={require(`../../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="mb-1 text-sm font-medium text-dark dark:text-white87" as="h6">
              {name}
            </Heading>
            <span className="flex text-xs font-normal text-light dark:text-white60">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      email: <span className="text-body dark:text-white60 text-[15px] font-medium">john@gmail.com</span>,
      company: <span className="text-body dark:text-white60 text-[15px] font-medium">Business Development</span>,
      position: <span className="text-body dark:text-white60 text-[15px] font-medium">{designation}</span>,
      joinDate: <span className="text-body dark:text-white60 text-[15px] font-medium">January 20, 2020</span>,
      status: (
        <span
          className={`inline-flex items-center justify-center bg-${status}-transparent text-${status} min-h-[24px] px-3 text-xs font-medium rounded-[15px]`}
        >
          {status}
        </span>
      ),
      action: (
        <div className="min-w-[150px] text-end -m-2">
          <Link className="inline-block m-2" to="#">
            <UilEye className="w-4 text-light-extra dark:text-white60" />
          </Link>
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

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
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
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
      <GlobalUtilityStyle>
        <PaginationStyle>
          <div className="ant-pagination-custom-style table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-selection-col-pl-25 table-tr-selected-background-transparent table-td-border-none bg-white dark:bg-transparent rounded-[10px] ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
            <Table
              className="[&>div>div>.ant-table]:mb-7 [&>div>div>.ant-table]:pb-5 [&>div>div>.ant-table]:border-b [&>div>div>.ant-table]:border-regular dark:[&>div>div>.ant-table]:border-white10 ltr:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pl-[20px] ltr:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pl-[20px] rtl:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pr-[20px] rtl:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pr-[20px]"
              rowSelection={rowSelection}
              dataSource={usersTableData}
              columns={usersTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: usersTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                className:
                  '[&>.ant-pagination-total-text]:border-none ssm:[&>.ant-pagination-total-text]:w-full [&>.ant-pagination-total-text]:text-center [&>.ant-pagination-total-text]:text-dark dark:[&>.ant-pagination-total-text]:text-white87 [&>.ant-pagination-total-text]:font-medium [&>.ant-pagination-total-text]:text-[17px md:justify-center',
              }}
            />
          </div>
        </PaginationStyle>
      </GlobalUtilityStyle>
    </div>
  );
}

export default UserListTable;
