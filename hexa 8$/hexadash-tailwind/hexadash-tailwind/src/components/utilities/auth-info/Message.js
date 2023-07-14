/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import React from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

const MessageBox = React.memo(() => {
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
    <UserActionDropDown className="pt-[5px]">
      <Heading
        as="h5"
        className="flex items-center justify-center text-sm rounded-md bg-section dark:bg-white10 h-[50px] p-[10px]"
      >
        <span className="title-text ltr:mr-2.5 rtl:ml-2.5">
          Messages
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs text-white rounded-full ltr:ml-3 rtl:mr-3 bg-success dark:text-white87">
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
        <ul className="p-0">
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full px-3 py-3.5 text-body dark:text-white60 transition-[0.3s] hover:text-primary hover:bg-white dark:hover:bg-white06 hover:shadow-custom dark:shadow-none dark:hover:shadow-[0_5px_30px_rgba(1,4,19,.20)] dark:rounded-4"
            >
              <figure className="inline-flex w-full mb-0 align-top">
                <img className="max-w-[40px] h-fit" src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                <figcaption className="mx-4 -mt-1">
                  <Heading as="h5" className="flex items-center justify-between mb-0.5 text-sm text-current">
                    Software <span className="text-xs font-normal text-success">3 hrs ago</span>
                  </Heading>
                  <div>
                    <span className="ltr:pl-0 rtl:pr-0 ltr:mr-4 rtl:ml-4 min-w-[216px]">
                      Lorem ipsum dolor amet cosec...
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 text-white rounded-full ltr:ml-3 rtl:mr-3 bg-success dark:text-white87 text-10">
                      3
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full px-3 py-3.5 text-body dark:text-white60 transition-[0.3s] hover:text-primary hover:bg-white dark:hover:bg-white06 hover:shadow-custom dark:shadow-none dark:hover:shadow-[0_5px_30px_rgba(1,4,19,.20)] dark:rounded-4"
            >
              <figure className="inline-flex w-full mb-0 align-top">
                <img className="max-w-[40px] h-fit" src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                <figcaption className="mx-4 -mt-1">
                  <Heading as="h5" className="flex items-center justify-between mb-0.5 text-sm text-current">
                    Software <span className="text-xs font-normal text-success">3 hrs ago</span>
                  </Heading>
                  <div>
                    <span className="ltr:pl-0 rtl:pr-0 ltr:mr-4 rtl:ml-4 min-w-[216px]">
                      Lorem ipsum dolor amet cosec...
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 text-white rounded-full ltr:ml-3 rtl:mr-3 bg-success dark:text-white87 text-10">
                      3
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full px-3 py-3.5 text-body dark:text-white60 transition-[0.3s] hover:text-primary hover:bg-white dark:hover:bg-white06 hover:shadow-custom dark:shadow-none dark:hover:shadow-[0_5px_30px_rgba(1,4,19,.20)]"
            >
              <figure className="inline-flex w-full mb-0 align-top">
                <img className="max-w-[40px] h-fit" src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                <figcaption className="mx-4 -mt-1">
                  <Heading as="h5" className="flex items-center justify-between mb-0.5 text-sm text-current">
                    Software <span className="text-xs font-normal text-success">3 hrs ago</span>
                  </Heading>
                  <div>
                    <span className="ltr:pl-0 rtl:pr-0 ltr:mr-4 rtl:ml-4 min-w-[216px]">
                      Lorem ipsum dolor amet cosec...
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 text-white rounded-full ltr:ml-3 rtl:mr-3 bg-success dark:text-white87 text-10">
                      3
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="#"
              className="group relative block w-full px-3 py-3.5 text-body dark:text-white60 transition-[0.3s] hover:text-primary hover:bg-white dark:hover:bg-white06 hover:shadow-custom dark:shadow-none dark:hover:shadow-[0_5px_30px_rgba(1,4,19,.20)]"
            >
              <figure className="inline-flex w-full mb-0 align-top">
                <img className="max-w-[40px] h-fit" src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                <figcaption className="mx-4 -mt-1">
                  <Heading as="h5" className="flex items-center justify-between mb-0.5 text-sm text-current">
                    Software <span className="text-xs font-normal text-success">3 hrs ago</span>
                  </Heading>
                  <div>
                    <span className="ltr:pl-0 rtl:pr-0 ltr:mr-4 rtl:ml-4 min-w-[216px]">
                      Lorem ipsum dolor amet cosec...
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 text-white rounded-full ltr:ml-3 rtl:mr-3 bg-success dark:text-white87 text-10">
                      3
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
        </ul>
      </Scrollbars>
      <Link
        to="#"
        className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-primary hover:text-dark dark:hover:text-white60 dark:text-white87 mx-[-15px] mb-[-15px] rounded-b-6"
      >
        See all messages
      </Link>
    </UserActionDropDown>
  );

  return (
    <div className="flex mx-3">
      <Popover placement="bottomLeft" content={content} action="click">
        <Link
          to="#"
          className="flex relative before:absolute before:bg-success before:w-1.5 before:h-1.5 before:rounded-full before:-top-1 before:right-0 before:shadow-dot"
        >
          <ReactSVG
            className="text-[#a0a0a0] dark:text-white60"
            src={require('../../../static/img/icon/envelope.svg').default}
          />
        </Link>
      </Popover>
    </div>
  );
});

MessageBox.propTypes = {
  rtl: PropTypes.bool,
};

export default MessageBox;
