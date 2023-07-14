import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, CreditCardOutlined, SmileOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Popover } from '../../components/popup/popup';
import { Steps, Step } from '../../components/steps/steps';

const customDot = (dot, { status, index }) => (
  <Popover
    placement="bottomLeft"
    content={
      <span className="span">
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

function Stepess() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Steps',
    },
  ];
  const [state, setState] = useState({
    current: 0,
    next: 0,
    prev: 0,
  });

  const { current } = state;

  const onChange = (currentValue) => {
    setState({ currentValue });
  };

  const next = (currentValue) => {
    setState({ ...state, next: currentValue });
  };

  const prev = (currentValue) => {
    setState({ ...state, prev: currentValue });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Steps"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic step
                </h1>
              </div>
              <div className="p-[25px] [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:flex [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:items-center [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:w-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:h-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:justify-center text-theme-gray dark:text-white60">
                <Steps size="small" current={1}>
                  <Step title="Finished" />
                  <Step title="In Progress" />
                  <Step title="Waiting" />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  With Icon
                </h1>
              </div>
              <div className="p-[25px] [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:flex [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:items-center [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:w-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:h-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:justify-center text-theme-gray dark:text-white60 [&>div>div>div]:flex [&>div>div>div]:items-center">
                <Steps>
                  <Step status="finish" title="Login" icon={<UserOutlined />} />
                  <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                  <Step status="process" title="Pay" icon={<CreditCardOutlined />} />
                  <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Switch Step
                </h1>
              </div>
              <div className="p-[25px]">
                <Steps
                  isswitch
                  steps={[
                    {
                      title: 'First',
                      content: 'First-content',
                    },
                    {
                      title: 'Second',
                      content: 'Second-content',
                    },

                    {
                      title: 'Last',
                      content: 'Last-content',
                    },
                  ]}
                  onNext={next}
                  onPrev={prev}
                />
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Vertical mini version{' '}
                </h1>
              </div>
              <div className="p-[25px] [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:flex [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:items-center [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:w-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:h-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:justify-center text-theme-gray dark:text-white60">
                <Steps direction="vertical" size="small" current={1}>
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Error status
                </h1>
              </div>
              <div className="p-[25px] [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:flex [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:items-center [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:w-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:h-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:justify-center text-theme-gray dark:text-white60">
                <Steps current={1} status="error">
                  <Step title="Finished" description="This is a description" />
                  <Step title="In Process" description="This is a description" />
                  <Step title="Waiting" description="This is a description" />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Custom Dot Style
                </h1>
              </div>
              <div className="p-[25px]">
                <Steps current={1} progressDot={customDot}>
                  <Step title="Finished" description="You can hover on the dot." />
                  <Step title="In Progress" description="You can hover on the dot." />
                  <Step title="Waiting" description="You can hover on the dot." />
                  <Step title="Waiting" description="You can hover on the dot." />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Clickable
                </h1>
              </div>
              <div className="p-[25px]">
                <Steps current={current} onChange={onChange}>
                  <Step title="Step 1" description="This is a description." />
                  <Step title="Step 2" description="This is a description." />
                  <Step title="Step 3" description="This is a description." />
                </Steps>

                <Divider />

                <Steps current={current} onChange={onChange} direction="vertical">
                  <Step title="Step 1" description="This is a description." />
                  <Step title="Step 2" description="This is a description." />
                  <Step title="Step 3" description="This is a description." />
                </Steps>
              </div>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Navigation status
                </h1>
              </div>
              <div className="p-[25px] [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:flex [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:items-center [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:w-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:h-full [&>div>div>div>.ant-steps-item-icon>.ant-steps-icon]:justify-center text-theme-gray dark:text-white60">
                <Steps navigation onChange={onChange}>
                  <Step status="finish" title="Step 1" />
                  <Step status="process" title="Step 2" />
                  <Step status="wait" title="Step 3" />
                </Steps>
                <Steps navigation onChange={onChange}>
                  <Step status="finish" title="finish 1" />
                  <Step status="finish" title="finish 2" />
                  <Step status="process" title="current process" />
                  <Step status="wait" title="wait" disabled />
                </Steps>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Stepess;
