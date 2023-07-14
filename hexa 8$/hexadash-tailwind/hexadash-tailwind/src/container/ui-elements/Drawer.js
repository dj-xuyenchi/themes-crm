import React from 'react';
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Drawer } from '../../components/drawer/drawer';

const { Option } = Select;
function Drawers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Drawer',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Drawer"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col lg={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Drawer title="Basic Drawer" placement="right">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Custom Placement
                  </h1>
                </div>
                <div className="drawer-placement p-[25px]">
                  <Drawer customPlacement title="Basic Drawer">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Render in current dom
                  </h1>
                </div>
                <div
                  style={{
                    height: 200,
                    overflow: 'hidden',
                    position: 'relative',
                    padding: 48,
                    textAlign: 'center',
                  }}
                >
                  <div className="p-[25px]">
                    <Drawer render title="Basic Drawer">
                      <p>Some contents...</p>
                    </Drawer>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Submit form in drawer
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Drawer btnText="+ New account" width="560" title="Basic Drawer">
                    <Form layout="vertical" hideRequiredMark>
                      <Row gutter={16}>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please enter user name' }]}
                          >
                            <Input placeholder="Please enter user name" />
                          </Form.Item>
                        </Col>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item name="url" label="Url" rules={[{ required: true, message: 'Please enter url' }]}>
                            <Input
                              style={{ width: '100%' }}
                              addonBefore="http://"
                              addonAfter=".com"
                              placeholder="Please enter url"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item
                            name="owner"
                            label="Owner"
                            rules={[{ required: true, message: 'Please select an owner' }]}
                          >
                            <Select
                              className="dark:[&>.ant-select-arrow]:text-white60"
                              placeholder="Please select an owner"
                            >
                              <Option value="xiao">Xiaoxiao Fu</Option>
                              <Option value="mao">Maomao Zhou</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item
                            name="type"
                            label="Type"
                            rules={[{ required: true, message: 'Please choose the type' }]}
                          >
                            <Select
                              className="dark:[&>.ant-select-arrow]:text-white60"
                              placeholder="Please choose the type"
                            >
                              <Option value="private">Private</Option>
                              <Option value="public">Public</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item
                            name="approver"
                            label="Approver"
                            rules={[{ required: true, message: 'Please choose the approver' }]}
                          >
                            <Select
                              className="dark:[&>.ant-select-arrow]:text-white60"
                              placeholder="Please choose the approver"
                            >
                              <Option value="jack">Jack Ma</Option>
                              <Option value="tom">Tom Liu</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col lg={12} sm={24} xs={24}>
                          <Form.Item
                            name="dateTime"
                            label="DateTime"
                            rules={[{ required: true, message: 'Please choose the dateTime' }]}
                          >
                            <DatePicker.RangePicker
                              className="w-full dark:[&>.ant-picker-range-separator>span]:text-white60 dark:[&>.ant-picker-suffix]:text-white60"
                              getPopupContainer={(trigger) => trigger.parentNode}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col lg={24} sm={24} xs={24}>
                          <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                              {
                                required: true,
                                message: 'please enter url description',
                              },
                            ]}
                          >
                            <Input.TextArea rows={4} placeholder="please enter url description" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Drawer>
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Multi Label Drawer
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Drawer
                    title="Basic Drawer"
                    childTitle="Lavel Two"
                    childDrawer={
                      <>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                      </>
                    }
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Drawers;
