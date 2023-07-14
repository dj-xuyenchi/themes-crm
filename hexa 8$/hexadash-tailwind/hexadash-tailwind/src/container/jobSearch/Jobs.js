import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Skeleton, Input, Select } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { PageHeader } from '../../components/page-headers/page-headers';

import { sorting, filterWithTitleLocation } from '../../redux/jobs/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Jobs() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'job',
      breadcrumbName: 'Job Search',
    },
  ];
  const { jobs } = useSelector((state) => {
    return {
      jobs: state.jobs.jobs,
    };
  });
  const path = '.';
  const dispatch = useDispatch();

  const handleSort = (value) => {
    dispatch(sorting(value, jobs));
  };

  const handleSearch = () => {
    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    dispatch(filterWithTitleLocation(title, location, jobs));
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Job Search"
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <div className="flex items-center justify-center sm:flex-col flex-wrap gap-2.5 mb-[50px] md:mb-[30px]">
          <Input
            size="large"
            prefix={<UilSearch className="w-[15px] h-[15px] text-light" />}
            className="max-w-[500px] [&>input]:text-[15px] [&>input]:text-body [&>input]:placeholder:text-light ltr:[&>span]:mr-2 rtl:[&>span]:ml-2 border-none rounded-[6px] shadow-[0_5px_20px_rgba(173,181,217,0.03)]"
            id="title"
            placeholder="Job title, skills, or company"
          />
          <Input
            id="location"
            size="large"
            className="max-w-[350px] [&>input]:text-[15px] [&>input]:text-body [&>input]:placeholder:text-light ltr:[&>span]:mr-2 rtl:[&>span]:ml-2 border-none rounded-[6px] shadow-[0_5px_20px_rgba(173,181,217,0.03)]"
            prefix={<UilLocationPoint className="w-[15px] h-[15px] text-light" />}
            placeholder="Location"
          />
          <Button
            onClick={handleSearch}
            size="large"
            type="primary"
            className="flex items-center gap-2.5 h-[48px] px-[43px] text-white text-sm rounded-[6px]"
          >
            <UilSearch className="w-[14px] h-[14px]" /> Search
          </Button>
        </div>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 22 }} active />
                </Cards>
              }
            >
              <Filters />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <div className="mb-[30px]">
              <div className="flex items-center justify-between gap-[15px] flex-wrap">
                <p className="text-[14px] text-theme-gray dark:text-white60 mb-0">Showing 1–8 of 86 results</p>
                {(window.innerWidth <= 991 && window.innerWidth >= 768) ||
                  (window.innerWidth > 575 && (
                    <div className="flex items-center flex-wrap gap-[50px] ssm:gap-y-[15px]">
                      <div className="inline-flex items-center gap-[20px]">
                        <span className="inline-block text-[14px] text-theme-gray dark:text-white60"> Sort By:</span>
                        <Select
                          className="[&>div]:border-regular [&>span]:text-theme-gray dark:[&>div]:border-white10 "
                          onChange={handleSort}
                          style={{ width: '150px', marginBottom: '0' }}
                          defaultValue="latest"
                        >
                          <Select.Option value="Latest">Latest</Select.Option>
                          <Select.Option value="Old">Old</Select.Option>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[5px] flex-wrap">
                        <NavLink
                          className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent cursor-pointer shadow-transparent text-light dark:text-white60 [&.active]:bg-white [&.active]:text-primary [&:hover]:bg-primary [&:hover]:text-white [&:active]:bg-primary [&:active]:text-white [&:focus]:bg-primary [&:focus]:text-white [&:focus-visible]:bg-primary [&:focus-visible]:text-white [&:focus-visible]:ring-2 [&:focus-visible]:ring-primary [&:focus-visible]:ring-offset-2 [&:focus-visible]:ring-offset-white"
                          to={`${path}/grid`}
                        >
                          <UilApps className="w-[16px] h-[16px]" />
                        </NavLink>
                        <NavLink
                          className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent cursor-pointer shadow-transparent text-light dark:text-white60 [&.active]:bg-white [&.active]:text-primary [&:hover]:bg-primary [&:hover]:text-white [&:active]:bg-primary [&:active]:text-white [&:focus]:bg-primary [&:focus]:text-white [&:focus-visible]:bg-primary [&:focus-visible]:text-white [&:focus-visible]:ring-2 [&:focus-visible]:ring-primary [&:focus-visible]:ring-offset-2 [&:focus-visible]:ring-offset-white"
                          to={`${path}/list`}
                        >
                          <UilListUl className="w-[16px] h-[16px]" />
                        </NavLink>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <Suspense
              fallback={
                <div className="spin d-flex align-center-v">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route index element={<Grid />} />
                <Route path="grid" element={<Grid />} />
                <Route path="list" element={<List />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Jobs;
