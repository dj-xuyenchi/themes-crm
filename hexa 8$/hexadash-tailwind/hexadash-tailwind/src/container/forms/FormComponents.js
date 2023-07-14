import React, { useState } from 'react';
import { Row, Col, Form, Input, Switch, DatePicker, Upload, message } from 'antd';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';
import UilCreditCard from '@iconscout/react-unicons/icons/uil-credit-card';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import RichTextEditor from 'react-rte';
import propTypes from 'prop-types';
import { FormComponentsWrap } from '../styled';

import { Slider } from '../../components/slider/slider';
import { Tag } from '../../components/tags/tags';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';

const { RangePicker } = DatePicker;
const { Dragger } = Upload;
function FormLayout({ onChange }) {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Components',
    },
  ];
  const [state, setState] = useState({
    onChangeValue: null,
    value: RichTextEditor.createEmptyValue(),
  });

  const onSliderChange = (value) => {
    setState({ ...state, onChangeValue: value });
  };

  const onTextInput = (value) => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };
  const log = () => {
    // console.log(e);
  };
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Form Components"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <FormComponentsWrap>
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Input Groups
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Form name="hexadash_textarea" layout="vertical">
                    <Row gutter="30">
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-name">
                          <Input
                            className="[&>span>svg]:w-[20px] [&>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>span>svg]:h-[20px] [&>span>svg]:text-light"
                            prefix={<UilUser />}
                            placeholder="Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-email">
                          <Input
                            className="[&>span>svg]:w-[20px] [&>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>span>svg]:h-[20px] [&>span>svg]:text-light"
                            prefix={<UilEnvelope />}
                            placeholder="Email"
                          />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-location">
                          <Input
                            className="[&>span>svg]:w-[20px] [&>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>span>svg]:h-[20px] [&>span>svg]:text-light"
                            prefix={<UilMapMarker />}
                            placeholder="Location"
                          />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item
                          className="[&>div>div>div>div>span>span>svg]:w-[20px] [&>div>div>div>div>span>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>div>div>div>div>span>span>svg]:h-[20px] [&>div>div>div>div>span>span>svg]:text-light [&>div>div>div>div>span>span>span>svg]:text-light-extra"
                          name="input-password"
                        >
                          <Input.Password prefix={<UilLock />} placeholder="Password" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-payment">
                          <Input
                            className="[&>span>svg]:w-[20px] [&>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>span>svg]:h-[20px] [&>span>svg]:text-light"
                            prefix={<UilCreditCard />}
                            placeholder="Payment Method"
                          />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-phone">
                          <Input
                            className="[&>span>svg]:w-[20px] [&>.ant-input-prefix]:ltr:mr-[15px] rtl:ml-[15px] [&>span>svg]:h-[20px] [&>span>svg]:text-light"
                            prefix={<UilPhone />}
                            placeholder="Phone"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Dropdowns
                  </h1>
                </div>
                <div className="p-[25px] gap-[10px] flex flex-wrap">
                  <Dropdown placement="bottomLeft">
                    <Button
                      className="text-start text-[14px] dark:bg-white10 text-theme-gray dark:text-white60 btn-outlined h-[50px] w-full border-normal dark:border-white10 px-[19px] rounded-[5px]"
                      size="large"
                      outlined
                      type="light"
                    >
                      Alerts
                    </Button>
                  </Dropdown>
                  <Dropdown placement="bottomLeft">
                    <Button
                      className="text-start text-[14px] dark:bg-white10 text-theme-gray dark:text-white60 btn-outlined h-[50px] w-full border-normal dark:border-white10 px-[19px] rounded-[5px]"
                      size="large"
                      outlined
                      type="light"
                    >
                      Select an option...
                    </Button>
                  </Dropdown>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    DatePicker
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Form name="datepicker-form" layout="vertical">
                    <Form.Item name="datePicker" label="Datepicker">
                      <DatePicker className="border-normal dark:border-white10 h-[50px] min-w-[250px]" />
                    </Form.Item>
                    <Form.Item name="rangePicker" label="Date Range Picker">
                      <RangePicker className="border-normal dark:border-white10 h-[50px]" />
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Text Editor
                  </h1>
                </div>
                <div className="p-[25px] [&>div]:border-transparent dark:[&>div]:bg-[#323440] dark:[&>div>div:first-child]:border-white10 [&>div>div>div>div>button]:bg-transparent [&>div>div>div>div>button]:border-none  [&>div>div>div>div>button]:bg-gradient-to-r [&>div>div>div>div>button]:from-transparent [&>div>div>div>div>button]:to-transparent [&>div>div>div>span>select]:bg-white dark:[&>div>div>div>span>select]:bg-white10">
                  <RichTextEditor
                    className="3xl:[&>div+div]:h-[150px] 3xl:[&>div]:p-0 3xl:[&>div]:m-0 [&>div>div>div>button>span]:w-[18px] [&>div>div>div>button>span]:h-[18px]"
                    placeholder="Type your message..."
                    value={state.value}
                    onChange={onTextInput}
                  />
                </div>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Tags
                  </h1>
                </div>
                <div className=" p-[25px] [&>.ant-tag]:inline-flex [&>.ant-tag]:items-center">
                  <Tag>Unremovable</Tag>
                  <Tag closable onClose={log}>
                    Tag 2
                  </Tag>
                  <Tag closable onClose={log}>
                    Tag 3
                  </Tag>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Toggle Buttons
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Switch defaultChecked size="large" />
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Sliders
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Slider onChange={onSliderChange} defaultValue={30} />
                  <Slider onChange={onSliderChange} range defaultValues={[20, 50]} />
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px]">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Dropzone
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Dragger
                    {...props}
                    className="min-h-[190px] flex items-center mb-[25px] rounded-10 text-light-extra dark:text-white60"
                  >
                    <p className="ant-upload-text">Drop files here to upload</p>
                  </Dragger>
                  <Dragger
                    {...props}
                    className="min-h-[110px] flex items-center rounded-10 text-light-extra dark:text-white60"
                  >
                    <p className="ant-upload-text">Drop files here to upload</p>
                  </Dragger>
                </div>
              </div>
            </Col>
          </Row>
        </FormComponentsWrap>
      </main>
    </>
  );
}
FormLayout.propTypes = {
  onChange: propTypes.func,
};
export default FormLayout;
