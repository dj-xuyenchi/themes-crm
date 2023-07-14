import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Button } from '../../../../components/buttons/buttons';
import Heading from '../../../../components/heading/heading';
import { GlobalUtilityStyle } from '../../../styled';

function Account() {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    name: 'clayton',
    values: null,
  });

  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  const handleChange = (e) => {
    setState({
      name: e.target.value,
    });
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
      <div className="py-[18px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <Heading as="h4" className="mb-0 text-lg font-medium">
          Account Settings
        </Heading>
        <span className="mb-0.5 text-light dark:text-white60 text-13 font-normal">
          Update your username and manage your account
        </span>
      </div>
      <div className="p-[25px] pb-[55px]">
        <GlobalUtilityStyle>
          <Row>
            <Col xs={24}>
              <Form form={form} name="editAccount" onFinish={handleSubmit}>
                <div className="mb-[26px] pb-[30px] border-b border-regular dark:border-white10">
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div>
                        <Form.Item
                          name="username"
                          initialValue={state.name}
                          label="Username"
                          className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold"
                        >
                          <Input onChange={handleChange} className="text-body dark:text-white60" />
                        </Form.Item>
                        <p className="mb-[14px] text-light dark:text-white60">
                          Your Dashboard URL: http://dashboard.com/
                          <span className="text-dark dark:text-white87">{state.name}</span>
                        </p>
                        <Form.Item
                          name="email"
                          initialValue="contact@example.com"
                          rules={[{ type: 'email' }]}
                          label="Email"
                          className="mb-0 [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold"
                        >
                          <Input className="text-body dark:text-white60" />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="account-form-bottom">
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div className="flex items-center flex-wrap justify-between gap-[15px]">
                        <div>
                          <Heading className="text-base font-semibold text-dark dark:text-white87" as="h4">
                            Close Account
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">Delete Your Account and Account data</p>
                        </div>
                        <div className="">
                          <Button size="default" type="danger" className="h-[38px] px-4 text-sm font-semibold">
                            Close Account
                          </Button>
                        </div>
                      </div>
                      <div className="pt-[48px]">
                        <Button
                          size="default"
                          htmlType="submit"
                          type="primary"
                          className="h-[44px] px-5 text-sm font-semibold"
                        >
                          Save Change
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                          size="default"
                          onClick={handleCancel}
                          type="light"
                          className="h-[44px] px-5 text-sm font-semibold bg-transparent dark:text-white87 dark:border-white10 dark:hover:text-primary dark:hover:border-primary"
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </div>
  );
}

export default Account;
