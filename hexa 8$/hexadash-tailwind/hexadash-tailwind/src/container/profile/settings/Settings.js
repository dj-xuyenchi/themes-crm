import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));
const AuthorBox = lazy(() => import('./overview/ProfileAuthorBox'));
const CoverSection = lazy(() => import('../overview/CoverSection'));

function Settings() {
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
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="My Profile"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />

      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                  <Skeleton avatar />
                </div>
              }
            >
              <AuthorBox />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <>
              <Suspense
                fallback={
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <Skeleton avatar />
                  </div>
                }
              >
                <div className="mb-[35px] md:mt-[25px]">
                  <CoverSection />
                </div>
              </Suspense>
              <Suspense
                fallback={
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <Skeleton paragraph={{ rows: 20 }} />
                  </div>
                }
              >
                <Routes>
                  <Route index element={<Profile />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="account" element={<Account />} />
                  <Route path="password" element={<Password />} />
                  <Route path="social" element={<SocialProfiles />} />
                  <Route path="notification" element={<Notification />} />
                </Routes>
              </Suspense>
            </>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Settings;
