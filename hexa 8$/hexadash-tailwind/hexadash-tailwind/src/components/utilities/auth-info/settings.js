import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { SettingDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

const Settings = React.memo(() => {
  const content = (
    <SettingDropDown>
      <div className="max-w-[700px] sm:max-w-full">
        <Row gutter="10">
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img
                className="h-fit ltr:mr-4 rtl:ml-4"
                src={require('../../../static/img/icon/014-document.png')}
                alt=""
              />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  All Features
                </Heading>
                <p className="mb-0">Introducing Increment subscriptions </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img
                className="h-fit ltr:mr-4 rtl:ml-4"
                src={require('../../../static/img/icon/015-color-palette.png')}
                alt=""
              />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  Themes
                </Heading>
                <p className="mb-0">Third party themes that are compatible </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img className="h-fit ltr:mr-4 rtl:ml-4" src={require('../../../static/img/icon/010-home.png')} alt="" />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  Payments
                </Heading>
                <p className="mb-0">We handle billions of dollars </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img
                className="h-fit ltr:mr-4 rtl:ml-4"
                src={require('../../../static/img/icon/017-video-camera.png')}
                alt=""
              />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  Design Mockups
                </Heading>
                <p className="mb-0">Share planning visuals with clients </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img
                className="h-fit ltr:mr-4 rtl:ml-4"
                src={require('../../../static/img/icon/013-document-1.png')}
                alt=""
              />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  Content Planner
                </Heading>
                <p className="mb-0">Centralize content gathering and editing</p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12} xs={24}>
            <figure className="flex items-start px-4 py-5 mb-0 setting-dropdown__single hover:shadow-action">
              <img
                className="h-fit ltr:mr-4 rtl:ml-4"
                src={require('../../../static/img/icon/007-microphone-1.png')}
                alt=""
              />
              <figcaption>
                <Heading className="mb-0.5 -mt-1 text-[15px] font-medium" as="h5">
                  Diagram Maker
                </Heading>
                <p className="mb-0">Plan user flows & test scenarios</p>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </div>
    </SettingDropDown>
  );

  return (
    <div className="flex mx-3 hexadash-nav-actions__settings">
      <Popover placement="bottomRight" content={content} action="click">
        <Link to="#" className="flex hexadash-nav-action-link">
          <ReactSVG
            className="text-[#a0a0a0] dark:text-white60"
            src={require('../../../static/img/icon/setting.svg').default}
          />
        </Link>
      </Popover>
    </div>
  );
});

export default Settings;
