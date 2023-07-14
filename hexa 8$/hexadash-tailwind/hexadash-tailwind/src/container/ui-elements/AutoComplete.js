import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { AutoCompleteWrapper, GlobalUtilityStyle } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

const { TextArea } = Input;
function AutoCompletess() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'AutoComplete',
    },
  ];
  const searchData = useSelector((state) => state.headerSearchData);

  const [state, setState] = useState({
    dataSource: [],
    notData: searchData,
  });
  const { dataSource, notData } = state;

  const onSearch = (searchText) => {
    let arrayData = [];
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    if (data.length) {
      data.map((item) => arrayData.push(item.title));
    } else {
      arrayData = ['Data Not Found!'];
    }
    setState({
      dataSource: !searchText ? [] : arrayData,
    });
  };

  const patternSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      notData: data,
    });
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="AutoComplete"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle>
        <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <AutoCompleteWrapper>
            <Row gutter={25}>
              <Col md={12} sm={24} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Basic Usage
                    </h1>
                  </div>
                  <div className="auto-complete-input gap-y-[15px] inline-flex flex-col p-[25px]">
                    <AutoComplete options={dataSource} onSearch={onSearch} />
                    <AutoComplete options={dataSource} onSearch={onSearch} />
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Customize Input Component
                    </h1>
                  </div>
                  <div className="auto-complete-input p-[25px]">
                    <AutoComplete
                      customComponent={
                        <TextArea
                          placeholder="input here"
                          className="custom border-regular dark:border-white10"
                          style={{ height: 50 }}
                        />
                      }
                      options={dataSource}
                      onSearch={onSearch}
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Customize Input Component
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <AutoComplete onSearch={patternSearch} options={notData} width="100%" patterns />
                  </div>
                </div>
              </Col>
              <Col md={12} sm={24} xs={24}>
                <div className="auto-complete-input">
                  <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                    <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                      <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                        Customize Input Component
                      </h1>
                    </div>
                    <div className="p-[25px]">
                      <AutoComplete options={dataSource} onSearch={onSearch} />
                    </div>
                  </div>
                </div>

                <Cards
                  className="mb-[25px] bg-white dark:bg-white10 card-title-bb ant-card-head-px-25 ant-card-body-p-25 [&>.ant-card-body>div>div>span>span>.ant-input-suffix>button>span>svg]:text-white dark:[&>.ant-card-body>div>div>span>span>.ant-input-suffix>button>span>svg]:text-white60"
                  title="Lookup-Patterns - Uncertain Category"
                >
                  <AutoComplete options={notData} onSearch={patternSearch} width="100%" patterns patternButtons />
                </Cards>
              </Col>
            </Row>
          </AutoCompleteWrapper>
        </main>
      </GlobalUtilityStyle>
    </>
  );
}

export default AutoCompletess;
