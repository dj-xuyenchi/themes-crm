import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

function CreateProject({ visible, onCancel }) {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    checked: [],
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handleOk = () => {
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  const options = [
    {
      label: 'Privet',
      value: 'privet',
    },
    {
      label: 'Team',
      value: 'team',
    },
    {
      label: 'Public',
      value: 'public',
    },
  ];

  return (
    <Modal
      className="update"
      type={state.modalType}
      title="Create Project"
      visible={state.visible}
      footer={[
        <div key="1" className="flex items-center flex-wrap gap-[10px] pt-[10px] px-[14px] pb-3 text-start">
          <Button
            size="default"
            type="primary"
            key="submit"
            className="px-5 font-medium h-11 dark:bg-primary"
            onClick={handleOk}
          >
            Add New Project
          </Button>
          <Button
            size="default"
            type="white"
            key="back"
            className="m-0 px-5 font-medium h-11 dark:text-white87 dark:bg-white10 dark:border-white10"
            outlined
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="px-1.5">
        <Form form={form} name="createProject" onFinish={handleOk}>
          <Form.Item
            name="project"
            label=""
            className="mb-[26px] [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
          >
            <Input placeholder="Project Name" />
          </Form.Item>
          <Form.Item name="category" initialValue="" label="">
            <Select
              className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:h-[50px] [&>div]:rounded-md [&>.ant-select-arrow]:text-theme-gray [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center [&>div>.ant-select-selection-item]:text-[#bfbfbf] dark:[&>div>.ant-select-selection-item]:text-white60 "
              style={{ width: '100%' }}
            >
              <Option value="">Project Category</Option>
              <Option value="one">Project One</Option>
              <Option value="two">Project Two</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label=""
            className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md dark:[&>.ant-form-item-row>div>div>div>textarea]:border-white10"
          >
            <Input.TextArea rows={4} placeholder="Project Description" />
          </Form.Item>
          <Form.Item
            name="pricacy"
            initialValue={['team']}
            label="Project Privacy"
            className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
          >
            <CheckboxGroup options={options} />
          </Form.Item>
          <Form.Item
            name="members"
            label="Project Members"
            className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87"
          >
            <Input placeholder="Search Members" />
          </Form.Item>
          <div className="flex items-center flex-wrap gap-3 mb-[30px]">
            <img
              className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
              src={require(`../../../static/img/users/1.png`)}
              alt=""
            />
            <img
              className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
              src={require(`../../../static/img/users/2.png`)}
              alt=""
            />
            <img
              className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
              src={require(`../../../static/img/users/3.png`)}
              alt=""
            />
            <img
              className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
              src={require(`../../../static/img/users/4.png`)}
              alt=""
            />
            <img
              className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
              src={require(`../../../static/img/users/5.png`)}
              alt=""
            />
          </div>
          <Row gutter={15}>
            <Col md={12} xs={24}>
              <Form.Item
                name="start"
                label="Start Date"
                className="mb-1.5 [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>.ant-form-item-row>div>div>div>.ant-picker]:w-full"
              >
                <DatePicker
                  className="dark:bg-white10 dark:border-white10 dark:[&>div>.ant-picker-suffix]:text-white60"
                  placeholder="mm/dd/yyyy"
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                name="end"
                label="End Date"
                className="mb-1.5 [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>.ant-form-item-row>div>div>div>.ant-picker]:w-full"
              >
                <DatePicker
                  className="dark:bg-white10 dark:border-white10 dark:[&>div>.ant-picker-suffix]:text-white60"
                  placeholder="mm/dd/yyyy"
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
}

CreateProject.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateProject;
