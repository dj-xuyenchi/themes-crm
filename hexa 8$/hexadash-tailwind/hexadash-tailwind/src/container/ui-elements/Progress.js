import React, { useState } from 'react';
import { Row, Col, Progress, Button, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';

const ButtonGroup = Button.Group;

function ProgressBar() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Progress Bar',
    },
  ];
  const rtl = useSelector((state) => state.ChangeLayoutMode.rtlData);
  const [state, setState] = useState({
    percent: 0,
  });

  const increase = () => {
    let percent = state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    setState({ percent });
  };

  const decline = () => {
    let percent = state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    setState({ percent });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Progress Bar"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col lg={12} md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <div className="p-[25px] flex flex-wrap flex-col gap-y-[15px]">
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="min-sm:h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] text-[18px] font-semibold">
                  Mini size Circular progress bar
                </h1>
              </div>
              <div className="flex flex-wrap gap-[15px] p-[25px]">
                <Progress type="circle" percent={30} width={80} />
                <Progress type="circle" percent={70} width={80} status="exception" />
                <Progress type="circle" percent={100} width={80} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Dashboard
                </h1>
              </div>
              <div className="p-[25px]">
                <Progress type="dashboard" percent={70} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Square linecaps
                </h1>
              </div>
              <div className="p-[25px] flex flex-wrap gap-[15px]">
                <Progress strokeLinecap="square" percent={75} />
                <Progress strokeLinecap="square" type="circle" percent={75} />
                <Progress strokeLinecap="square" type="dashboard" percent={75} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Square linecaps
                </h1>
              </div>
              <div className="p-[25px] flex flex-wrap items-center gap-[10px]">
                <Progress type="circle" percent={state.percent} />
                <ButtonGroup>
                  <Button onClick={decline} icon={<MinusOutlined />} />
                  <Button onClick={increase} icon={<PlusOutlined />} />
                </ButtonGroup>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="min-sm:h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] text-[18px] font-semibold">
                  Progress bar with success segment
                </h1>
              </div>
              <div className="p-[25px]">
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress percent={60} success={{ percent: 30 }} style={{ marginBottom: '15px' }} />
                </Tooltip>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress
                    percent={60}
                    success={{ percent: 30 }}
                    type="circle"
                    style={{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }}
                  />
                </Tooltip>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Circular progress bar
                </h1>
              </div>
              <div className="flex flex-wrap gap-[15px] p-[25px]">
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Mini size progress bar
                </h1>
              </div>
              <div className="p-[25px]">
                <Progress
                  className="flex items-center"
                  size="small"
                  percent={30}
                  width={80}
                  style={{ marginBottom: '15px' }}
                />
                <Progress
                  className="flex items-center"
                  size="small"
                  percent={70}
                  width={80}
                  status="exception"
                  style={{ marginBottom: '15px' }}
                />
                <Progress className="flex items-center" size="small" percent={100} width={80} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Square linecaps
                </h1>
              </div>
              <div className="p-[25px] flex flex-wrap gap-[15px]">
                <Progress strokeLinecap="square" percent={75} style={{ marginBottom: '15px' }} />
                <Progress strokeLinecap="square" type="circle" percent={75} />
                <Progress strokeLinecap="square" type="dashboard" percent={75} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Dynamic
                </h1>
              </div>
              <div className="p-[25px]">
                <Progress percent={state.percent} />
                <ButtonGroup>
                  <Button onClick={decline} icon={<MinusOutlined />} />
                  <Button onClick={increase} icon={<PlusOutlined />} />
                </ButtonGroup>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Custom text
                </h1>
              </div>
              <div className="p-[25px] flex flex-wrap gap-[15px]">
                <Progress className="" type="circle" percent={75} format={(percent) => `${percent} Days`} />
                <Progress type="circle" percent={100} format={() => 'Done'} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Custom line gradient
                </h1>
              </div>
              <div className="p-[25px]">
                <Progress
                  strokeColor={{
                    '0%': '#2C99FF',
                    '100%': '#20C997',
                  }}
                  percent={99.9}
                  style={{ marginBottom: '15px' }}
                />
                <Progress
                  strokeColor={{
                    from: '#2C99FF',
                    to: '#20C997',
                  }}
                  percent={99.9}
                  status="active"
                  style={{ marginBottom: '15px' }}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#2C99FF',
                    '100%': '#20C997',
                  }}
                  percent={90}
                  style={{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#2C99FF',
                    '100%': '#20C997',
                  }}
                  percent={100}
                />
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default ProgressBar;
