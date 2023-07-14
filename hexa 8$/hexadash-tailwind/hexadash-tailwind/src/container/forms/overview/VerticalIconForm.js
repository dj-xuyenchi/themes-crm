import React from 'react';
import { Form, Input, Button } from 'antd';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';

function VerticalIconForm() {
  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Vertical Form with icons
        </h1>
      </div>
      <div className="p-[25px]">
        <Form name="login" layout="vertical">
          <Form.Item
            className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
            name="name"
            initialValue="Duran Clayton"
            label="Name"
          >
            <Input prefix={<UilUser />} />
          </Form.Item>
          <Form.Item
            className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
            name="email"
            initialValue="username@email.com"
            label="Email Address"
          >
            <Input prefix={<UilEnvelope />} placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
            name="password"
            initialValue="1234567"
            label="Password"
          >
            <Input.Password prefix={<UilLock />} />
          </Form.Item>
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
        </Form>
      </div>
    </div>
  );
}

export { VerticalIconForm };
