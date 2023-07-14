import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import ContactCard from './overview/ContactCard';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { contactSearchData, contactAddData } from '../../redux/contact/actionCreator';
import { Modal } from '../../components/modals/antd-modals';

function ContactGrid() {
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
      update: {},
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
    onCancel();
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <div className="flex items-center justify-between pt-[42px] pb-[35px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] md:justify-center md:flex-col gap-[20px]">
        <div className="inline-flex flex-wrap items-center md:justify-center gap-[20px]">
          <Heading as="h4" className="text-dark dark:text-white87 text-[22px] font-semibold mb-0">
            Contacts
          </Heading>
          <div className="ltr:ml-[5px] rtl:mr-[5px] [&>.ant-select>.ant-select-selector]:min-w-[350px] sm:[&>.ant-select>.ant-select-selector]:min-w-[100%] [&>.ant-select>.ant-select-selector>.ant-select-selection-search>.ant-input-affix-wrapper]:rounded-md [&>div>div>span>span]:border-none">
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

      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-[30px] ssm:px-[15px]  pb-[20px]">
        <Row gutter={25}>
          {users.map((user) => {
            return (
              <Col key={user.id} xxl={6} xl={8} sm={12} xs={24} className="mb-[25px]">
                <ContactCard showEditModal={showEditModal} user={user} />
              </Col>
            );
          })}
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
          title="Contact Edit"
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

export default ContactGrid;
