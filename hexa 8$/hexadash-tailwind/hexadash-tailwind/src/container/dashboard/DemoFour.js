import React, { Suspense, lazy } from 'react';
import { Row, Col, Skeleton } from 'antd';
import ProfileCard from '../../components/cards/ProfileCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Banner8 } from '../../components/banners/Banners';
import { GlobalUtilityStyle } from '../styled';

const InfoCard = lazy(() => import('../../components/cards/InfoCard'));
const Newsletter = lazy(() => import('../../components/cards/Newsletter'));
const SingleChat = lazy(() => import('../chat/overview/singleChat'));
const PerformanceOverview = lazy(() => import('./overview/demoFour/PerfomanceOverviewRadial'));
const Tasks = lazy(() => import('./overview/demoFour/Tasks'));
const MarketingCampaigns = lazy(() => import('./overview/demoFour/MarketingCampaigns'));
const TeamList = lazy(() => import('./overview/demoFour/TeamList'));
const TrafficChannel = lazy(() => import('./overview/demoFour/TrafficChannelTable'));

function Performance() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 4',
    },
  ];

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Dashboard"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />

      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row justify="center" gutter={25}>
            <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Banner8 />
              </Suspense>
            </Col>
            <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <PerformanceOverview />
              </Suspense>
            </Col>
            <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Row gutter={15}>
                  <Col xs={12}>
                    <InfoCard icon="UilBriefcaseAlt" />
                  </Col>
                  <Col xs={12}>
                    <InfoCard text="Total Awards" icon="UilAward" type="info" counter="15k" />
                  </Col>
                  <Col xs={24}>
                    <Newsletter />
                  </Col>
                </Row>
              </Suspense>
            </Col>
            <Col xxl={16} xl={12} lg={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Tasks />
              </Suspense>
            </Col>
            <Col xxl={8} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              />
              <MarketingCampaigns />
            </Col>

            <Col xxl={16} xs={24}>
              <Row gutter={25}>
                <Col lg={12} xs={24} className="mb-[25px]">
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <ProfileCard />
                  </Suspense>
                </Col>
                <Col lg={12} xs={24} className="mb-[25px]">
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <TeamList />
                  </Suspense>
                </Col>
                <Col xs={24} className="mb-[25px]">
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <TrafficChannel />
                  </Suspense>
                </Col>
              </Row>
            </Col>
            <Col xxl={8} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <SingleChat
                  match={{
                    params: {
                      id: 'rofiq@gmail.com',
                    },
                  }}
                  dashboard
                />
              </Suspense>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Performance;
