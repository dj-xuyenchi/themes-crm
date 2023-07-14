import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Badge, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import PrivetChat from './overview/PrivetChat';
import GroupChat from './overview/GroupChat';
import AllContacts from './overview/AllContacts';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { PageHeader } from '../../components/page-headers/page-headers';

const SingleChat = lazy(() => import('./overview/singleChat'));
const SingleGroup = lazy(() => import('./overview/SingleGroupChat'));

function ChatApp() {
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  function renderThumb({ style }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  }
  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="[&>div]:bg-regular dark:[&>div]:bg-[#32333f]" style={thumbStyle} />;
  };
  function renderView({ style }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  }
  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };
  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };
  // Initialize Default Sales Location
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Chat',
    },
  ];
  const { searchData } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      searchData: state.headerSearchData,
    };
  });
  const [state, setState] = useState({
    search: searchData,
    me: 'woadud@gmail.com',
  });

  const { notData } = state;

  const patternSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      search: data,
    });
  };

  const [activeChatbar, setActiveChatbar] = useState('private');

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Dashboard"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={30}>
          <Col xxl={7} lg={8} xs={24}>
            <div className="bg-white dark:bg-white10  min-h-[550px] py-[25px] rounded-[10px] shadow-[0_5px_20px_rgba(146,153,184,0.01)] lg:mb-[30px]">
              <div className="px-[25px] ssm:px-[15px] [&>div>div>span>.ant-select-selection-search-input]:bg-normalBG dark:[&>div>div>span>.ant-select-selection-search-input]:bg-white10 [&>div>div>span>.ant-select-selection-search-input]:h-[46px] [&>div>div>span>.ant-select-selection-search-input]:border-none [&>div>div>span>.ant-select-selection-search-input>input]:bg-transparent dark:[&>div>div>span>.ant-select-selection-search-input>input]:bg-transparent [&>div>div>span>.ant-input-affix-wrapper>.ant-input-suffix>span>svg]:!text-theme-gray dark:[&>div>div>span>.ant-input-affix-wrapper>.ant-input-suffix>span>svg]:!text-white60">
                <AutoComplete onSearch={patternSearch} dataSource={notData} width="100%" patterns />
              </div>
              <nav className="px-[25px] ssm:px-[15px]">
                <ul className="flex items-center justify-between gap-3 flex-wrap mb-3 pt-[30px] xs:text-[13px] border-b  border-regular dark:border-white10">
                  <li>
                    <NavLink
                      to="./private/rofiq@gmail.com"
                      onClick={() => {
                        setActiveChatbar('private');
                      }}
                      className={`relative block pb-[18px] after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:h-[1px] after:w-full ${
                        activeChatbar === 'private'
                          ? 'text-primary font-medium after:bg-primary'
                          : 'text-light dark:text-[#a4a5aa] after:bg-transparent'
                      }`}
                    >
                      Private Chat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="./group/1"
                      onClick={() => {
                        setActiveChatbar('group');
                      }}
                      className={`relative block pb-[18px] after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:h-[1px] after:w-full ${
                        activeChatbar === 'group'
                          ? 'text-primary font-medium after:bg-primary'
                          : 'text-light dark:text-[#a4a5aa] after:bg-transparent'
                      }`}
                    >
                      Group Chat
                      <Badge className="ltr:ml-1.5 rtl:mr-1.5" count={3} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="./all/rofiq@gmail.com"
                      onClick={() => {
                        setActiveChatbar('all');
                      }}
                      className={`relative block pb-[18px] after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:h-[1px] after:w-full ${
                        activeChatbar === 'all'
                          ? 'text-primary font-medium after:bg-primary'
                          : 'text-light dark:text-[#a4a5aa] after:bg-transparent'
                      }`}
                    >
                      All Contacts
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="h-[495px] ltr:3xl:[&>div>div]:!mr-0 rtl:3xl:[&>div>div]:!ml-0">
                <Scrollbars
                  autoHide
                  autoHideTimeout={500}
                  autoHideDuration={200}
                  renderThumbVertical={renderThumb}
                  renderView={renderView}
                  renderTrackVertical={renderTrackVertical}
                  renderTrackHorizontal={(props) => (
                    <div {...props} style={{ display: 'none' }} className="track-horizontal" />
                  )}
                >
                  <Suspense
                    fallback={
                      <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                        <Skeleton avatar paragraph={{ rows: 10 }} active />
                      </div>
                    }
                  >
                    <Routes>
                      <Route path="private/*" element={<PrivetChat />} />
                      <Route path="group/*" element={<GroupChat />} />
                      <Route path="all/*" element={<AllContacts />} />
                    </Routes>
                  </Suspense>
                </Scrollbars>
              </div>
            </div>
          </Col>
          <Col xxl={17} lg={16} xs={24}>
            <Suspense
              fallback={
                <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                  <Skeleton avatar paragraph={{ rows: 10 }} active />
                </div>
              }
            >
              <Routes>
                <Route path="private/:id" element={<SingleChat />} />
                <Route path="all/:id" element={<SingleChat />} />
                <Route path="group/:id" element={<SingleGroup />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </main>
    </>
  );
}

ChatApp.propTypes = {
  match: PropTypes.object,
};
export default ChatApp;
