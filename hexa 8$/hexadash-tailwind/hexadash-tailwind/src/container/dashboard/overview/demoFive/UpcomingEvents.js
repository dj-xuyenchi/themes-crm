/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { TableDefaultStyle, GlobalUtilityStyle } from '../../../styled';

const events = {
  today: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '19',
      month: 'March',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '19',
      month: 'March',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '11:30 AM',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '12',
      month: 'September',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'info',
      title: 'International Web Conference 2021',
      date: '16',
      month: 'September',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'secondary',
      title: 'Dribble Designer Meetup',
      date: '15',
      month: 'September',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '13',
      month: 'September',
      time: '11:30 AM',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '24',
      month: 'April',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '24',
      month: 'April',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '24',
      month: 'April',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '28',
      month: 'April',
      time: '11:30 AM',
    },
  ],
};

function UpcomingEvents() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    tabValue: 'today',
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
    taskEditId: '',
    editableItem: {},
  });
  const { taskEditId, editableItem, visible } = state;
  const [eventState, setEventState] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setEventState(events[state.tabValue]);
    }

    return () => (unmounted = true);
  }, [state.tabValue]);

  const tabChange = (value) => {
    setState({
      ...state,
      tabValue: value,
    });
  };

  const showModal = (id, item) => {
    setState({
      ...state,
      visible: true,
      collapsed: false,
      taskEditId: id,
      editableItem: item,
    });
  };

  const handleTaskDelete = (id) => {
    events[state.tabValue] = events[state.tabValue].filter((item) => item.id !== id);
    setEventState(eventState.filter((item) => item.id !== id));
  };

  const dataSource = [];

  if (eventState)
    eventState.map((value) => {
      const { title, time, date, month, type, id } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="flex items-center gap-[15px]">
            <div
              className={`flex items-center justify-center flex-col bg-${type} min-h-[60px] min-w-[60px] px-2.5 text-white rounded-[6px]`}
            >
              <span className="text-[15px] font-medium">{date}</span>
              <span className="text-[15px] font-medium">{month}</span>
            </div>
            <article>
              <h4 className="text-dark dark:text-white87 text-[15px] leading-[18px] font-normal">{title}</h4>
              <p className="text-light dark:text-white30 text-[15px] leading-none m-0">{time}</p>
            </article>
          </div>
        ),
        actions: (
          <div className="flex items-center justify-end gap-3">
            <Link to="#" className="group" onClick={() => showModal(id, { title, time, date, id })}>
              <UilEdit className="w-[14px] h-[14px] text-light dark:text-white30 group-hover:text-info" />
            </Link>
            <Link to="#" className="group" onClick={() => handleTaskDelete(id)}>
              <UilTimes className="w-[14px] h-[14px] text-light dark:text-white30 group-hover:text-danger" />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      className: 'ltr:pr-4 rtl:pl-4 py-2.5 last:text-start border-none before:hidden',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      className: 'ltr:pr-4 rtl:pl-4 py-2.5 last:text-start border-none before:hidden',
    },
  ];

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleUpdate = (value) => {
    events[state.tabValue].map((item) => {
      if (item.id === taskEditId) {
        return (item.title = value.title);
      }
      return item;
    });

    eventState.map((item) => {
      if (item.id === taskEditId) {
        return (item.title = value.title);
      }
      return item;
    });
    return setState({
      ...state,
      visible: false,
    });
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);

  return (
    <GlobalUtilityStyle>
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  state.tabValue === 'today'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => tabChange('today', e)}
                to="#"
              >
                Today
              </Link>
            </li>
            <li>
              <Link
                className={
                  state.tabValue === 'week'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => tabChange('week', e)}
                to="#"
              >
                Week
              </Link>
            </li>
            <li>
              <Link
                className={
                  state.tabValue === 'month'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => tabChange('month', e)}
                to="#"
              >
                Month
              </Link>
            </li>
          </ul>
        }
        title="Upcoming Events"
        size="large"
        className="ant-card-head-b-none ant-card-body-pt-0"
      >
        <TableDefaultStyle>
          <div className="table-pl-0 hover-tr-none table-pt-8 table-td-border-none table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </div>
        </TableDefaultStyle>
      </Cards>
      <Modal
        title="Update Events"
        className="hexadash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form form={form} name="add-task" onFinish={handleUpdate}>
          <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
            <Input placeholder="Title" className="text-body dark:text-white60 border-normal dark:border-whiteDark" />
          </Form.Item>
          <div className="flex items-center gap-2.5">
            <Button
              size="small"
              type="white"
              key="cancel"
              outlined
              onClick={handleCancel}
              className="h-[38px] px-5 bg-white dark:bg-whiteDark text-dark dark:text-white87 border-normal dark:border-white30"
            >
              Cancel
            </Button>
            <Button htmlType="submit" size="small" type="primary" key="submit" className="h-[38px] px-5">
              Update Event
            </Button>
          </div>
        </Form>
      </Modal>
    </GlobalUtilityStyle>
  );
}

export default UpcomingEvents;
