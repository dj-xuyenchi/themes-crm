import React from 'react';
import { Row, Col } from 'antd';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import { PageHeader } from '../../components/page-headers/page-headers';
import { AlertList, GlobalUtilityStyle } from '../styled';
import Alert from '../../components/alerts/alerts';

function Alerts() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Alerts',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Alerts"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <AlertList className="p-[25px]">
                  <div className="alert-empty-message">
                    <Alert message="" description="Success Text" type="success" />
                  </div>
                </AlertList>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Closable
                  </h1>
                </div>
                <AlertList className="gap-y-[15px] inline-flex flex-col w-full p-[25px]">
                  <div className="alert-empty-message">
                    <Alert
                      closable
                      message=""
                      description="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                      type="warning"
                    />
                  </div>
                  <Alert
                    closable
                    message="Error Text"
                    description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                    type="error"
                  />
                </AlertList>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Icon
                  </h1>
                </div>
                <AlertList className="gap-y-[15px] inline-flex flex-col w-full p-[25px]">
                  <div className="alert-empty-message gap-y-[15px] inline-flex flex-col w-full">
                    <Alert showIcon icon={<UilLayers />} message="" description="Success Tips" type="success" />
                    <Alert showIcon icon={<UilLayers />} message="" description="Informational Notes" type="info" />
                    <Alert showIcon icon={<UilLayers />} message="" description="Warning" type="warning" />
                    <Alert showIcon icon={<UilLayers />} message="" description="Error" type="error" />
                  </div>
                  <Alert
                    showIcon
                    icon={<UilLayers />}
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                  />
                  <Alert
                    showIcon
                    icon={<UilLayers />}
                    message="Informational Notes"
                    description="Additional description and information about copywriting."
                    type="info"
                  />
                  <Alert
                    showIcon
                    icon={<UilLayers />}
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                  />
                  <Alert
                    showIcon
                    icon={<UilLayers />}
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                  />
                </AlertList>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    More Types
                  </h1>
                </div>
                <AlertList className="p-[25px]">
                  <div className="alert-empty-message gap-y-[15px] inline-flex flex-col w-full">
                    <Alert message="" description="Success Text" type="success" />
                    <Alert message="" description="Info Text" type="info" />
                    <Alert message="" description="Warning Text" type="warning" />
                    <Alert message="" description="Error Text" type="error" />
                  </div>
                </AlertList>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Description
                  </h1>
                </div>
                <AlertList className="gap-y-[15px] inline-flex flex-col w-full p-[25px]">
                  <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    type="success"
                  />
                  <Alert
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                  />
                  <Alert
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    type="warning"
                  />
                  <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    type="error"
                  />
                </AlertList>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Customized Close Text
                  </h1>
                </div>
                <AlertList className="p-[25px]">
                  <div className="alert-empty-message">
                    <Alert closeText="Close Now" closable message="" description="Info Text" type="info" />
                  </div>
                </AlertList>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Smoothly Unmount
                  </h1>
                </div>
                <AlertList className="p-[25px]">
                  <div className="alert-empty-message">
                    <Alert closable message="" description="Alert Message Text" type="success" />
                  </div>
                </AlertList>
              </div>
            </Col>
          </Row>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default Alerts;
