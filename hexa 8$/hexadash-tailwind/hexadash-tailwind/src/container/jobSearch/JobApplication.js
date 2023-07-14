import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input, Upload, message } from 'antd';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function JobSearchDetails() {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title={
          <>
            <h4 className="mb-0 font-semibold text-dark dark:text-white87">Job Apply</h4>
            <span className="inline-block mt-[10px] text-[14px] font-medium">
              <Link
                className="flex items-center text-theme-gray hover:text-primary dark:text-white60"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                to="#"
              >
                <UilArrowLeft />
                Go back
              </Link>
            </span>
          </>
        }
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={15}>
          <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={16} xs={24} className="mb-[60px]">
            <div className="py-[40px] sm:pb-[25px] px-[60px] md:px-[40px] sm:px-[30px] xs:px-[15px] bg-white dark:bg-white10 rounded-[10px]">
              <h2 className="text-dark dark:text-white87 text-[30px] sm:text-[26px] sm:leading-[30px] font-semibold mb-[42px]">
                Submit your application
              </h2>
              <div className="mb-25">
                <Form name="hexadash-vertical-form" layout="vertical">
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="name"
                    label="Full Name"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder="e.g. John Smith"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="email"
                    label="Email Address"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder="Enter Email"
                    />
                  </Form.Item>

                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="phone"
                    label="Phone"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder="e.g. +8811111111111"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="about"
                    label="About you"
                  >
                    <Input.TextArea
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark resize-none"
                      placeholder="Tell us about yourself"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="website"
                    label="Website URL (optional)"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder="e.g. www.hexadash.com"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="portfolio"
                    label="Portfolio URL (Optional)"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder="e.g. Portfolio"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="github"
                    label="Github URL (Optional)"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark resize-none"
                      size="large"
                      placeholder="e.g. Github"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="newRole"
                    label="What are you looking for in a new role?"
                  >
                    <Input.TextArea
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark resize-none"
                      placeholder="What can we help with?"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="interested"
                    label="Why are you interested in working with us?"
                  >
                    <Input.TextArea
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark resize-none"
                      placeholder="What can we help with?"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="past"
                    label="What has been your most challenging experience in a past role? "
                  >
                    <Input.TextArea
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark resize-none"
                      placeholder="What can we help with?"
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="salary"
                    label="Salary Expectation"
                  >
                    <Input
                      className="border-r border-regular dark:border-white10 text-[14px] text-dark"
                      size="large"
                      placeholder=""
                    />
                  </Form.Item>
                  <Form.Item
                    className="dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
                    name="file"
                    label="Please upload your CV"
                  >
                    <Upload
                      className="[&>.ant-upload]:w-full [&>.ant-upload]:py-[12px] [&>.ant-upload]:px-[14px] [&>.ant-upload]:border-1 [&>.ant-upload]:border-dotted [&>.ant-upload]:border-normal dark:[&>.ant-upload]:border-white10 [&>.ant-upload]:rounded-6 [&>.ant-upload]:inline-block [&>.ant-upload>.ant-upload>button]:px-[13.75px] [&>.ant-upload>.ant-upload>button]:rounded-[5px] [&>.ant-upload>.ant-upload>button]:text-[14px] [&>.ant-upload>.ant-upload>button]:bg-primary [&>.ant-upload>.ant-upload>button]:border-primary [&>.ant-upload>.ant-upload>button]:flex [&>.ant-upload>.ant-upload>button]:text-white [&>.ant-upload>.ant-upload>button]:h-[34px] [&>.ant-upload>.ant-upload>button]:items-center [&>.ant-upload>.ant-upload>button]:gap-[6px] [&>.ant-upload>.ant-upload>button>svg]:w-[14px]"
                      {...props}
                    >
                      <Button type="secondary" size="small">
                        <UilPaperclip />
                        Browse
                      </Button>
                    </Upload>
                  </Form.Item>

                  <div>
                    <Button
                      htmlType="submit"
                      className="text-[14px] font-medium rounded-6 py-[6.4px] px-[19px] h-[50px] inline-flex items-center justify-center"
                      type="primary"
                      size="large"
                    >
                      Submit Application
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default JobSearchDetails;
