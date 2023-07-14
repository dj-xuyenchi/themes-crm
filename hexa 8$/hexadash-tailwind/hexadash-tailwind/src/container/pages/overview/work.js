import React, { useState } from 'react';
import { Row, Col, Form, Input, DatePicker, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const dateFormat = 'MM/DD/YYYY';

function Work() {
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
        <div className="user-work-form">
          <Form style={{ width: '100%' }} form={form} name="work" onFinish={handleSubmit}>
            <Heading className=" text-[18px] font-medium mb-[36px] text-dark dark:text-white87" as="h4">
              Work Information
            </Heading>

            <Form.Item
              className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
              name="company"
              label="Company Name"
            >
              <Input className="rounded-6" placeholder="Company Name" />
            </Form.Item>

            <Form.Item
              className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
              name="department"
              label="Department"
            >
              <Input className="rounded-6" placeholder="Department name" />
            </Form.Item>

            <Form.Item
              className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
              name="designation"
              label="Designation"
            >
              <Input className="rounded-6" placeholder="Designation" />
            </Form.Item>

            <Form.Item
              className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
              name="hiringDate"
              rules={[{ type: 'object', whitespace: true }]}
              label="Hiring Date"
            >
              <DatePicker
                className="rounded-6 h-[50px] border-normal dark:border-white10"
                format={dateFormat}
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>div]:flex-col text-dark dark:text-white87 font-medium [&>div>div>label]:!text-dark dark:[&>div>div>label]:!text-white87"
              name="status"
              initialValue="active"
              label="Status"
            >
              <Radio.Group>
                <Radio value="active">Active</Radio>
                <Radio value="deactivated">Deactivated</Radio>
                <Radio value="blocked">Blocked</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <div className="flex items-center min-md:justify-end justify-center mt-[15px]">
                <Button
                  className="bg-regularBG dark:bg-regularBGdark h-[38px] ltr:mr-[20px] rtl:ml-[20px] px-[22px] text-[15px] text-body dark:text-white60 hover:text-light font-normal border-regular dark:border-white10"
                  type="default"
                  onClick={() => {
                    return form.resetFields();
                  }}
                >
                  Reset
                </Button>
                <Button
                  htmlType="submit"
                  type="primary"
                  className="bg-primary hover:bg-primary-hover h-[38px] px-[22px] text-[15px] text-white dark:text-white87 font-normal border-primary"
                >
                  <Link to="/admin/users/add-user/social">Next</Link>
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Work;
