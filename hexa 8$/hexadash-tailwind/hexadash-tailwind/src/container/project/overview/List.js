import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { GlobalUtilityStyle, PaginationStyle } from '../../styled';
import { Dropdown } from '../../../components/dropdown/dropdown';

function ProjectLists() {
  const project = useSelector((state) => state.projects.data);
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  if (projects.length)
    projects.map((value) => {
      const { id, title, status, category, percentage } = value;
      return dataSource.push({
        key: id,
        project: (
          <>
            <Heading as="h4" className="mb-[5px] text-dark dark:text-white87 text-[15px] font-medium">
              <Link to={`/admin/project/projectDetails/${id}`} className="text-dark dark:text-white87">
                {title}
              </Link>
            </Heading>
            <p className="mb-0 text-xs text-body dark:text-white60">{category}</p>
          </>
        ),
        startDate: <span className="text-body dark:text-white60 text-[15px] font-medium">26 Dec 2019</span>,
        deadline: <span className="text-body dark:text-white60 text-[15px] font-medium">18 Mar 2020</span>,
        assigned: (
          <>
            <ul className="flex items-center -m-[3px] p-0 gap-[3px]">
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/1.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/2.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/3.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/4.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/5.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/6.png`)}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[35px] min-w-[35px] h-[35px] rounded-full"
                  src={require(`../../../static/img/users/7.png`)}
                  alt=""
                />
              </li>
            </ul>
          </>
        ),
        status: (
          <Tag
            className={`inline-flex items-center justify-center bg-${status} text-white dark:text-white87 min-h-[18px] px-3 text-[10px] uppercase font-semibold border-none rounded-1`}
          >
            {status}
          </Tag>
        ),
        completion: (
          <>
            <Progress
              percent={status === 'complete' ? 100 : percentage}
              strokeWidth={5}
              className="inline-flex items-center text-sm text-body dark:text-white60 [&>.ant-progress-text]:text-body dark:[&>.ant-progress-text]:text-white60"
            />
            <p className="mt-1 text-body dark:text-white60 text-[13px]">12/15 Task Completed</p>
          </>
        ),
        action: (
          <Dropdown
            className="min-w-[140px]"
            content={
              <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                <Link
                  to="#"
                  className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
                >
                  View
                </Link>
                <Link
                  to="#"
                  className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
                >
                  Edit
                </Link>
                <Link
                  to="#"
                  className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
                >
                  Delete
                </Link>
              </div>
            }
          >
            <Link to="#">
              <UilEllipsisH className="w-4 h-4 text-light-extra dark:text-white60" />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      className: 'text-light dark:text-white60 text-[15px] py-2.5 last:text-end border-none before:hidden',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      className: 'text-light dark:text-white60 text-[15px] py-2.5 last:text-end border-none before:hidden',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      className: 'text-light dark:text-white60 text-[15px] last:text-end border-none before:hidden',
    },
    {
      title: 'Assigned To',
      dataIndex: 'assigned',
      key: 'assigned',
      className: 'text-light dark:text-white60 text-[15px] last:text-end border-none before:hidden',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      className: 'text-light dark:text-white60 text-[15px] last:text-end border-none before:hidden',
    },
    {
      title: 'Completion',
      dataIndex: 'completion',
      key: 'completion',
      className: 'text-light dark:text-white60 text-[15px] last:text-end border-none before:hidden',
    },

    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      className: 'text-light dark:text-white60 text-[15px] last:text-end border-none before:hidden',
    },
  ];

  return (
    <GlobalUtilityStyle>
      <Row gutter={25}>
        <Col xs={24}>
          <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
            <div className="table-responsive table-th-shape-none table-head-rounded table-th-text-light hover-tr-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
          </div>
        </Col>
        <Col xs={24} className="pb-30">
          <PaginationStyle>
            {projects.length ? (
              <div className="ant-pagination-custom-style text-end mt-[30px] mb-[25px]">
                <Pagination
                  onChange={onHandleChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  pageSize={10}
                  defaultCurrent={1}
                  total={40}
                />
              </div>
            ) : null}
          </PaginationStyle>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  );
}

export default ProjectLists;
