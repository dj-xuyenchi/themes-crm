import React from 'react';
import { Form, Input, Select, Button } from 'antd';

function AllArticleTop() {
  return (
    <div className="">
      <div className="">
        <Form name="login" layout="vertical">
          <div className="">
            <Form.Item>
              <Select defaultValue="All Products">
                <Select.Option value="email">Email</Select.Option>
                <Select.Option value="message">Message</Select.Option>
                <Select.Option value="event">Event</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item className="">
              <Input placeholder="Search anything" />
            </Form.Item>
            <Form.Item>
              <Button className="" htmlType="submit" type="primary" size="large">
                Search
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AllArticleTop;
