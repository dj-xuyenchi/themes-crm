import React from 'react';
import { Row, Col, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../../styled';
import { Button } from '../../../../components/buttons/buttons';
import Heading from '../../../../components/heading/heading';

function Notification() {
  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
      <div className="py-[18px] px-[25px] sm:px-[15px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
        <Heading as="h4" className="mb-0 text-lg font-medium">
          Notifications
        </Heading>
        <span className="mb-0.5 text-light dark:text-white60 text-13 font-normal">
          Choose What Notification you will Receive
        </span>
      </div>
      <div className="p-[25px] sm:px-[15px]">
        <GlobalUtilityStyle>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <div className="notification-box-single">
                <div className="bg-regularBG dark:bg-regularBGdark p-[25px] sm:px-[15px] border dark:border-white10 rounded-[10px]">
                  <div className="flex items-center justify-between h-[50px]">
                    <Heading className="text-light dark:text-white60 text-[15px] font-medium" as="h4">
                      Notifications
                    </Heading>
                    <Link className="text-info text-[13px]" to="#">
                      Toggle all
                    </Link>
                  </div>
                  <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.05)] rounded-[10px]">
                    <nav>
                      <ul className="mb-0">
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Company News
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Meetups Near you
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Opportunities
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Weekly News Letters
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="notification-box-single">
                <div className="bg-regularBG dark:bg-regularBGdark p-[25px] sm:px-[15px] border dark:border-white10 rounded-[10px]">
                  <div className="flex items-center justify-between h-[50px]">
                    <Heading className="text-light text-[15px] font-medium" as="h4">
                      Account Activity
                    </Heading>
                    <Link className="text-info text-[13px]" to="#">
                      Toggle all
                    </Link>
                  </div>
                  <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.05)] rounded-[10px]">
                    <nav>
                      <ul className="mb-0">
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Company News
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Meetups Near you
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Opportunities
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li className="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular dark:border-white10 [&>button]:shadow-none gap-[15px]">
                          <div>
                            <Heading className="mb-0.5 text-body dark:text-white60 text-sm font-medium" as="h4">
                              Weekly News Letters
                            </Heading>
                            <p className="mb-0 text-light dark:text-white60">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="flex items-center flex-wrap gap-[15px] mt-[50px] mb-[25px]">
            <Button size="default" type="primary" className="h-11 px-[20px]">
              Update Email Notifications
            </Button>
            <Button
              size="default"
              type="extra-light"
              className="h-11 px-[20px] bg-transparent dark:text-white87 dark:border-white10 dark:hover:text-primary dark:hover:border-primary"
            >
              Cancel
            </Button>
          </div>
        </GlobalUtilityStyle>
      </div>
    </div>
  );
}

export default Notification;
