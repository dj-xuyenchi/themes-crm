import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import { KnowledgebaseTopWrap } from '../../../../styled';

function KnowledgeBaseTop() {
  return (
    <KnowledgebaseTopWrap>
      <div className="bg-white dark:bg-white10 p-16 sm:p-[30px] ssm:p-[15px] rounded-10 text-center shadow-[0_5px_20px_rgba(116,116,116,0.06)] dark:shadow-none">
        <h2 className="mb-7 sm:mb-0 text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
          Hi, How can we help?
        </h2>
        <div className="custom-knowledgebadge-search-form">
          <Form name="login" layout="vertical">
            <div className="max-w-[690px] flex items-end justify-center sm:flex-wrap sm:gap-[14px] sm:px-[15px] sm:py-[25px] bg-white dark:bg-white10 mx-auto rounded-6 shadow-[0_10px_10px_rgba(116,116,116,0.06)] sm:text-start">
              <Form.Item className="mb-0 sm:w-full">
                <Select defaultValue="All Products">
                  <Select.Option value="email">Email</Select.Option>
                  <Select.Option value="message">Message</Select.Option>
                  <Select.Option value="event">Event</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="w-full mb-0">
                <Input
                  placeholder="Search anything"
                  className="border-[0px] rounded-none shadow-none sm:border sm:border-normal sm:dark:border-white10 sm:rounded-[6px]"
                />
              </Form.Item>
              <Form.Item className="mb-0 sm:w-full">
                <Button
                  className="h-[54px] sm:w-full text-15 px-7 py-1.5 rounded-none ltr:rounded-tr-[6px] ltr:rounded-br-[6px] rtl:rounded-tl-[6px] sm:rounded-[6px] rtl:rounded-bl-[6px]"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  Search
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="mt-5">
          <ul className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5">
            <li>
              <span className="text-sm text-dark dark:text-white87">Popular topics:</span>
            </li>
            <li>
              <Link to="#" className="text-[#868eae] dark:text-white60 hover:text-dark hover:underline text-sm">
                Message formatting
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#868eae] dark:text-white60 hover:text-dark hover:underline text-sm">
                Notifications
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#868eae] dark:text-white60 hover:text-dark hover:underline text-sm">
                Change password
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </KnowledgebaseTopWrap>
  );
}

export default KnowledgeBaseTop;
