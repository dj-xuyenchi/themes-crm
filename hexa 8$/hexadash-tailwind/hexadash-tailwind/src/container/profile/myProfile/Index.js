import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';

const UserCards = lazy(() => import('../../pages/overview/UserCard'));
const CoverSection = lazy(() => import('../overview/CoverSection'));
const UserBio = lazy(() => import('./overview/UserBio'));
const Overview = lazy(() => import('./overview/Overview'));
const Timeline = lazy(() => import('./overview/Timeline'));
const Activity = lazy(() => import('./overview/Activity'));

function MyProfile() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'My Profile',
    },
  ];
  const path = '.';
  return (
    <>
      <PageHeader
        className="flex flex-wrap items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col sm:justify-center"
        title="My Profile"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                  <Skeleton avatar active paragraph={{ rows: 3 }} />
                </div>
              }
            >
              <UserCards
                user={{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'static/img/users/1.png' }}
              />
            </Suspense>
            <div className="mt-[25px]">
              <Suspense
                fallback={
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <Skeleton active paragraph={{ rows: 10 }} />
                  </div>
                }
              >
                <UserBio />
              </Suspense>
            </div>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24} className="md:order-[-1] md:mb-[25px]">
            <>
              <div className="relative z-[1] bg-white dark:bg-white10 rounded-10 mb-[25px]">
                <Suspense
                  fallback={
                    <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                      <Skeleton active />
                    </div>
                  }
                >
                  <CoverSection />
                  <nav className="px-[25px]">
                    <ul className="m-0 flex items-center gap-[22px]">
                      <li>
                        <NavLink
                          className="relative block py-[20px] px-[5px] text-light dark:text-white60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                          to={`${path}/overview`}
                        >
                          Overview
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="relative block py-[20px] px-[5px] text-light dark:text-white60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                          to={`${path}/timeline`}
                        >
                          Timeline
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="relative block py-[20px] px-[5px] text-light dark:text-white60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                          to={`${path}/activity`}
                        >
                          Activity
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </Suspense>
              </div>
              <Suspense
                fallback={
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <Skeleton active paragraph={{ rows: 10 }} />
                  </div>
                }
              >
                <Routes>
                  <Route path="overview" element={<Overview />} />
                  <Route path="timeline" element={<Timeline />} />
                  <Route path="activity" element={<Activity />} />
                </Routes>
              </Suspense>
            </>
          </Col>
        </Row>
      </main>
    </>
  );
}

MyProfile.propTypes = {
  // match: propTypes.object,
};

export default MyProfile;
