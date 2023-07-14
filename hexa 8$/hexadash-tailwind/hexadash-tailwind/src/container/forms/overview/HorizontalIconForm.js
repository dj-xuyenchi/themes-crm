/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';

function HorizontalIconForm() {
  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Horizontal Form with icon
        </h1>
      </div>
      <div className="p-[25px]">
        <Form name="horizontal-icon-from" layout="horizontal">
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="name">
                Name
              </label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item
                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>span]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>svg]:text-white60"
                name="name"
                initialValue="Duran Clayton"
              >
                <Input prefix={<UilUser />} placeholder="Enter Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="email">
                Email Address
              </label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item
                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>svg]:text-white60"
                name="email"
                initialValue="username@email.com"
              >
                <Input prefix={<UilEnvelope />} placeholder="Enter Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label className="dark:text-white60" htmlFor="password">
                Password
              </label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item
                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
                name="password"
                initialValue="1234567"
              >
                <Input.Password prefix={<UilLock />} placeholder="Enter Password" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 16, offset: 8 }} md={{ span: 15, offset: 9 }} xs={{ span: 24, offset: 0 }}>
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

export { HorizontalIconForm };
