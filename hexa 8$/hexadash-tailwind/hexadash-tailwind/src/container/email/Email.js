import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left';
import UilAlignRight from '@iconscout/react-unicons/icons/uil-align-right';
import EmailNavbar from './overview/Navbar';
import ComposeMail from './overview/Compose';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Button } from '../../components/buttons/buttons';

const Inbox = lazy(() => import('./overview/Inbox'));
const Sent = lazy(() => import('./overview/Sent'));
const Draft = lazy(() => import('./overview/Draft'));
const Starred = lazy(() => import('./overview/Starred'));
const Trash = lazy(() => import('./overview/Trash'));
const Spam = lazy(() => import('./overview/Spam'));
const MailDetailView = lazy(() => import('./overview/MailDetailView'));

function Email() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Email',
    },
    {
      path: '',
      breadcrumbName: 'Email',
    },
  ];

  const [isMailEditorOpen, setMailEditorStatus] = useState(false);
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });

  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const toggleMailComposer = () => {
    setMailEditorStatus(!isMailEditorOpen);
  };

  const closeMailComposr = () => {
    setMailEditorStatus(false);
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Dashboard"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />

      {isMailEditorOpen && <ComposeMail close={closeMailComposr} />}

      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={5} xl={7} lg={8} xs={24}>
            {responsive <= 991 && (
              <Button
                type="link"
                className="mb-[15px] w-[45px] h-[45px] inline-flex items-center justify-center p-0 text-primary bg-white dark:bg-white10 dark:text-white87 border-1 border-white dark:border-white10"
                style={{ marginTop: 0 }}
                onClick={toggleCollapsed}
              >
                {collapsed ? <UilAlignLeft /> : <UilAlignRight />}
              </Button>
            )}

            {responsive > 991 ? (
              <div className="bg-white dark:bg-white10 rounded-[10px]">
                <div className="pt-[30px] px-[30px] lg:px-[15px] sm:px-0 pb-[20px]">
                  <Button
                    onClick={toggleMailComposer}
                    shape="round"
                    type="primary"
                    size="default"
                    block
                    className="flex items-center justify-center dark:text-white87 h-11 px-[20px] gap-1.5 text-sm font-semibold"
                  >
                    <UilPlus className="w-[18px] h-[18px]" /> Compose
                  </Button>
                </div>

                <div className="px-[15px] pb-[25px]">
                  <EmailNavbar />
                </div>
              </div>
            ) : (
              <div className={collapsed ? 'visible' : 'hidden'}>
                <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px] lg:mb-[30px]">
                  <Button
                    type="link"
                    className="bg-transparent border-none text-danger sm:px-0"
                    style={{ marginTop: 0 }}
                    onClick={toggleCollapsed}
                  >
                    <UilTimes />
                  </Button>
                  <div className="pt-[30px] px-[30px] lg:px-[15px] sm:px-0 pb-[20px]">
                    <Button
                      onClick={toggleMailComposer}
                      shape="round"
                      type="primary"
                      size="default"
                      block
                      className="flex items-center justify-center dark:text-white87 h-11 px-[20px] gap-1.5 text-sm font-semibold"
                    >
                      <UilPlus className="w-[18px] h-[18px]" /> Compose
                    </Button>
                  </div>

                  <div className="px-[15px] sm:px-0 pb-[25px]">
                    <EmailNavbar toggleCollapsed={toggleCollapsed} />
                  </div>
                </div>
              </div>
            )}
          </Col>

          <Col xxl={19} xl={17} lg={16}>
            <Suspense
              fallback={
                <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="inbox" element={<Inbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="drafts" element={<Draft />} />
                <Route path="starred" element={<Starred />} />
                <Route path="spam" element={<Spam />} />
                <Route path="trash" element={<Trash />} />
                <Route path="single/:id/*" element={<MailDetailView />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Email;
