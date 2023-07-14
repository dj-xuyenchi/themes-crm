import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Slider } from '../../components/slider/slider';

function Sliders() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Sliders',
    },
  ];
  const [state, setstate] = useState({
    onChangeValue: null,
    afterChangeValue: null,
  });
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  const onChange = (value) => {
    setstate({ ...state, onChangeValue: value });
  };

  const onAfterChange = (value) => {
    setstate({ ...state, afterChangeValue: value });
  };

  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Sliders"
        routes={PageRoutes}
      />
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
                <Slider onChange={onChange} defaultValue={30} />
                <Slider onChange={onChange} range defaultValues={[20, 50]} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  With Input
                </h1>
              </div>
              <div className="slider-with-input p-[25px]">
                <div className="slider-with-input__single">
                  <h3>With integer</h3>
                  <div className="ltr:[&>div>div:first-child>div]:mr-[20px] rtl:[&>div>div:first-child>div]:ml-[20px]">
                    <Slider input min={1} max={100} />
                  </div>
                </div>
                <div className="slider-with-input__single">
                  <h3>With Decimal</h3>
                  <div className="ltr:[&>div>div:first-child>div]:mr-[20px] rtl:[&>div>div:first-child>div]:ml-[20px]">
                    <Slider input min={0} max={1} step={0.01} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Range
                </h1>
              </div>
              <div className="p-[25px]">
                <Slider range step={10} defaultValues={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Graduated slider vertical
                </h1>
              </div>
              <div className="p-[25px]">
                <div style={style}>
                  <Slider vertical defaultValue={30} />
                </div>
                <div style={style}>
                  <Slider vertical range step={10} defaultValues={[20, 50]} />
                </div>
                <div style={style}>
                  <Slider vertical range marks={marks} defaultValues={[26, 37]} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  With Icon
                </h1>
              </div>
              <div className="p-[25px] [&>div]:relative [&>div]:px-[30px] [&>div>.anticon]:absolute [&>div>.anticon]:top-[-2px] [&>div>.anticon]:w-[16px] [&>div>.anticon]:h-[16px] [&>div>.anticon]:text-[16px] [&>div>.anticon]:text-dark/40 [&>div>.anticon-frown]:left-0 [&>div>.ant-slider+span]:right-0 [&>div>.ant-slider+span]:left-auto">
                <Slider onChange={onChange} icon min={1} max={100} />
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Graduated slider
                </h1>
              </div>
              <div className="p-[25px]">
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={37} />
                <Slider range marks={marks} defaultValues={[26, 37]} />

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={37} />
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Sliders;
