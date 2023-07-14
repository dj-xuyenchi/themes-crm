import React, { useState } from 'react';
import { Row, Col, Carousel, Radio } from 'antd';
import { CarouselStyleWraper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';

function Carousels() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Cards',
    },
  ];
  const [state, setState] = useState({
    dotPosition: 'top',
    changeValues: [],
  });
  const onChange = (a, b, c) => {
    setState({ ...state, changeValues: [a, b, c] });
  };

  const handlePositionChange = ({ target: { value: dotPosition } }) => setState({ dotPosition });
  const { dotPosition } = state;

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Cards"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <CarouselStyleWraper className="p-[25px]">
                  <Carousel afterChange={onChange}>
                    <div>
                      <h3 className="text-white dark:text-white87">1</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">2</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">3</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">4</h3>
                    </div>
                  </Carousel>
                </CarouselStyleWraper>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Scroll automatically
                  </h1>
                </div>
                <CarouselStyleWraper className="p-[25px]">
                  <Carousel autoplay>
                    <div>
                      <h3 className="text-white dark:text-white87">1</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">2</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">3</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">4</h3>
                    </div>
                  </Carousel>
                </CarouselStyleWraper>
              </div>
            </Col>
            <Col md={12}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Position
                  </h1>
                </div>
                <CarouselStyleWraper className="p-[25px]">
                  <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">Top</Radio.Button>
                    <Radio.Button value="bottom">Bottom</Radio.Button>
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>
                  </Radio.Group>
                  <Carousel dotPosition={dotPosition}>
                    <div>
                      <h3 className="text-white dark:text-white87">1</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">2</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">3</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">4</h3>
                    </div>
                  </Carousel>
                </CarouselStyleWraper>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Fade in
                  </h1>
                </div>
                <CarouselStyleWraper className="p-[25px]">
                  <Carousel effect="fade">
                    <div>
                      <h3 className="text-white dark:text-white87">1</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">2</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">3</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">4</h3>
                    </div>
                  </Carousel>
                </CarouselStyleWraper>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Carousels;
