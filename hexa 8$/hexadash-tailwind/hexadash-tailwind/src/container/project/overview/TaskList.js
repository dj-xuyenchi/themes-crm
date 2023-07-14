import React, { useState } from 'react';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';

function TaskList() {
  const [state, setState] = useState({
    selectedRowKeys: [],
    selectedRows: [],
  });
  const dataSource = [
    {
      key: '1',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      key: '3',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      key: '4',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      key: '5',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      key: '6',
      title: <span className="text-body dark:text-white60">Add Images To the gallery</span>,
      component: (
        <div className="flex items-center justify-end -mx-[10px]">
          <span className="block mx-[10px] text-xs text-[#9299b8] dark:text-white60 leading-none">09:20 AM </span>
          <img
            className="block mx-[10px] leading-none"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="block mx-[10px] leading-none">
            <UilExpandArrows className="w-4 h-4 text-light-extra dark:text-white60" />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH className="w-4 h-4 mx-[10px] text-body dark:text-white60" />
              </Link>
            </Dropdown>
          </div>
        </div>
      ),
    },
  ];

  const columns = [
    {
      dataIndex: 'title',
      key: 'title',
    },
    {
      dataIndex: 'component',
      key: 'component',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="table-responsive table-head-none hover-tr-none table-td-border-none table-td-text-body dark:text-white60 table-tr-selected-background-transparent w-full ltr:pl-[17px] rtl:pr-[17pxd] [&>div>div>div>div>div>div>table>tbody>tr>td]:py-[10px]">
      <Table pagination={false} rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
      <div className="mt-[18px] mx-2 mb-[25px]">
        <Button
          className="inline-flex items-center bg-primary-transparent text-primary w-full h-[50px] text-xs font-semibold border-none rounded-[6px]"
          type="primary"
          size="large"
          transparented
        >
          <UilPlus className="w-4 h-4 ltr:mr-1.5 rtl:ml-1.5" /> Add New Task
        </Button>
      </div>
    </div>
  );
}

export default TaskList;
