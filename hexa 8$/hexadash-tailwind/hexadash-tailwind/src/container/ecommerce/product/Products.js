import React, { lazy, useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Spin, Skeleton } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left';
import { PageHeader } from '../../../components/page-headers/page-headers';

import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import { sorting } from '../../../redux/product/actionCreator';
import { Button } from '../../../components/buttons/buttons';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Product() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Products',
    },
  ];
  const path = '.';
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);

  const [state, setState] = useState({
    notData: searchData,
    active: 'active',
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = (e) => {
    dispatch(sorting(e.target.value));
  };

  const [activeSort, setActiveSort] = useState('top-rated');
  const [activeView, setActiveView] = useState('grid');

  const [isDivVisible, setIsDivVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px)');

    function handleMqChange(event) {
      setIsDivVisible(event.matches);
    }

    mq.addEventListener('change', handleMqChange);
    setIsDivVisible(mq.matches);

    return () => {
      mq.removeEventListener('change', handleMqChange);
    };
  }, []);

  function handleButtonClick() {
    setIsDivVisible(!isDivVisible);
    const div = document.querySelector('.ant-layout-content');
    div.classList.toggle('overlay');
  }
  function handleClose() {
    setIsDivVisible(false);
    const div = document.querySelector('.ant-layout-content');
    div.classList.remove('overlay');
  }
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Shop"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={30}>
          <Col xxl={5} xl={6} md={12} xs={20}>
            <button
              className="mb-[15px] w-[45px] h-[45px] hidden xl:inline-flex items-center justify-center p-0 text-primary bg-white dark:bg-white10 dark:text-white87 border-1 border-white dark:border-white10 rounded-6"
              type="button"
              onClick={handleButtonClick}
            >
              <UilAlignLeft />
            </button>
            {isDivVisible || window.innerWidth >= 1200 ? (
              <div className="xl:absolute xl:top-[30px] ltr:xl:left-[15px] rtl:xl:right-[15px] xl:w-full xl:h-full content-[''] xl:z-[2]">
                <Button
                  type="link"
                  className="hidden bg-transparent border-none text-danger sm:px-0 xl:inline-flex ltr:float-right rtl:float-left z-[1] mt-[14px] ltr:sm:mr-[15px] rtl:sm:ml-[15px]"
                  style={{ marginTop: 0 }}
                  onClick={handleClose}
                >
                  <UilTimes />
                </Button>
                <Suspense
                  fallback={
                    <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                      <Skeleton paragraph={{ rows: 22 }} active />
                    </div>
                  }
                >
                  <Filters />
                </Suspense>
              </div>
            ) : null}
          </Col>
          <Col xxl={19} xl={17} md={24} xs={24}>
            <div className="items-center flex flex-wrap justify-between 3xl:justify-center mb-[30px] gap-y-[15px]">
              <div className="flex items-center flex-wrap gap-[25px] min-3xl:[&>div>div>span>span]:w-[360px] [&>div>div>span>.ant-input-affix-wrapper]:!border-none [&>div>div>span>.ant-input-affix-wrapper>input]:focus:!border-none [&>div>div]:!h-[48px] [&>div]:!w-auto [&>div]:!border-none 3xl:justify-center">
                <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search" patterns />
                <p className="mb-0 text-body dark:text-white60">Showing 1–8 of 86 results</p>
              </div>
              <div className="flex items-center flex-wrap gap-[25px] 3xl:justify-center">
                <div className="text-body dark:text-white60 flex flex-wrap items-center gap-[20px] 3xl:justify-center">
                  <span>Sort by:</span>
                  <Radio.Group
                    onChange={onSorting}
                    defaultValue="rate"
                    className="bg-white dark:bg-[#1b1d2a] px-[10px] 4xl:px-0 border-transparent dark:border-1 dark:border-white10 rounded-4"
                  >
                    <Radio.Button
                      value="rate"
                      onClick={() => {
                        setActiveSort('top-rated');
                      }}
                      className={`bg-transparent h-10 leading-[42px] px-3 border-none shadow-none before:bg-section dark:before:bg-white10 before:h-1/2 before:top-1/2 before:-translate-y-1/2 ${
                        activeSort === 'top-rated'
                          ? 'text-primary dark:text-white87'
                          : 'text-light-extra dark:text-white60'
                      }`}
                    >
                      Top Rated
                    </Radio.Button>
                    <Radio.Button
                      value="popular"
                      onClick={() => {
                        setActiveSort('popular');
                      }}
                      className={`bg-transparent h-10 leading-[42px] px-3 border-none shadow-none before:bg-section dark:before:bg-white10 before:h-1/2 before:top-1/2 before:-translate-y-1/2 ${
                        activeSort === 'popular'
                          ? 'text-primary dark:text-white87'
                          : 'text-light-extra dark:text-white60'
                      }`}
                    >
                      Popular
                    </Radio.Button>
                    <Radio.Button
                      value="time"
                      onClick={() => {
                        setActiveSort('newest');
                      }}
                      className={`bg-transparent h-10 leading-[42px] px-3 border-none shadow-none before:bg-section dark:before:bg-white10 before:h-1/2 before:top-1/2 before:-translate-y-1/2 ${
                        activeSort === 'newest'
                          ? 'text-primary dark:text-white87'
                          : 'text-light-extra dark:text-white60'
                      }`}
                    >
                      Newest
                    </Radio.Button>
                    <Radio.Button
                      value="price"
                      onClick={() => {
                        setActiveSort('price');
                      }}
                      className={`bg-transparent h-10 leading-[42px] px-3 border-none shadow-none before:bg-section dark:before:bg-white10 before:h-1/2 before:top-1/2 before:-translate-y-1/2 ${
                        activeSort === 'price' ? 'text-primary dark:text-white87' : 'text-light-extra dark:text-white60'
                      }`}
                    >
                      Price
                    </Radio.Button>
                  </Radio.Group>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to={`${path}/grid`}
                    onClick={() => {
                      setActiveView('grid');
                    }}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      activeView === 'grid'
                        ? 'bg-white dark:bg-white10 text-primary dark:text-white87'
                        : 'bg-transparent text-light dark:text-white60'
                    }`}
                  >
                    <UilApps className="w-4 h-4" />
                  </NavLink>
                  <NavLink
                    to={`${path}/list`}
                    onClick={() => {
                      setActiveView('list');
                    }}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      activeView === 'list'
                        ? 'bg-white dark:bg-white10 text-primary dark:text-white87'
                        : 'bg-transparent text-light dark:text-white60'
                    }`}
                  >
                    <UilListUl className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
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
      </main>
    </>
  );
}

export default Product;
