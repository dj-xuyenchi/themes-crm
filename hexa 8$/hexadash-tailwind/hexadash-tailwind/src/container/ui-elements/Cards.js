import React from 'react';
import { Row, Col, Card } from 'antd';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import { NavLink } from 'react-router-dom';
import { CardStyleWrapper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const content = (
  <>
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Printer</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>PDF</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>CSV</span>
      </NavLink>
    </div>
  </>
);

function CardContainer() {
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
            <Col xs={24}>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                title="Basic card"
                size="large"
              >
                <Row>
                  <Col lg={8} md={10} xs={24}>
                    <CardStyleWrapper>
                      <Cards
                        title="Default Size Card"
                        border
                        size="default"
                        moreText
                        className="mb-[25px] bg-white dark:bg-transparent card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                        more={content}
                        style={{ width: 400 }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Cards>
                      <Cards
                        title="Small size card"
                        border
                        size="small"
                        moreText
                        className="mb-[25px] bg-white dark:bg-transparent card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                        more={content}
                        style={{ width: 400 }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Cards>
                    </CardStyleWrapper>
                  </Col>
                </Row>
              </Cards>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                title="No border"
              >
                <Row>
                  <Col lg={8} md={10} xs={24}>
                    <CardStyleWrapper>
                      <Cards
                        title="Default Size Card"
                        border={false}
                        size="default"
                        className="mb-[25px] bg-regularBG dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25 [&>.ant-card-head]:bg-transparent"
                        moreText
                        more={content}
                        style={{ width: 400 }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Cards>
                    </CardStyleWrapper>
                  </Col>
                </Row>
              </Cards>
              <Cards
                className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                title="Simple card"
                size="large"
              >
                <Row>
                  <Col lg={8} md={10} xs={24}>
                    <CardStyleWrapper>
                      <Cards
                        className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                        headless
                        border
                        size="default"
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Cards>
                    </CardStyleWrapper>
                  </Col>
                </Row>
              </Cards>
            </Col>
          </Row>
          <Cards
            className="mb-[25px] card-title-bb ant-card-head-px-25 ant-card-body-p-25"
            title="Card In Column"
            size="large"
          >
            <div className="columnCardsWrapper bg-deepBG dark:bg-white10 px-[25px] pt-[50px] rounded-[10px]">
              <Row gutter={16}>
                <Col sm={8} xs={24}>
                  <CardStyleWrapper>
                    <Cards
                      className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25 rounded-[10px]"
                      title="Card title"
                      border={false}
                      size="default"
                    >
                      <p>Card content</p>
                    </Cards>
                  </CardStyleWrapper>
                </Col>
                <Col sm={8} xs={24}>
                  <CardStyleWrapper>
                    <Cards
                      className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25 rounded-[10px]"
                      title="Card title"
                      border={false}
                      size="default"
                    >
                      <p>Card content</p>
                    </Cards>
                  </CardStyleWrapper>
                </Col>
                <Col sm={8} xs={24}>
                  <CardStyleWrapper>
                    <Cards
                      className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25 rounded-[10px]"
                      title="Card title"
                      border={false}
                      size="default"
                    >
                      <p>Card content</p>
                    </Cards>
                  </CardStyleWrapper>
                </Col>
              </Row>
            </div>
          </Cards>

          <Row gutter={15}>
            <Col xs={24}>
              <div className="card-grid-wrap">
                <Cards
                  className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25"
                  title="Grid Card"
                  size="large"
                >
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                  <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
                </Cards>
              </div>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={24}>
              <div className="card-grid-wrap">
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Tailwind Cards
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Row gutter={16}>
                      <Col sm={8} xs={24}>
                        <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] dark:border-white10 border-1 rounded-6 relative">
                          <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                            <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                              Default Size Card
                            </h1>
                          </div>
                          <div className="p-[25px]">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8} xs={24}>
                        <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] dark:border-white10 border-1 rounded-6 relative">
                          <div className="h-[60px] flex items-center px-[15px] text-dark dark:text-white87 font-medium text-[15px] border-regular dark:border-white10 border-b">
                            <h3 className="mb-0 inline-block overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                              Small size card
                            </h3>
                          </div>
                          <div className="p-[15px]">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default CardContainer;
