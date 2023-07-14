import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Form, Input } from 'antd';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle, PaginationStyle } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { onStarUpdate, contactDeleteData, contactSearchData, contactAddData } from '../../redux/contact/actionCreator';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Modal } from '../../components/modals/antd-modals';

function ContactTable() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.Contact.data,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    selectedRowKeys: 0,
    selectedRows: 0,
    visible: false,
    editVisible: false,
    modalType: 'primary',
    url: null,
    update: {},
  });

  const { update } = state;

  const handleSearch = (searchText) => {
    dispatch(contactSearchData(searchText));
  };

  const onHandleDelete = (id) => {
    const value = users.filter((item) => item.id !== id);
    dispatch(contactDeleteData(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const showEditModal = (data) => {
    setState({
      ...state,
      editVisible: true,
      update: data,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
      editVisible: false,
    });
  };

  const handleOk = (values) => {
    onCancel();
    const arrayData = [];
    users.map((data) => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(
      contactAddData([
        ...users,
        {
          ...values,
          id: max + 1,
          time: new Date().getTime(),
          img: 'static/img/users/6.png',
          live: false,
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleEditOk = (values) => {
    onCancel();
    const updateUsers = users;

    updateUsers.map((user) => {
      if (user.id === update.id) {
        const updateUser = user;
        updateUser.id = update.id;
        updateUser.name = values.name;
        updateUser.email = values.email;
        updateUser.phone = values.phone;
        updateUser.designation = values.designation;
        updateUser.company = values.company;
        updateUser.time = update.time;
        updateUser.img = update.img;
        updateUser.stared = update.stared;
      }
      return true;
    });
    dispatch(contactAddData(updateUsers));
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const usersTableData = [];

  users
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map((user) => {
      const { id, name, designation, img, stared, email, phone, company } = user;

      return usersTableData.push({
        key: id,
        user: (
          <div className="flex items-center">
            <figure className="mx-2 mb-0">
              <img className="w-[40px] h-[40px] min-w-[40px]" src={require(`../../${img}`)} alt="" />
            </figure>
            <figcaption>
              <Heading className="mb-1 text-sm font-medium text-dark dark:text-white87" as="h6">
                {name}
              </Heading>
              <span className="flex text-xs font-normal text-light dark:text-white60">San Francisco, CA</span>
            </figcaption>
          </div>
        ),
        email: <span className="text-body dark:text-white60 text-[15px] font-medium">{email}</span>,
        company: <span className="text-body dark:text-white60 text-[15px] font-medium">{company}</span>,
        position: <span className="text-body dark:text-white60 text-[15px] font-medium">{designation}</span>,
        phone: <span className="text-body dark:text-white60 text-[15px] font-medium">{phone}</span>,
        action: (
          <div className="min-w-[150px] text-end -m-2">
            <Button
              onClick={() => dispatch(onStarUpdate(users, id))}
              type="primary"
              to="#"
              shape="circle"
              className="w-8 h-8 p-0 bg-transparent border-none shadow-none text-light-extra dark:text-white60"
            >
              <UilStar
                className={`w-[14px] h-[14px] mx-auto ${
                  stared ? 'text-warning' : 'text-light-extra dark:text-white60'
                }`}
              />
            </Button>
            <Dropdown
              className="bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
              content={
                <>
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    onClick={() => showEditModal(user, id)}
                    to="#"
                  >
                    <span>Edit</span>
                  </Link>
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    onClick={() => onHandleDelete(id)}
                    to="#"
                  >
                    <span>Delete</span>
                  </Link>
                </>
              }
              action={['click']}
            >
              <Button
                className="inline-flex items-center justify-center w-8 h-8 p-0 bg-transparent border-none text-light-extra dark:text-white60"
                type="light"
                to="#"
                shape="circle"
              >
                <UilEllipsisV className="w-[14px] h-[14px] m-0" />
              </Button>
            </Dropdown>
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
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
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
    <>
      <div className="flex items-center justify-between pt-[42px] pb-[35px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] md:justify-center md:flex-col gap-[20px]">
        <div className="inline-flex flex-wrap items-center md:justify-center gap-[20px]">
          <Heading as="h4" className="text-dark dark:text-white87 text-[22px] font-semibold mb-0">
            Contacts
          </Heading>
          <div className="ltr:ml-[5px] rtl:mr-[5px] [&>.ant-select>.ant-select-selector]:min-w-[350px] sm:[&>.ant-select>.ant-select-selector]:min-w-[100%] [&>.ant-select>.ant-select-selector>.ant-select-selection-search>.ant-input-affix-wrapper]:rounded-md  [&>div>div>span>span]:border-none">
            <AutoComplete onSearch={handleSearch} placeholder="Search by Name" width="100%" patterns />
          </div>
        </div>
        <Button
          onClick={showModal}
          className="h-10 px-[14px] text-sm font-semibold rounded-md"
          size="default"
          type="primary"
          key="1"
        >
          <Link to="#">+ Add New</Link>
        </Button>
      </div>

      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={15}>
          <Col xs={24}>
            <GlobalUtilityStyle>
              <PaginationStyle>
                <div className="ant-pagination-custom-style table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-selection-col-pl-25 table-tr-selected-background-transparent table-td-border-none bg-white dark:bg-white10 p-[25px] rounded-[10px] ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                  <Table
                    className="[&>div>div>.ant-table]:mb-7 [&>div>div>.ant-table]:pb-5 [&>div>div>.ant-table]:border-b [&>div>div>.ant-table]:border-regular dark:[&>div>div>.ant-table]:border-white10 ltr:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pl-[20px] ltr:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pl-[20px] rtl:[&>div>div>div>div>div>table>thead>tr>th:first-child]:pr-[20px] rtl:[&>div>div>div>div>div>table>tbody>tr>td:first-child]:pr-[20px]"
                    rowSelection={rowSelection}
                    dataSource={usersTableData}
                    columns={usersTableColumns}
                    pagination={{
                      defaultPageSize: 7,
                      total: usersTableData.length,
                      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                      className:
                        '[&>.ant-pagination-total-text]:border-none ssm:[&>.ant-pagination-total-text]:w-full [&>.ant-pagination-total-text]:text-center [&>.ant-pagination-total-text]:text-dark dark:[&>.ant-pagination-total-text]:text-white87 [&>.ant-pagination-total-text]:font-medium [&>.ant-pagination-total-text]:text-[17px md:justify-center',
                    }}
                  />
                </div>
              </PaginationStyle>
            </GlobalUtilityStyle>
          </Col>
        </Row>
        <Modal
          type={state.modalType}
          title="Contact Information"
          visible={state.visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="px-1.5">
            <Form form={form} name="contact" onFinish={handleOk}>
              <Form.Item
                label="Name"
                name="name"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Input Name" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ message: 'Please input your email!', type: 'email' }]}
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="+440 2546 5236" />
              </Form.Item>

              <Form.Item
                name="designation"
                label="Position"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Input Position" />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company Name"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Company Name" />
              </Form.Item>

              <Button
                htmlType="submit"
                size="default"
                type="primary"
                key="submit"
                className="px-5 text-sm font-semibold h-11"
              >
                Add New Contact
              </Button>
            </Form>
          </div>
        </Modal>
        <Modal
          type={state.modalType}
          title="Contact Information"
          visible={state.editVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="px-1.5">
            <Form form={form} name="contact" onFinish={handleEditOk}>
              <Form.Item
                label="Name"
                name="name"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Input Name" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ message: 'Please input your email!', type: 'email' }]}
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="+440 2546 5236" />
              </Form.Item>

              <Form.Item
                name="designation"
                label="Position"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Input Position" />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company Name"
                className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
              >
                <Input placeholder="Company Name" />
              </Form.Item>

              <Button
                htmlType="submit"
                size="default"
                type="primary"
                key="submit"
                className="px-5 text-sm font-semibold h-11"
              >
                Add New Contact
              </Button>
            </Form>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default ContactTable;
