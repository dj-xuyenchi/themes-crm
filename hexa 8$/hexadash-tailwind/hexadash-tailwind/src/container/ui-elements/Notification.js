import React from 'react';
import { Row, Col, notification, Divider } from 'antd';
import {
  SmileOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { NotificationListWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';

function Notifications() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Notifications',
    },
  ];
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        // console.log('Notification Clicked!');
      },
    });
  };

  const openNotification2 = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };

  const close = () => {
    // console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  const openNotification3 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const openNotificationCustomIcon = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const openNotificationCustomStyle = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  const openNotificationPlacement = (placement) => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Notifications"
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={15}>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basics
                </h1>
              </div>
              <div className="p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={openNotification}
                >
                  Open the notification box
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="min-lg:h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] text-[18px] font-semibold">
                  Duration after which the notification box is closed
                </h1>
              </div>
              <div className="p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={openNotification2}
                >
                  Open the notification box
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Custom close button
                </h1>
              </div>
              <div className="p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={openNotification3}
                >
                  Open the notification box
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Notification with icon
                </h1>
              </div>
              <NotificationListWrapper className="gap-y-[10px] gap-x-[15px] flex flex-wrap p-[25px]">
                <Button
                  className="bg-success hover:bg-hbr-success dark:bg-white10 dark:hover:bg-hbr-success border-solid border-1 border-success hover:border-hbr-success text-white dark:text-white60 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="success"
                  size="small"
                  onClick={() => openNotificationWithIcon('success')}
                >
                  Success
                </Button>
                <Button
                  className="bg-info hover:bg-hbr-info dark:bg-white10 dark:hover:bg-hbr-info border-solid border-1 border-info hover:border-hbr-info text-white dark:text-white60 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="info"
                  size="small"
                  onClick={() => openNotificationWithIcon('info')}
                >
                  Info
                </Button>
                <Button
                  className="bg-warning hover:bg-hbr-warning dark:bg-white10 dark:hover:bg-hbr-warning border-solid border-1 border-warning hover:border-hbr-warning text-white dark:text-white60 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="warning"
                  size="small"
                  onClick={() => openNotificationWithIcon('warning')}
                >
                  Warning
                </Button>
                <Button
                  className="bg-danger hover:bg-hbr-danger dark:bg-white10 dark:hover:bg-hbr-danger border-solid border-1 border-danger hover:border-hbr-danger text-white dark:text-white60 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="error"
                  size="small"
                  onClick={() => openNotificationWithIcon('error')}
                >
                  Error
                </Button>
              </NotificationListWrapper>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Notification with custom icon
                </h1>
              </div>
              <div className="p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={openNotificationCustomIcon}
                >
                  Open the notification box
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Notification with custom style
                </h1>
              </div>
              <div className="p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={openNotificationCustomStyle}
                >
                  Open the notification box
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Notification with placement
                </h1>
              </div>
              <NotificationListWrapper className="gap-y-[10px] gap-x-[15px] flex flex-wrap p-[25px]">
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={() => openNotificationPlacement('topLeft')}
                >
                  <RadiusUpleftOutlined />
                  TopLeft
                </Button>
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={() => openNotificationPlacement('topRight')}
                >
                  <RadiusUprightOutlined />
                  TopRight
                </Button>
                <Divider />
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={() => openNotificationPlacement('bottomLeft')}
                >
                  <RadiusBottomleftOutlined />
                  BottomLeft
                </Button>
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  type="primary"
                  size="small"
                  onClick={() => openNotificationPlacement('bottomRight')}
                >
                  <RadiusBottomrightOutlined />
                  BottomRight
                </Button>
              </NotificationListWrapper>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
