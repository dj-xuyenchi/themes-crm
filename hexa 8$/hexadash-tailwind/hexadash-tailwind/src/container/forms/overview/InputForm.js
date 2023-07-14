/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
// import { HorizontalFormStyleWrap } from './Style';
// import { BasicFormWrapper } from '../../styled';

function InputForm() {
  return (
    <>
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative">
        <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
          <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Basic Cards
          </h1>
        </div>
        <div className="p-[25px]">
          <Form name="input-form" layout="horizontal">
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-text">
                  Text
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-text">
                  <Input placeholder="Duran Clayton" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="email">
                  Email Address
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-email">
                  <Input placeholder="username@email.com" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-url">
                  URL
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-url">
                  <Input placeholder="https://hexadash-react-admin-dashboard-template" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-phone">
                  Phone
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-phone">
                  <Input placeholder="017123456789" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="pass">
                  Password
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-pass">
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-number">
                  Number
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-number">
                  <Input placeholder="123" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-date">
                  Date
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-date">
                  <DatePicker className="w-full h-[48px]" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-month">
                  Month
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-month">
                  <DatePicker className="w-full h-[48px]" picker="month" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-time">
                  Time
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                  <TimePicker className="w-full h-[48px]" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label className="font-medium mb-[24px] block dark:text-white60" htmlFor="input-color">
                  Color
                </label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-color">
                  <div className="sDash_color-picker">
                    <Input className="h-[48px]" type="color" value="#8231D3" />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export { InputForm };
