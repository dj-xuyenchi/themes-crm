import React, { useEffect } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { HorizontalFormStyleWrap } from './Style';
import Prism from "prismjs";
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const HorizontalForm = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <Cards title="Horizontal Form">
          <Form name="horizontal-form" layout="horizontal">
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="name" initialValue="Duran Clayton">
                  <Input placeholder="Enter Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="email">Email Address</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="email" initialValue="username@email.com">
                  <Input placeholder="Enter Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="password">Password</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="password" initialValue="1234567">
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 16, offset: 8 }} md={{ span: 15, offset: 9 }} xs={{ span: 24, offset: 0 }}>
                <div className="ninjadash-form-action">
                  <Button className="btn-signin" htmlType="submit" type="light" size="large">
                    Cancel
                  </Button>
                  <Button className="btn-signin" type="primary" size="large">
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

const HorizontalForm = () => {
  return (
    <Form name="horizontal-form" layout="horizontal">
      <Row align="middle">
        <Col lg={8} md={9} xs={24}>
          <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="name">
            Name
          </label>
        </Col>
        <Col lg={16} md={15} xs={24}>
          <Form.Item name="name" initialValue="Duran Clayton">
            <Input placeholder="Enter Name" />
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
          <Form.Item name="email" initialValue="username@email.com">
            <Input placeholder="Enter Email" />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle">
        <Col lg={8} md={9} xs={24}>
          <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="password">
            Password
          </label>
        </Col>
        <Col lg={16} md={15} xs={24}>
          <Form.Item
            className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
            name="password"
            initialValue="1234567"
          >
            <Input.Password placeholder="Enter Password" />
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
  );
};
export { HorizontalForm };
`
}
                            </code>
                        </pre>
                    </div>
        </Cards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { HorizontalForm };
