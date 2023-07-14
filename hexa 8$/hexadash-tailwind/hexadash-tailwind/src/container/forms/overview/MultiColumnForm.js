import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

function MultiColumnForm() {
  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Multiple column
        </h1>
      </div>
      <div className="p-[25px]">
        <Form name="multi-form" layout="horizontal">
          <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_f-name">
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item name="sDash_city">
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item name="sDash_company">
                <Input placeholder="Company" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_l-name">
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item name="sDash_country">
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item name="sDash_email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={24}>
              <div className="flex flex-wrap gap-[15px]">
                <Button
                  className="bg-theme-gray-transparent dark:bg-white30 hover:bg-hbr-gray dark:hover:bg-white10 border-none text-theme-gray dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  htmlType="submit"
                  type="light"
                  size="large"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="large"
                >
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export { MultiColumnForm };
