import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import PropTypes from 'prop-types';
import React from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

const NotificationBox = React.memo(() => {
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

  const content = (
    <UserActionDropDown className="min-sm:min-w-[370px] sm:max-w-full">
      <Heading
        as="h5"
        className="flex items-center justify-center text-sm rounded-md bg-section dark:bg-white10 h-[50px] p-[10px]"
      >
        <span className="title-text ltr:mr-2.5 rtl:ml-2.5">
          Notifications
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-success ltr:ml-3 rtl:mr-3 dark:text-white87">
            3
          </span>
        </span>
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
        renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
      >
        <ul className="ltr:mr-[17px] rtl:ml-[17px]">
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full ltr:pl-3 rtl:pr-3 py-3.5 text-body dark:text-white60 hover:bg-white dark:hover:bg-white10 hover:shadow-custom dark:shadow-none dark:rounded-4"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-transparent text-primary ltr:mr-4 rtl:ml-4">
                  <UilHdd className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <Heading
                      as="h5"
                      className="flex items-center justify-between mb-0.5 text-[#5a5f7d] dark:text-white87 text-sm font-normal"
                    >
                      <span className="text-primary ltr:mr-1.5 rtl:ml-1.5 font-medium">James</span> sent you a message
                    </Heading>
                    <p className="mb-0 text-xs text-[#adb4d2] dark:text-white60">5 hours ago</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center justify-center bg-[#ff4d4f] w-1.5 h-1.5 ltr:ml-3 rtl:mr-3 rounded-full" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full ltr:pl-3 rtl:pr-3 py-3.5 text-body dark:text-white60 dark:hover:bg-white10 hover:shadow-custom dark:rounded-4"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-transparent text-primary ltr:mr-4 rtl:ml-4">
                  <UilUpload className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <Heading
                      as="h5"
                      className="flex items-center justify-between mb-0.5 text-[#5a5f7d] dark:text-white87 text-sm font-normal"
                    >
                      <span className="text-primary ltr:mr-1.5 rtl:ml-1.5 font-medium">James</span> sent you a message
                    </Heading>
                    <p className="mb-0 text-xs text-[#adb4d2] dark:text-white60">5 hours ago</p>
                  </div>
                  <span className="inline-flex items-center justify-center bg-[#ff4d4f] w-1.5 h-1.5 ltr:ml-3 rtl:mr-3 rounded-full" />
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full ltr:pl-3 rtl:pr-3 py-3.5 text-body dark:text-white60 hover:bg-white dark:hover:bg-white10 hover:shadow-custom dark:shadow-none dark:rounded-4"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-transparent text-primary ltr:mr-4 rtl:ml-4">
                  <UilUpload className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <Heading
                      as="h5"
                      className="flex items-center justify-between mb-0.5 text-[#5a5f7d] dark:text-white87 text-sm font-normal"
                    >
                      <span className="text-primary ltr:mr-1.5 rtl:ml-1.5 font-medium">James</span> sent you a message
                    </Heading>
                    <p className="mb-0 text-xs text-[#adb4d2] dark:text-white60">5 hours ago</p>
                  </div>
                  <span className="inline-flex items-center justify-center bg-[#ff4d4f] w-1.5 h-1.5 ltr:ml-3 rtl:mr-3 rounded-full" />
                </div>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full ltr:pl-3 rtl:pr-3 py-3.5 text-body dark:text-white60 hover:bg-white dark:hover:bg-white10 hover:shadow-custom dark:shadow-none dark:rounded-4"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-transparent text-primary ltr:mr-4 rtl:ml-4">
                  <UilUpload className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <Heading
                      as="h5"
                      className="flex items-center justify-between mb-0.5 text-[#5a5f7d] dark:text-white87 text-sm font-normal"
                    >
                      <span className="text-primary ltr:mr-1.5 rtl:ml-1.5 font-medium">James</span> sent you a message
                    </Heading>
                    <p className="mb-0 text-xs text-[#adb4d2] dark:text-white60">5 hours ago</p>
                  </div>
                  <span className="inline-flex items-center justify-center bg-[#ff4d4f] w-1.5 h-1.5 ltr:ml-3 rtl:mr-3 rounded-full" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </Scrollbars>
      <Link
        to="#"
        className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-primary hover:text-dark dark:hover:text-white60 dark:text-white87 mx-[-15px] mb-[-15px] rounded-b-6"
      >
        See all incoming activity
      </Link>
    </UserActionDropDown>
  );

  return (
    <div className="flex mx-3">
      <Popover placement="bottomLeft" content={content} action="click">
        <Link
          to="#"
          className="flex relative before:absolute before:bg-[#ff4d4f] before:w-1.5 before:h-1.5 before:rounded-full before:-top-1 before:right-0 before:shadow-dot"
        >
          <ReactSVG
            className="text-[#a0a0a0] dark:text-white60"
            src={require('../../../static/img/icon/bell.svg').default}
          />
        </Link>
      </Popover>
    </div>
  );
});

export default NotificationBox;
