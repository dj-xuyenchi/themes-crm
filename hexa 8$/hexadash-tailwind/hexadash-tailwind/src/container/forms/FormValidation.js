/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

import { PageHeader } from '../../components/page-headers/page-headers';

function FormValidation() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Validation',
    },
  ];
  const validateMessages = {
    types: {
      city: '',
      state: '',
      zip: '',
      checkbox: '',
    },
  };
  function onChange() {}
  const [form] = Form.useForm();
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Form Validation"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Custom Styles
                </h1>
              </div>
              <div className="p-[25px]">
                <Form name="sDash_validation-form" form={form} layout="vertical" validateMessages={validateMessages}>
                  <Row gutter={30}>
                    <Col md={8} xs={24}>
                      <Form.Item
                        className="mb-[20px]"
                        name="f-name"
                        label="First Name"
                        rules={[{ required: true, message: 'First Name required!' }]}
                      >
                        <Input className="rounded-6" placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col md={8} xs={24}>
                      <Form.Item
                        className="mb-[20px]"
                        name="l-name"
                        label="Last Name"
                        rules={[{ required: true, message: 'Last Name required!' }]}
                      >
                        <Input className="rounded-6" placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col md={8} xs={24}>
                      <Form.Item
                        className="mb-[20px]"
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: 'Username required!' }]}
                      >
                        <Input className="rounded-6" placeholder="Username" />
                      </Form.Item>
                    </Col>
                    <Col md={12} xs={24}>
                      <Form.Item className="mb-[20px]" name="city" label="City" rules={[{ type: 'city' }]}>
                        <Input className="rounded-6" placeholder="City" />
                      </Form.Item>
                    </Col>
                    <Col md={6} xs={24}>
                      <Form.Item className="mb-[20px]" name="state" label="State" rules={[{ type: 'state' }]}>
                        <Input className="rounded-6" placeholder="State" />
                      </Form.Item>
                    </Col>
                    <Col md={6} xs={24}>
                      <Form.Item className="mb-[20px]" name="zip-code" label="Zip" rules={[{ type: 'zip' }]}>
                        <Input className="rounded-6" placeholder="Zip" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="sDash_agree-check">
                    <Form.Item className="mb-[20px]" rules={[{ type: 'checkbox' }]}>
                      <Checkbox onChange={onChange}>Agree to terms and conditions</Checkbox>
                    </Form.Item>
                  </div>
                  <div className="hexadash-form-action mt-[20px]">
                    <Button
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[30px] h-[44px]"
                      htmlType="submit"
                      type="primary"
                      size="large"
                    >
                      Submit Form
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>

          <Col xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Server Side
                </h1>
              </div>
              <div className="p-[25px]">
                <Form name="hexadash-vertical-form" layout="vertical">
                  <Row gutter={30}>
                    <Col md={8} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-success]:border-success [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-success]:text-success [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-success]:mt-[5px]"
                        name="f-name2"
                        label="First Name"
                        initialValue="Duran"
                        validateStatus="success"
                        help="Looks good!"
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col md={8} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-success]:border-success [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-success]:text-success [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-success]:mt-[5px]"
                        name="l-name2"
                        label="Last Name"
                        initialValue="Clayton"
                        validateStatus="success"
                        help="Looks good!"
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col md={8} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-error]:border-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:text-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:mt-[5px]"
                        name="username2"
                        label="Username"
                        validateStatus="error"
                      >
                        <Input placeholder="Username" />
                      </Form.Item>
                    </Col>
                    <Col md={12} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-error]:border-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:text-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:mt-[5px]"
                        name="city2"
                        label="City"
                        help="Please provide a valid city."
                        validateStatus="error"
                      >
                        <Input placeholder="City" />
                      </Form.Item>
                    </Col>
                    <Col md={6} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-error]:border-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:text-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:mt-[5px]"
                        name="state2"
                        label="State"
                        help="Please provide a valid state."
                        validateStatus="error"
                      >
                        <Input placeholder="State" />
                      </Form.Item>
                    </Col>
                    <Col md={6} xs={24} className="mb-[20px]">
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-error]:border-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:text-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:mt-[5px]"
                        name="zip-code2"
                        label="Zip"
                        help="Please provide a valid zip."
                        validateStatus="error"
                      >
                        <Input placeholder="Zip" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="sDash_agree-check mb-[20px]">
                    <Form.Item help="You must agree before submitting." validateStatus="error">
                      <Checkbox
                        className="text-danger [&>.ant-checkbox>.ant-checkbox-inner]:border-danger [&>.ant-checkbox>.ant-checkbox-inner]:bg-danger/50 after:[&>.ant-checkbox.ant-checkbox-checked>.ant-checkbox-inner]:border-danger"
                        onChange={onChange}
                      >
                        Agree to terms and conditions
                      </Checkbox>
                    </Form.Item>
                  </div>
                  <Row>
                    <Col xs={24}>
                      <Form.Item
                        className="[&>div>.ant-form-item-control>.ant-form-item-control-input>div>.ant-input-status-error]:border-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:text-danger [&>div>.ant-form-item-control>.ant-form-item-control-input+div>div>.ant-form-item-explain-error]:mb-[5px]"
                        name="password"
                        validateStatus="error"
                      >
                        <Input placeholder="Password" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="hexadash-form-action">
                    <Button
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[30px] h-[44px]"
                      type="primary"
                      size="large"
                    >
                      Submit Form
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default FormValidation;
