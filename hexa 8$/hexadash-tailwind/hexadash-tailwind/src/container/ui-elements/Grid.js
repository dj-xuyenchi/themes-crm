import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function Grid() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Grid',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Grid"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Basic Grid"
                size="default"
              >
                <div className="grid-style">
                  <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                  </Row>
                  <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                  </Row>
                  <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Grid Gutter"
                size="default"
              >
                <div className="grid-style-gutter">
                  <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">col-6</div>
                    </Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Column offset"
                size="default"
              >
                <div className="grid-style-offset">
                  <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8} offset={8}>
                      col-8
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} offset={6}>
                      col-6 col-offset-6
                    </Col>
                    <Col span={6} offset={6}>
                      col-6 col-offset-6
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} offset={6}>
                      col-12 col-offset-6
                    </Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Grid sort"
                size="default"
              >
                <div className="grid-style">
                  <Row>
                    <Col span={18} push={6}>
                      col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                      col-6 col-pull-18
                    </Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Sub-element align"
                size="default"
              >
                <div className="grid-style">
                  <p className="dark:text-white60">sub-element align left</p>
                  <Row type="flex" justify="start">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                  </Row>

                  <p className="dark:text-white60">sub-element align center</p>
                  <Row type="flex" justify="center">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                  </Row>

                  <p className="dark:text-white60">sub-element align right</p>
                  <Row type="flex" justify="end">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                  </Row>

                  <p className="dark:text-white60">sub-element monospaced arrangement</p>
                  <Row type="flex" justify="space-between">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                  </Row>

                  <p className="dark:text-white60">sub-element align full</p>
                  <Row type="flex" justify="space-around">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="Responsive"
                size="default"
              >
                <div className="grid-style">
                  <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                      Col
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                      Col
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                      Col
                    </Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                headless
                title="More Responsive"
                size="default"
              >
                <div className="grid-style">
                  <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      Col
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      Col
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      Col
                    </Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Grid;
