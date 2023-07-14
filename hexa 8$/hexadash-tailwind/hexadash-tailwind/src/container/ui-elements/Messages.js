import React from 'react';
import { Row, Col, message, Space } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { MessageStyleWrapper, GlobalUtilityStyle } from '../styled';
import { Button } from '../../components/buttons/buttons';

function Messages() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Message',
    },
  ];
  const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const customSuccess = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };

  const loadingSuccess = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Message"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <div className="p-[25px]">
                  <MessageStyleWrapper className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    <Button
                      className=" bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                      type="primary"
                      size="large"
                      raised
                      onClick={info}
                    >
                      Display normal message
                    </Button>
                  </MessageStyleWrapper>
                </div>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Customize
                  </h1>
                </div>
                <MessageStyleWrapper className="p-[25px]">
                  <Button
                    className="btn-outlined  hover:bg-hbr-gray border-solid border-1 dark:bg-transparent border-theme-gray text-theme-gray dark:text-white60 dark:focus:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] "
                    type="light"
                    outlined
                    size="large"
                    onClick={customSuccess}
                  >
                    Customized display duration
                  </Button>
                </MessageStyleWrapper>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Other types of message
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Space>
                    <div className="message-button-list flex flex-wrap gap-x-[10px] gap-y-[10px]">
                      <Button
                        className="btn-outlined  bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:text-white87 text-[14px] font-semibold leading-[22px] dark:focus:text-dark inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                        type="light"
                        outlined
                        size="large"
                        onClick={success}
                      >
                        Success
                      </Button>
                      <Button
                        className="btn-outlined  bg-danger hover:bg-hbr-danger border-solid border-1 border-danger text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                        type="light"
                        outlined
                        size="large"
                        onClick={error}
                      >
                        Error
                      </Button>
                      <Button
                        className="btn-outlined  bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                        type="light"
                        outlined
                        size="large"
                        onClick={warning}
                      >
                        Warning
                      </Button>
                    </div>
                  </Space>
                </div>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Loading
                  </h1>
                </div>
                <MessageStyleWrapper className="p-[25px]">
                  <Button
                    className="btn-outlined  hover:bg-hbr-gray border-solid border-1 dark:bg-transparent border-theme-gray text-theme-gray dark:text-white60 hover:text-white text-[14px] font-semibold dark:focus:text-white60 leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    type="light"
                    outlined
                    size="large"
                    onClick={loadingSuccess}
                  >
                    Display a loading indicator
                  </Button>
                </MessageStyleWrapper>
              </div>
            </Col>
          </Row>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default Messages;
