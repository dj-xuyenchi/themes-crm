import React from 'react';
import { Row, Col, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';

const { TextArea } = Input;
function Inputs() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Input',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Input"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <div className="input-wrap">
            <Row gutter={25}>
              <Col md={12} sm={12} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Basic
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Input placeholder="Basic usage" />
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Textarea
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <TextArea rows={4} />
                  </div>
                </div>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Three sizes of Input
                    </h1>
                  </div>
                  <div className="p-[25px] flex flex-col gap-y-[20px]">
                    <Input
                      size="large"
                      placeholder="large size"
                      prefix={<UserOutlined className="w-[17px] h-[17px]" />}
                    />
                    <Input placeholder="default size" prefix={<UserOutlined className="w-[15px] h-[15px]" />} />
                    <Input
                      size="small"
                      placeholder="small size"
                      prefix={<UserOutlined className="w-[13px] h-[13px]" />}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default Inputs;
