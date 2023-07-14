import React from 'react';
import { Row, Col, message, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Button } from '../../components/buttons/buttons';

function Confirme() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Popconfirm',
    },
  ];
  const rtl = useSelector((state) => state.ChangeLayoutMode.rtlData);
  const confirm = () => {
    message.success('Click on Yes');
  };

  const cancel = () => {
    message.error('Click on No');
  };

  const text = 'Are you sure to delete this task?';
  const onConfirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Popconfirm"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xl={12} lg={8} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <div className="p-[25px]">
                <Popconfirm
                  title="Are you sure delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Link to="#">Delete</Link>
                </Popconfirm>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={16} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Placement
                </h1>
              </div>
              <div className="demo placement-confirm p-[25px]">
                <div className="pop-confirm pop-confirm-top gap-[10px] flex flex-wrap whitespace-nowrap min-3xl:ltr:ml-[100px] min-3xl:rtl:mr-[100px] 3xl:mb-[15px]">
                  <Popconfirm placement="topLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      TL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="top" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      Top
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="topRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      TR
                    </Button>
                  </Popconfirm>
                </div>
                <div
                  className="pop-confirm pop-confirm-left flex flex-col gap-[10px]"
                  style={{ width: 80, float: [!rtl ? 'left' : 'right'] }}
                >
                  <Popconfirm placement="leftTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      LT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="left" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      Left
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="leftBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      LB
                    </Button>
                  </Popconfirm>
                </div>
                <div className="pop-confirm pop-confirm-right  flex flex-col gap-[10px] w-[80px] min-3xl:ms-[380px] 3xl:ms-[180px] xs::ms-[150px]">
                  <Popconfirm placement="rightTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      RT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="right" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      Right
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="rightBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      RB
                    </Button>
                  </Popconfirm>
                </div>
                <div className="pop-confirm pop-confirm-bottom  gap-[10px] flex flex-wrap whitespace-nowrap min-3xl:ltr:ml-[100px] min-3xl:rtl:mr-[100px] 3xl:mt-[15px]">
                  <Popconfirm placement="bottomLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      BL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1 hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px] max-w-[80px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      Bottom
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottomRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button
                      className="border-solid border-1  hover:text-primary hover:border-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] min-w-[80px] xs:min-w-[70px]"
                      size="default"
                      type="white"
                      outlined
                    >
                      BR
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Confirme;
