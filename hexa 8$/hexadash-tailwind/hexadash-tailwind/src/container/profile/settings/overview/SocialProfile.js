import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Button } from '../../../../components/buttons/buttons';
import Heading from '../../../../components/heading/heading';
import { GlobalUtilityStyle } from '../../../styled';

function SocialProfile() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: null,
  });

  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
      <div className="py-[18px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <Heading as="h4" className="mb-0 text-lg font-medium">
          Social Profiles
        </Heading>
        <span className="mb-0.5 text-light dark:text-white60 text-13 font-normal">
          Add elsewhere links to your profile
        </span>
      </div>
      <div className="p-[25px] pt-4">
        <GlobalUtilityStyle>
          <Row justify="center">
            <Col xxl={12} sm={16} xs={24}>
              <Form name="social" onFinish={handleSubmit}>
                <Form.Item name="facebook" label="Facebook" className="mb-4 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal dark:border-white10 shadow-none"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-facebook h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="facebook"
                      />
                    }
                    placeholder="URL"
                  />
                </Form.Item>
                <Form.Item name="twitter" label="Twitter" className="mb-4 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal shadow-none dark:border-white10"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-twitter h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="twitter"
                      />
                    }
                    placeholder="@username"
                  />
                </Form.Item>
                <Form.Item name="dribbble" label="Dribbble" className="mb-4 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal shadow-none dark:border-white10"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-dribbble h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="dribbble"
                      />
                    }
                    placeholder="URL"
                  />
                </Form.Item>
                <Form.Item name="instagram" label="Instagram" className="mb-4 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal shadow-none dark:border-white10"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-instagram h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="instagram"
                      />
                    }
                    placeholder="URL"
                  />
                </Form.Item>
                <Form.Item name="github" label="GitHub" className="mb-4 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal shadow-none dark:border-white10"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-github h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="github"
                      />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item name="Medium" label="Medium" className="mb-0 form-label-w-full form-label-text-start">
                  <Input
                    className="ltr:pl-[45px] rtl:pr-[45px] text-body placeholder:text-body dark:text-white60 font-normal border border-normal shadow-none dark:border-white10"
                    prefix={
                      <FontAwesome
                        className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-medium h-full w-11 text-[18px] text-white dark:text-white87 rounded"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        name="medium"
                      />
                    }
                    placeholder="Url"
                  />
                </Form.Item>
                <div className="mt-[48px] mb-[30px] flex items-center flex-wrap gap-[15px]">
                  <Button size="default" htmlType="submit" type="primary" className="px-5 h-11">
                    Update Social Profile
                  </Button>
                  <Button
                    size="default"
                    onClick={handleCancel}
                    type="light"
                    className="px-5 bg-transparent h-11 dark:text-white87 dark:border-white10 dark:hover:text-primary dark:hover:border-primary"
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </div>
  );
}

export default SocialProfile;
