import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

const { Option } = Select;

function SupportCreate({ visible, onCancel, handleSubmit, editableData }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(editableData);
  }, [form, editableData]);

  const handleOk = (value) => {
    handleSubmit({ ...value, id: editableData.id });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      getContainer={false}
      type="primary"
      title="Create Support"
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form name="supportCreate" onFinish={handleOk}>
            <Form.Item
              className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              name="priority"
              initialValue="high"
              label="Priority"
            >
              <Select className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:h-[50px] [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60">
                <Option value="high">High</Option>
                <Option value="medium">Medium</Option>
                <Option value="low">Low</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              name="status"
              initialValue="open"
              label="Status"
            >
              <Select className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:h-[50px] [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60">
                <Option value="open">Open</Option>
                <Option value="close">Close</Option>
                <Option value="pending">Pending</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md dark:[&>.ant-form-item-row>div>div>div>textarea]:border-white10"
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                type="primary"
                key="submit"
                onClick={() => handleOk}
              >
                Submit Ticket
              </Button>
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

SupportCreate.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  editableData: propTypes.oneOf([propTypes.object, false]),
};

export default SupportCreate;
