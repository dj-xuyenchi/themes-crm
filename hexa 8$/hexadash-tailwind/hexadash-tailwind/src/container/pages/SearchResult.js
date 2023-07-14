import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

function SearchResult() {
  const [activeValue, setActiveValue] = useState('all');

  const searchData = useSelector((state) => state.headerSearchData);
  const [state, setState] = useState({
    notData: searchData,
    activeClass: 'all',
    current: 0,
    pageSize: 0,
  });
  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <>
      <PageHeader title="Search Result" className="flex justify-between items-center bg-transparent px-8 py-[18px]" />

      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xs={24}>
            <div className="[&>.ant-select>.ant-select-selector]:border-none [&>.ant-select>.ant-select-selector]:h-[50px] [&>.ant-select>.ant-select-selector>.ant-select-selection-search>.ant-input-affix-wrapper]:h-[50px]">
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Type and search"
                width="40%"
                patterns
              />
            </div>
          </Col>
          <Col xs={24}>
            <div className="mt-[9px] py-[22px]">
              <ul className="flex flex-wrap items-center mb-0">
                <li className="ltr:mr-[10px] rtl:ml-[10px] mb-[10px]">
                  <Link
                    to="#"
                    onClick={() => setActiveValue('all')}
                    className={`px-[15px] py-[5px] text-13 font-medium rounded-[5px] shadow[0_3px_6px_rgba(116,116,116,0.02)] ${
                      activeValue === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-white06 text-light dark:text-white60'
                    }`}
                  >
                    All
                  </Link>
                </li>
                <li className="ltr:mr-[10px] rtl:ml-[10px] mb-[10px]">
                  <Link
                    to="#"
                    onClick={() => setActiveValue('webDesign')}
                    className={`inline-block px-[15px] py-[5px] text-13 font-medium rounded-[5px] shadow[0_3px_6px_rgba(116,116,116,0.02)] ${
                      activeValue === 'webDesign'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-white06 text-light dark:text-white60'
                    }`}
                  >
                    Web Design
                  </Link>
                </li>
                <li className="ltr:mr-[10px] rtl:ml-[10px] mb-[10px]">
                  <Link
                    to="#"
                    onClick={() => setActiveValue('uiDesign')}
                    className={`inline-block px-[15px] py-[5px] text-13 font-medium rounded-[5px] shadow[0_3px_6px_rgba(116,116,116,0.02)] ${
                      activeValue === 'uiDesign'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-white06 text-light dark:text-white60'
                    }`}
                  >
                    UI Design
                  </Link>
                </li>
                <li className="ltr:mr-[10px] rtl:ml-[10px] mb-[10px]">
                  <Link
                    to="#"
                    onClick={() => setActiveValue('wireframe')}
                    className={`inline-block px-[15px] py-[5px] text-13 font-medium rounded-[5px] shadow[0_3px_6px_rgba(116,116,116,0.02)] ${
                      activeValue === 'wireframe'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-white06 text-light dark:text-white60'
                    }`}
                  >
                    Wireframe
                  </Link>
                </li>
                <li className="ltr:mr-[10px] rtl:ml-[10px] mb-[10px]">
                  <Link
                    to="#"
                    onClick={() => setActiveValue('presentation')}
                    className={`inline-block px-[15px] py-[5px] text-13 font-medium rounded-[5px] shadow[0_3px_6px_rgba(116,116,116,0.02)] ${
                      activeValue === 'presentation'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-white06 text-light dark:text-white60'
                    }`}
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24}>
            <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
              <div className="max-w-5xl mb-[18px] pb-6 border-b border-regular dark:border-white10">
                <Row>
                  <Col md={13} xs={24}>
                    <p className="mb-0 text-body dark:text-white60 test-base">
                      <span className="fon:t-semibold ltr:mr-1 rtl:ml-1 text-dark dark:text-white87">207</span>
                      results found for
                      <span className="ml-1 font-semibold text-dark dark:text-white87">“Keyword”</span>
                    </p>
                  </Col>
                  <Col md={11} xs={24}>
                    <p className="mb-0 text-end md:text-start md:mt-[10px] text-body dark:text-white60 text-15">
                      Showing 1-10 of 76 results
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="result-list-content">
                <Row>
                  <Col md={24}>
                    <nav>
                      <ul className="mb-[30px] border-b border-regular dark:border-white10">
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-8">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                        <li className="mb-7">
                          <Heading className="mb-2 text-base font-medium text-dark dark:text-white87" as="h6">
                            <span className="font-semibold text-primary">Keyword</span> installing lorem multivendor
                            marketplace
                          </Heading>
                          <p className="mb-0 text-body dark:text-white60">
                            Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr,sed
                            diam nonumy eirmod...
                          </p>
                        </li>
                      </ul>
                    </nav>
                  </Col>
                </Row>
              </div>
              <PaginationStyle>
                <div className="ant-pagination-custom-style ant-pagination-item-bg-active ant-pagination-item-dark ant-pagination-item-leading-none ant-pagination-selector-px-7 ant-pagination-selector-height-32 ant-pagination-selector-text-13 ant-select-item-dropdown-option-dark">
                  <Pagination
                    onChange={onHandleChange}
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    pageSize={10}
                    defaultCurrent={1}
                    total={40}
                  />
                </div>
              </PaginationStyle>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default SearchResult;
