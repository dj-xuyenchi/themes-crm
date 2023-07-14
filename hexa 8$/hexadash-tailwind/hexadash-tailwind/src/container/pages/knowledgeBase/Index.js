import React, { useState, lazy, Suspense } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Spin } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import KnowledgeBaseTop from './overview/Knowledgebase/knowledgeTop';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';

import articles from '../../../demoData/article.json';

const Plugins = lazy(() => import('./overview/ArticlePlugin'));
const Themes = lazy(() => import('./overview/ArticleTheme'));
const Extensions = lazy(() => import('./overview/ArticleExtension'));

function KnowledgeBase() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Knowledgebase',
    },
  ];
  const path = '/admin/knowledgebase';

  const [activeValue, setActiveValue] = useState('plugins');

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Knowledgebase"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <KnowledgeBaseTop />
        <div className="bg-white dark:bg-white10 mt-[50px] px-[50px] sm:px-[30px] ssm:px-5 pb-[50px] rounded-10">
          <div className="max-w-[1110px] mx-auto">
            <div>
              <div className="mb-9">
                <nav>
                  <ul className="flex items-center border-b gap-x-9 sm:gap-x-6 border-normal dark:border-white10">
                    <li>
                      <NavLink
                        to={`${path}/plugins`}
                        onClick={() => {
                          setActiveValue('plugins');
                        }}
                        className={`block relative pt-6 pb-4 text-base sm:text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-px cursor-pointer ${
                          activeValue === 'plugins'
                            ? 'text-dark dark:text-white after:bg-dark dark:after:bg-white'
                            : 'text-body dark:text-white60 after:bg-transparent'
                        }`}
                      >
                        Plugins
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`${path}/themes`}
                        onClick={() => {
                          setActiveValue('themes');
                        }}
                        className={`block relative pt-6 pb-4 text-base sm:text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-px cursor-pointer ${
                          activeValue === 'themes'
                            ? 'text-dark dark:text-white after:bg-dark dark:after:bg-white'
                            : 'text-body dark:text-white60 after:bg-transparent'
                        }`}
                      >
                        Themes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`${path}/extensions`}
                        onClick={() => {
                          setActiveValue('extensions');
                        }}
                        className={`block relative pt-6 pb-4 text-base sm:text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-px cursor-pointer ${
                          activeValue === 'extensions'
                            ? 'text-dark dark:text-white after:bg-dark dark:after:bg-white'
                            : 'text-body dark:text-white60 after:bg-transparent'
                        }`}
                      >
                        Extensions
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <Suspense
                  fallback={
                    <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route index element={<Plugins />} exact />
                    <Route path="plugins" element={<Plugins />} />
                    <Route path="themes" element={<Themes />} />
                    <Route path="extensions" element={<Extensions />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
            <div className="pt-16 border-t border-normal dark:border-white10">
              <h2 className="mb-[30px] text-dark dark:text-white87 text-2xl font-semibold">Popular articles</h2>
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 767: 2, 900: 3 }}>
                <Masonry className="" gutter="15px">
                  {articles.map((article, i) => (
                    <div
                      className={`bg-${article.type} group mb-4 px-[34px] sm:px-[25px] pt-7 pb-[30px] rounded-10 theme-${article.type}`}
                      key={i}
                    >
                      <h4 className="mb-4 font-normal text-white text-[15px] dark:text-white87 opacity-60 group-hover:opacity-100">
                        {article.title}
                      </h4>
                      <p className="mb-6 font-semibold text-white dark:text-white87 text-[22px] sm:text-lg opacity-90 group-hover:opacity-100">
                        {article.text}
                      </p>
                      <Link
                        className="inline-flex items-center font-medium text-white dark:text-white87 text-[15px] opacity-90 group-hover:opacity-100"
                        to="/admin/knowledgebaseSingle/1"
                      >
                        Read more
                        <ArrowRightOutlined className="ltr:ml-[10px] rtl:mr-[10px]" />
                      </Link>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <div className="pt-4 text-center">
              <h2 className="mb-3 font-semibold text-dark dark:text-white87 text-[22px]">
                Still no luck? We can help!
              </h2>
              <p className="mb-[30px] text-body dark:text-white60 text-[15px] font-normal">
                Contact us and we’ll get back to you as soon as possible.
              </p>
              <Button className="mx-auto px-8 h-[50px] text-sm font-medium" type="primary" size="large">
                Submit a Request
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default KnowledgeBase;
