import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { GlobalUtilityStyle } from '../../../styled';
import Heading from '../../../../components/heading/heading';

function Password() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: null,
  });

  const handleSubmit = (values) => {
    setState({ ...state, values });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
      <div className="py-[18px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <Heading as="h4" className="mb-0 text-lg font-medium">
          Password Settings
        </Heading>
        <span className="mb-0.5 text-light dark:text-white60 text-13 font-normal">
          Change or reset your account password
        </span>
      </div>
      <div className="p-[25px]">
        <GlobalUtilityStyle>
          <Row justify="center">
            <Col xxl={12} sm={16} xs={24}>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item name="old" label="Old Password" className="mb-4 form-label-w-full form-label-text-start">
                  <Input />
                </Form.Item>
                <Form.Item name="new" label="New Password" className="mb-0 form-label-w-full form-label-text-start">
                  <Input.Password />
                </Form.Item>
                <p className="mb-0 text-light dark:text-white60 text-[13px]">Minimum 6 characters</p>
                <Form.Item className="mb-7">
                  <div className="flex items-center flex-wrap gap-[15px] mt-11">
                    <Button htmlType="submit" type="primary" className="h-11 px-[20px]">
                      Change Password
                    </Button>
                    <Button
                      size="default"
                      onClick={handleCancel}
                      type="light"
                      className="h-11 px-[20px] bg-transparent dark:text-white87 dark:border-white10 dark:hover:text-primary dark:hover:border-primary"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </div>
  );
}

export default Password;
