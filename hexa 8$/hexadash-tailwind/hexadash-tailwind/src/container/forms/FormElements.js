/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Row, Col, Form, Input, Select, Upload, message, Radio, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { GridForm } from './overview/GridForm';
import { SizedForm } from './overview/SizedForm';
import { InputForm } from './overview/InputForm';

import { PageHeader } from '../../components/page-headers/page-headers';

const { Option } = Select;
const { TextArea } = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function FormElements() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Elements',
    },
  ];
  function onChange() {}
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Form Elements"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xs={24} className="mb-[25px]">
            <GridForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <SizedForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Text input
                </h1>
              </div>
              <div className="p-[25px]">
                <Form name="hexadash-textarea" layout="vertical">
                  <Form.Item name="basic-textarea" label="Basic Textarea">
                    <TextArea />
                  </Form.Item>
                  <Form.Item name="unresizable-textarea" label="Unresizable Textarea">
                    <TextArea className="hexadash-unresizable" />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <InputForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Select
                </h1>
              </div>
              <div className="p-[25px]">
                <Form name="hexadash-select" layout="vertical">
                  <Form.Item name="basic-select" label="Basic Select">
                    <Select
                      size="large"
                      className="[&>div]:px-[20px] [&>div]:bg-white dark:[&>div]:bg-white10 [&>div]:h-[50px] [&>div]:border-normal dark:[&>div]:border-white10 [&>div]:leading-[48px] [&>div]:rounded-6 [&>div>.ant-select-selection-item]:leading-[48px]"
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="disabled-select" label="Disabled Basic Select">
                    <Select
                      size="large"
                      className="[&>div]:px-[20px] [&>div]:bg-regular dark:[&>div]:bg-white10 [&>div]:h-[50px] [&>div]:border-normal dark:[&>div]:border-white10 [&>div]:leading-[48px] [&>div]:rounded-6 [&>div>.ant-select-selection-item]:leading-[48px]"
                      disabled
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="multi-select" initialValue={['1', '2']} label="Multiple Select">
                    <Select
                      size="large"
                      mode="multiple"
                      className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div>div>div>span]:h-[26px] [&>div>div>div>span]:items-center"
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="disabled-multi-select" initialValue={['1', '2']} label="Disabled Multiple Select">
                    <Select
                      size="large"
                      mode="multiple"
                      className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div>div>div>span]:h-[26px] [&>div>div>div>span]:items-center [&>div]:!bg-white10"
                      disabled
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  File Browser
                </h1>
              </div>
              <div className="p-[25px]">
                <Form name="hexadash-upload" layout="vertical">
                  <Upload
                    className="hexadash-upload-basic [&>.ant-upload-select-text]:border-normal dark:[&>.ant-upload-select-text]:border-white10 [&>.ant-upload-select-text]:border-1 [&>.ant-upload-select-text]:rounded-4 [&>.ant-upload-select-text]:w-full [&>.ant-upload-select-text>.ant-upload]:flex [&>.ant-upload-select-text>.ant-upload]:items-center [&>.ant-upload-select-text>.ant-upload]:justify-between [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-text]:text-theme-gray dark:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-text]:text-white60 [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-text]:text-[14px] ltr:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-text]:pl-[15px] rtl:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-text]:pr-[15px] [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:border-normal dark:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:border-white10 ltr:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:border-l-1 rtl:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:border-r-1 [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:text-theme-gray dark:[&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:text-white60 [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:inline [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:text-[14px] [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:py-[14px] [&>.ant-upload-select-text>.ant-upload>.hexadash-upload-browse]:px-[23px]"
                    {...props}
                  >
                    <span className="hexadash-upload-text">Select File</span>
                    <Link to="#" className="hexadash-upload-browse">
                      Browse
                    </Link>
                  </Upload>
                </Form>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Checkbox And Radios
                </h1>
              </div>
              <div className="hexadash-check-list-wrap p-[25px]">
                <ul className="hexadash-check-list hexadash-check-list--left">
                  <li>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                  </li>
                  <li>
                    <Checkbox onChange={onChange} checked>
                      Checked
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox onChange={onChange} disabled>
                      Disabled Unchecked
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox onChange={onChange} checked disabled>
                      Disabled Checked
                    </Checkbox>
                  </li>
                </ul>
                <ul className="hexadash-check-list hexadash-check-list--right">
                  <li>
                    <Radio>Uncheck</Radio>
                  </li>
                  <li>
                    <Radio checked>Checked</Radio>
                  </li>
                  <li>
                    <Radio disabled>Disabled Unchecked</Radio>
                  </li>
                  <li>
                    <Radio checked disabled>
                      Disabled Checked
                    </Radio>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default FormElements;
