import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, InputNumber, Radio, Upload, message } from 'antd';
import UilExport from '@iconscout/react-unicons/icons/uil-export';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilDollarAlt from '@iconscout/react-unicons/icons/uil-dollar-alt';
import UilPercentage from '@iconscout/react-unicons/icons/uil-percentage';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const { Dragger } = Upload;

function AddProduct() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Add Product',
    },
  ];
  const [form] = Form.useForm();
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });

  const fileList = [
    {
      uid: '1',
      name: '1.png',
      status: 'done',
      url: require('../../../static/img/products/1.png'),
      thumbUrl: require('../../../static/img/products/1.png'),
    },
  ];

  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setState({ ...state, file: info.file, list: info.fileList });
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
    defaultFileList: fileList,
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <UilTrashAlt />,
    },
  };

  const handleSubmit = (values) => {
    setState({ ...state, submitValues: values });
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Add Product"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={15}>
          <Col xs={24}>
            <GlobalUtilityStyle className="bg-white dark:bg-white10 rounded-10">
              <Row gutter={25} justify="center">
                <Col xxl={12} md={18} xs={24}>
                  <Form style={{ width: '100%' }} form={form} name="addProduct" onFinish={handleSubmit}>
                    <div className="bg-regularBG dark:bg-regularBGdark min-sm:mt-10 min-sm:mb-[30px] min-sm:p-[30px] min-sm:border border-regularBG dark:border-white10 rounded-[20px] md:mx-[15px] sm:mx-0">
                      <Row gutter={15}>
                        <Col xs={24}>
                          <div className="bg-white dark:bg-[#1b1d2a] min-sm:shadow-[0_10px_30px_rgba(116,116,116,0.06)] rounded-[20px]">
                            <div className="rounded-tl-[20px] rounded-tr-[20px]">
                              <Heading
                                as="h2"
                                className="px-[40px] xs:px-[30px] pt-[26px] pb-[25px] text-dark dark:text-white87 text-[18px] font-semibold border-b border-regular dark:border-white10"
                              >
                                About Product
                              </Heading>
                              <div className="px-[40px] xs:px-[30px] pt-[26px] pb-[40px]">
                                <Form.Item
                                  name="name"
                                  label="Product Name"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  name="subtext"
                                  label="Sub Text"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  name="category"
                                  initialValue=""
                                  label="Category"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>div>.ant-select-selector]:h-[50px] [&>.ant-form-item-row>div>div>div>div>div>.ant-select-selection-item]:leading-[50px] [&>.ant-form-item-row>div>div>div>div>div>.ant-select-selection-item]:text-body dark:[&>.ant-form-item-row>div>div>div>div>div>.ant-select-selection-item]:text-white60 dark:text-white60 [&>.ant-form-item-row>div>div>div>div>.ant-select-selector]:border-normal dark:[&>.ant-form-item-row>div>div>div>div>.ant-select-selector]:border-white10 [&>.ant-form-item-row>div>div>div>div>.ant-select-selector]:rounded-md"
                                >
                                  <Select style={{ width: '100%' }}>
                                    <Option value="">Please Select</Option>
                                    <Option value="wearingClothes">Wearing Clothes</Option>
                                    <Option value="sunglasses">Sunglasses</Option>
                                    <Option value="t-shirt">T-Shirt</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  name="price"
                                  label="Price"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold"
                                >
                                  <div className="relative">
                                    <span className="absolute ltr:left-[1px] rtl:right-[1px] top-[1px] flex items-center justify-center bg-regularBG dark:bg-regularBGdark h-[48px] px-5 ltr:border-r rtl:border-l border-normal dark:border-white10 rounded-tl rounded-bl z-10">
                                      <UilDollarAlt className="w-4 h-4 text-body dark:text-white60" />
                                    </span>
                                    <InputNumber className="w-full h-[50px] ltr:pl-[60px] rtl:pr-[60px] border-normal dark:border-white10 rounded-6 [&>div>input]:h-[48px] dark:[&>div>input]:text-white87 dark:bg-white10" />
                                  </div>
                                </Form.Item>
                                <Form.Item
                                  name="discount"
                                  label="Discount"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold "
                                >
                                  <div className="relative">
                                    <span className="absolute ltr:left-[1px] rtl:right-[1px] top-[1px] flex items-center justify-center bg-regularBG dark:bg-regularBGdark h-[48px] px-5 ltr:border-r rtl:border-l border-normal dark:border-white10 rounded-tl rounded-bl z-10">
                                      <UilPercentage className="w-4 h-4 text-body dark:text-white60" />
                                    </span>
                                    <InputNumber className="w-full h-[50px] ltr:pl-[60px] rtl:pr-[60px] border-normal dark:border-white10 rounded-6 [&>div>input]:h-[48px] dark:bg-white10 dark:[&>div>input]:text-white87" />
                                  </div>
                                </Form.Item>
                                <Form.Item
                                  name="status"
                                  label="Status"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                                >
                                  <Radio.Group>
                                    <Radio value="published">Published</Radio>
                                    <Radio value="draft">Draft</Radio>
                                  </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                  name="description"
                                  label="Product Description"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md dark:[&>.ant-form-item-row>div>div>div>textarea]:border-white10"
                                >
                                  <Input.TextArea rows={5} />
                                </Form.Item>
                                <Form.Item
                                  name="mTitle"
                                  label="Meta Title"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  name="mKeyword"
                                  label="Meta Keyword"
                                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10  dark:[&>.ant-form-item-row>div>div>div>input]:text-white87 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                                >
                                  <Input />
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="bg-regularBG dark:bg-regularBGdark min-sm:mt-10 min-sm:mb-[30px] min-sm:p-[30px] min-sm:border border-regularBG dark:border-white10 rounded-[20px] md:mx-[15px] sm:mx-0">
                      <Row gutter={15}>
                        <Col xs={24}>
                          <div className="bg-white dark:bg-[#1b1d2a] min-sm:shadow-[0_10px_30px_rgba(116,116,116,0.06)] rounded-[20px]">
                            <div className="rounded-tl-[20px] rounded-tr-[20px]">
                              <Heading
                                as="h2"
                                className="px-[40px] xs:px-[30px] pt-[26px] pb-[25px] text-dark dark:text-white87 text-[18px] font-semibold border-b border-regular dark:border-white10"
                              >
                                Product Image
                              </Heading>
                              <div className="px-[40px] xs:px-[30px] pt-[26px] pb-[40px] xs:pb-[30px] [&>span>div>div>.ant-upload-list-item]:mt-[35px] [&>span>div>div>.ant-upload-list-item]:h-full [&>span>div>div>.ant-upload-list-item]:p-0 [&>span>div>div>.ant-upload-list-item]:border-none [&>span>div>div>div>div>span>.ant-upload-list-item-thumbnail>img]:w-full [&>span>div>div>div>div>span>.ant-upload-list-item-thumbnail>img]:h-full [&>span>div>div>div>div>span>.ant-upload-list-item-thumbnail>img]:max-w-[100px] [&>span>div>div>div>div>span>.ant-upload-list-item-thumbnail>img]:rounded-[6px] [&>span>div>div>div>div>span>.ant-upload-list-item-name]:px-[10px] [&>span>div>div>div>div>span>.ant-upload-list-item-name]:text-dark dark:[&>span>div>div>div>div>span>.ant-upload-list-item-name]:text-white87 [&>span>div>div>div>div>span>.ant-upload-list-item-name]:font-semibold [&>span>div>div>div>div>span>.ant-upload-list-item-card-actions>button>svg]:w-[15px] [&>span>div>div>div>div>span>.ant-upload-list-item-card-actions>button>svg]:text-danger [&>span>div>div>div>div>span>.ant-upload-list-item-card-actions>button]:bg-transparent [&>span>div>div>div>div>span>.ant-upload-list-item-card-actions>button]:border-transparent">
                                <Dragger
                                  {...fileUploadProps}
                                  className="flex items-center justify-center min-h-[100px] bg-regularBG dark:bg-regularBGdark p-[100px] ssm:px-[50px] sm:px-[30px] border-[2px] border-spacing-[6px] rounded-[10px] dark:border-white10"
                                >
                                  <p className="flex justify-center mb-[20px]">
                                    <UilExport className="text-light-extra dark:text-white60" />
                                  </p>
                                  <Heading
                                    as="h4"
                                    className="text-[15px] text-[#9299b8] dark:text-white60 font-medium mb-2"
                                  >
                                    Drag and drop an image
                                  </Heading>
                                  <p className="text-[15px] text-body dark:text-white60 font-medium">
                                    or <span className="text-secondary">Browse</span> to choose a file
                                  </p>
                                </Dragger>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="mt-[40px] text-end md:mx-[15px]">
                      <Form.Item>
                        <Button
                          className="bg-regularBG dark:bg-regularBGdark h-[50px] ltr:mr-[20px] rtl:ml-[20px] px-[22px] text-[15px] text-body dark:text-white60 hover:text-light font-normal border-regular dark:border-white10"
                          size="large"
                          onClick={() => {
                            return form.resetFields();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="bg-primary hover:bg-primary-hover h-[50px] px-[22px] text-[15px] text-white dark:text-white87 font-normal border-primary"
                          size="large"
                          htmlType="submit"
                          type="primary"
                          raised
                        >
                          Save Product
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </Col>
              </Row>
            </GlobalUtilityStyle>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddProduct;
