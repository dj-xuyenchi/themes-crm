import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload, Spin } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { axiosDataSubmit, axiosFileUploder, axiosFileClear } from '../../../redux/crud/axios/actionCreator';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
function AddNew() {
  const dispatch = useDispatch();
  const { isLoading, url, isFileLoading } = useSelector((state) => {
    return {
      isLoading: state.AxiosCrud.loading,
      url: state.AxiosCrud.url,
      isFileLoading: state.AxiosCrud.fileLoading,
    };
  });
  const { pathname } = useLocation();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    join: '',
  });

  useEffect(() => {
    dispatch(axiosFileClear());
  }, [pathname, dispatch]);

  const handleSubmit = (values) => {
    dispatch(
      axiosDataSubmit({
        ...values,
        image: url,
        join: state.join,
        id: new Date().getTime(),
      }),
    );
    form.resetFields();
    dispatch(axiosFileClear());
  };

  const onChange = (date, dateString) => {
    setState({ join: dateString });
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: false,
    showUploadList: false,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        dispatch(axiosFileUploder(info.file.originFileObj));
      }
      if (info.file.status === 'done') {
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 py-[25px] bg-transparent [&>div>div]:flex [&>div>div]:items-center gap-[12px] [&>div]:flex [&>div]:flex-wrap [&>div]:items-center [&>div]:justify-between [&>div]:w-full [&>div]:gap-[10px] [&>div>.ant-page-header-heading-left]:m-0 [&>div>.ant-page-header-heading-left]:gap-[12px] ant-page-header-ghost"
        buttons={[
          <Button
            className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
            size="default"
            key="1"
            type="primary"
          >
            <Link to="/admin/axios/crud/axios-view">View All</Link>
          </Button>,
        ]}
        ghost
        title="Add New"
      />
      <main className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={15}>
          <Col xs={24}>
            <div className="bg-white rounded-10 dark:bg-white10 p-[25px]">
              <Row justify="center">
                <Col xl={10} md={16} xs={24}>
                  <Form
                    className="mt-[25px]"
                    style={{ width: '100%' }}
                    layout="vertical"
                    form={form}
                    name="addnew"
                    onFinish={handleSubmit}
                  >
                    <figure className="relative flex items-center mb-[30px] gap-[20px]">
                      <img
                        className="max-w-[120px] min-w-[120px] min-h-[120px] rounded-full"
                        src={
                          url === null
                            ? require('../../../static/img/avatar/profileImage.png')
                            : `${process.env.REACT_APP_API_ENDPOINT}/${url}`
                        }
                        alt=""
                      />
                      <figcaption>
                        <div className="absolute left-[80px] bottom-[-5px] w-[40px] h-[40px] bg-primary border-5 border-white dark:border-dark inline-flex items-center justify-center rounded-full z-[222] shadow-btn [&>span]:flex [&>span]:items-center">
                          <Upload {...props}>
                            <Link className="flex items-center justify-center text-white dark:text-white8" to="#">
                              <UilCamera className="w-[22px] h-[22px]" />
                            </Link>
                          </Upload>
                        </div>
                        <h4 className="text-[15px] font-medium mb-0 text-dark dark:text-white87">Profile Photo</h4>
                        {isFileLoading && (
                          <div className="isUploadSpain">
                            <Spin />
                          </div>
                        )}
                      </figcaption>
                    </figure>
                    <Form.Item
                      className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                      name="name"
                      label="Name"
                    >
                      <Input placeholder="Input Name" />
                    </Form.Item>
                    <Form.Item
                      className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                      name="email"
                      rules={[{ type: 'email' }]}
                      label="Email"
                    >
                      <Input placeholder="example@gmail.com" />
                    </Form.Item>
                    <Form.Item
                      className="[&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:mb-[6px] [&>div>div>label]:font-medium"
                      name="country"
                      initialValue=""
                      label="Country"
                    >
                      <Select className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[50px] [&>div>div>div>span]:items-center w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60">
                        <Option value="">Please Select</Option>
                        <Option value="bangladesh">Bangladesh</Option>
                        <Option value="india">India</Option>
                        <Option value="pakistan">Pakistan</Option>
                        <Option value="srilanka">Srilanka</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      className="[&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:mb-[6px] [&>div>div>label]:font-medium"
                      name="city"
                      initialValue=""
                      label="City"
                    >
                      <Select className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[50px] [&>div>div>div>span]:items-center w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60">
                        <Option value="">Please Select</Option>
                        <Option value="dhaka">Dhaka</Option>
                        <Option value="mymensingh">Mymensingh</Option>
                        <Option value="khulna">Khulna</Option>
                        <Option value="barisal">Barisal</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                      name="company"
                      label="Company"
                    >
                      <Input placeholder="Company Name" />
                    </Form.Item>
                    <Form.Item
                      className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                      name="position"
                      label="Position"
                    >
                      <Input className="border-normal dark:border-white10 border-1" placeholder="Position" />
                    </Form.Item>
                    <Form.Item
                      className="[&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>.ant-form-item-row>div>div>div>.ant-picker]:w-full"
                      label="Joining Date"
                    >
                      <DatePicker
                        className="border-normal dark:bg-white10 dark:border-white10 border-1 rounded-4 h-[50px] [&>div>.ant-picker-suffix]:text-theme-gray dark:[&>div>.ant-picker-suffix]:text-white60"
                        onChange={onChange}
                        style={{ width: '100%' }}
                        format={dateFormat}
                      />
                    </Form.Item>
                    <Form.Item
                      className="[&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:mb-[6px] [&>div>div>label]:font-medium"
                      name="status"
                      label="Status"
                    >
                      <Radio.Group>
                        <Radio value="active">Active</Radio>
                        <Radio value="deactivated">Deactivated</Radio>
                        <Radio value="blocked">Blocked</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <div className="text-end record-form-actions">
                      <Button
                        className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                        size="default"
                        htmlType="Save"
                        type="primary"
                      >
                        {isLoading ? 'Loading...' : 'Submit'}
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default AddNew;
