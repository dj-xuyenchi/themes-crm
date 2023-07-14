import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Row, Col, Input, Select, Table, Popconfirm, Skeleton } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TicketBox } from './Style';
import SupportCreate from './SupportCreate';
import SupportUpdate from './SupportUpdate';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { idGenerator } from '../../utility/utility';
import { ticketReadData, ticketUpdateData, ticketUpdateSearch } from '../../redux/supportTickets/actionCreator';

const OverviewDataList = lazy(() => import('./overview/OverviewDataList'));

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function AddSupportTicket() {
  const { dataState } = useSelector((state) => {
    return {
      dataState: state.tickets.data,
    };
  });

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editableData, setEditableData] = useState(false);

  const dataSource = [];

  useEffect(() => {
    if (dispatch) {
      dispatch(ticketReadData());
    }
    setVisible(true);
  }, [dispatch]);

  const confirm = (id) => {
    const deleteData = dataState.filter((ticket) => ticket.id !== id);
    dispatch(ticketUpdateData(deleteData));
  };

  const cancel = () => {};

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      className:
        'ltr:rounded-l-[10px] rtl:rounded-r-[10px] ltr:pl-[25px] rtl:pr-[25px] text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Requested By',
      dataIndex: 'requested',
      key: 'requested',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Created Date',
      dataIndex: 'createAt',
      key: 'createAt',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
      className:
        'ltr:pr-4 rtl:pl-4 text-dark dark:text-white87 font-medium text-[15px] py-[16px] last:text-end border-none capitalize before:hidden ltr:rounded-r-[10px] rtl:rounded-l-[10px] ltr:pr-[25px] rtl:pl-[25px]',
    },
  ];

  const showModalEdit = (values) => {
    setEditableData(values);
    setVisibleEdit(true);
  };

  const onCancelEdit = () => {
    setVisibleEdit(false);
  };

  if (dataState.length) {
    dataState.map((item) => {
      const { id, user, status, subject, priority, createAt } = item;
      return dataSource.push({
        key: `${id}`,
        id: `#${id}`,
        requested: (
          <div className="flex items-center gap-x-[20px] gap-y-[15px]">
            <div>
              <img className="max-w-[30px] rounded-full" src={require(`../../${user.img}`)} alt="" />
            </div>
            <div>
              <p className="mb-0 text-[15px] text-theme-gray dark:text-white60 font-medium">{user.name}</p>
            </div>
          </div>
        ),
        status: (
          <span
            className={`text-xs text-theme-gray dark:text-white60 font-medium inline-flex items-center justify-center min-h-[24px] px-3 rounded-[15px] status-${status} [&.status-open]:text-active [&.status-open]:bg-active-transparent [&.status-pending]:text-deactivated [&.status-pending]:bg-deactivated-transparent [&.status-close]:text-blocked [&.status-close]:bg-blocked-transparent`}
          >
            {status}
          </span>
        ),
        subject: <span className="text-[15px] text-theme-gray dark:text-white60 font-medium">{subject}</span>,
        priority: <span className="text-[15px] text-theme-gray dark:text-white60 font-medium">{priority}</span>,
        createAt: <span className="text-[15px] text-theme-gray dark:text-white60 font-medium">{createAt}</span>,
        action: (
          <div className="flex items-center gap-[15px]">
            <Link className="view group hover:text-success" to={`/admin/app/support/ticketDetails/${id}`}>
              <UilEye className="w-4 text-light-extra dark:text-white60 group-hover:text-currentColor" />
            </Link>
            <Link onClick={() => showModalEdit(item)} className="edit group hover:text-info" to="#">
              <UilEdit className="w-4 text-light-extra dark:text-white60 group-hover:text-currentColor" />
            </Link>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={(e) => confirm(id, e)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Link className="delete group hover:text-danger" to="#">
                <UilTrashAlt className="w-4 text-light-extra dark:text-white60 group-hover:text-currentColor" />
              </Link>
            </Popconfirm>
          </div>
        ),
      });
    });
  }

  const showModal = () => {
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const handleSubmit = (values) => {
    const id = idGenerator(dataState, 2);
    dispatch(
      ticketUpdateData(
        dataState.concat({
          ...values,
          user: {
            name: 'Kellie Marquot',
            img: 'static/img/avatar/profileImage.png',
            conversations: [],
          },
          createAt: moment().format('MM-DD-yyyy'),
          id,
        }),
      ),
    );
    setVisible(false);
  };

  const handleUpdate = (values) => {
    const newData = dataState.map((item) => {
      setVisibleEdit(false);
      if (item.id === values.id) {
        const newItem = { ...item };

        newItem.subject = values.subject;
        newItem.email = values.email;
        newItem.priority = values.priority;
        newItem.status = values.status;
        newItem.description = values.description;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
  };

  const handleIdSearch = (e) => {
    const id = e.currentTarget.value;
    dispatch(ticketUpdateSearch(id, 'id'));
  };

  const handleStatusSearch = (value) => {
    dispatch(ticketUpdateSearch(value, 'status'));
  };

  const handleSubjectSearch = (e) => {
    const { value } = e.currentTarget;
    dispatch(ticketUpdateSearch(value, 'subject'));
  };

  return (
    <>
      <PageHeader
        className="flex flex-wrap items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col sm:justify-center"
        title="Support Ticket"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <TicketBox>
          <Row justify="center">
            <Col xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <OverviewDataList />
              </Suspense>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative p-[25px]">
                <div className=" text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between gap-[15px]">
                  <h1 className="mb-0 inline-block overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    All Support Ticket
                  </h1>
                  <Button
                    onClick={showModal}
                    className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[15px] h-[44px] shadow-btn gap-[8px]"
                  >
                    <UilPlus className="w-[16px] h-[16px]" /> Add Ticket
                  </Button>
                </div>

                <div className="flex items-center justify-between flex-wrap w-full mt-[20px] mb-[25px] gap-[20px] md:justify-center md:flex-col">
                  <div className="inline-flex items-center flex-wrap gap-x-[20px] gap-y-[10px] md:justify-center">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-theme-gray dark:text-white60">Id:</span>
                      <Input
                        className="bg-white dark:bg-white10 rounded-6 py-[7.22px] px-[20px] text-theme-gray dark:text-white60 border-normal dark:border-white10 border-1 text-ellipsis"
                        onChange={handleIdSearch}
                        placeholder="Search with Id"
                      />
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-theme-gray dark:text-white60">Status:</span>
                      <Select
                        className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60 dark:[&>.ant-select-arrow]:text-white60"
                        onChange={handleStatusSearch}
                        style={{ width: 200 }}
                        defaultValue=""
                      >
                        <Select.Option value="">All</Select.Option>
                        <Select.Option value="Open">Open</Select.Option>
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Close">Close</Select.Option>
                      </Select>
                    </div>
                  </div>
                  <div className="min-sm:min-w-[280px]">
                    <Input
                      className="bg-white dark:bg-white10 rounded-6 py-[7.22px] px-[20px] text-theme-gray dark:text-white60  border-normal dark:border-white10 border-1 text-ellipsis [&>span>span>svg]:text-light dark[&>span>span>svg]:text-white60 dark:[&>.ant-input]:bg-transparent"
                      onChange={handleSubjectSearch}
                      size="default"
                      placeholder="Search"
                      prefix={prefix}
                    />
                  </div>
                </div>
                <PaginationStyle>
                  <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive ant-pagination-custom-style [&>div>div>div>ul]:pt-[30px] [&>div>div>div>ul]:mt-[20px] [&>div>div>div>ul]:border-normal dark:[&>div>div>div>ul]:border-white10 [&>div>div>div>ul]:border-t-1 [&>div>div>div>ul]:justify-center">
                    <Table
                      pagination={{ pageSize: 10, showSizeChanger: true }}
                      dataSource={dataSource}
                      columns={columns}
                    />
                  </div>
                </PaginationStyle>
              </div>
            </Col>
          </Row>
        </TicketBox>
      </main>
      <SupportCreate onCancel={onCancel} handleSubmit={handleSubmit} visible={visible} />
      <SupportUpdate
        onCancel={onCancelEdit}
        editableData={editableData}
        handleSubmit={handleUpdate}
        visible={visibleEdit}
      />
    </>
  );
}

export default AddSupportTicket;
