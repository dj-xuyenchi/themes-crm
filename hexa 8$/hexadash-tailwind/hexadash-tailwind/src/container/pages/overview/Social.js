import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';

function SocialProfile() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: '',
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <Form form={form} name="editAccount" onFinish={handleSubmit}>
          <Heading className=" text-[18px] font-medium mb-[36px] text-dark dark:text-white87" as="h4">
            Social Profiles
          </Heading>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="facebook"
            label="Facebook"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-facebook text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="facebook" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="twitter"
            label="Twitter"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-twitter text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="twitter" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="linkedin"
            label="Linkedin"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-linkedin text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="linkedin" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="instagram"
            label="Instagram"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-instagram text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="instagram" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="github"
            label="GitHub"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-github text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="github" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>
          <Form.Item
            className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
            name="youtube"
            label="Youtube"
          >
            <Input
              className="rounded-6 h-[44px] flex items-center px-0 [&>span]:w-[44px] [&>span]:h-[44px] [&>span]:rounded-6 [&>span]:relative [&>span]:left-[-11px] gap-[8px] [&>.ant-input-prefix]:m-0"
              prefix={
                <span className="bg-youtube text-white w-full h-full flex items-center justify-center rounded-6">
                  <FontAwesome name="youtube" />
                </span>
              }
              placeholder="URL"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center min-md:justify-end justify-center mt-[15px]">
              <Button
                className="bg-regularBG dark:bg-regularBGdark h-[38px] ltr:mr-[20px] rtl:ml-[20px] px-[22px] text-[15px] text-body dark:text-white60 hover:text-light font-normal border-regular dark:border-white10"
                type="default"
                htmlType="submit"
              >
                <Link to="/admin/users/add-user/work">Back</Link>
              </Button>
              <Button
                className="bg-primary hover:bg-primary-hover h-[38px] px-[22px] text-[15px] text-white dark:text-white87 font-normal border-primary"
                onClick={handleSubmit}
                type="primary"
              >
                Save Profile
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default SocialProfile;
