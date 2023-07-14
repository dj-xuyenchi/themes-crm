import React from 'react';
import { Row, Col, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { TimeLinePointerIconWrap, TimelineNormalWrap, TimelineBoxWrap } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';

import {
  SwRocket,
  SwShieldCheck,
  SwPenTool,
  SwNotification,
  SwUsers,
  SwLayers,
  SwPicture,
  SwClock,
  SwEllipse,
} from '../../components/utilities/icons';

function Timelines() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Timelines',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Timelines"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col lg={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <TimeLinePointerIconWrap className="p-[25px]">
                <Timeline>
                  <Timeline.Item className="primary" dot={<SwRocket size={20} color="#FB3586" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="info" dot={<SwShieldCheck size={20} color="#2C99FF" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="warning" dot={<SwPenTool size={24} color="#fa8b0c" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="pink" dot={<SwNotification size={17} color="#FF69A5" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="success" dot={<SwUsers size={21} color="#20c997" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="danger" dot={<SwLayers size={21} color="#ff4d4f" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="primary" dot={<SwPicture size={21} color="#FB3586" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="pink" dot={<SwClock size={21} color="#ff69a5" />}>
                    <h3>02:30 PM</h3>
                    <p className="text-body dark:text-white60">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                </Timeline>
              </TimeLinePointerIconWrap>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basics
                </h1>
              </div>
              <TimelineNormalWrap className="p-[25px]">
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </TimelineNormalWrap>
            </div>
            <TimelineNormalWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Alternative
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline mode="alternate">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo.
                    </Timeline.Item>
                    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                      Technical testing 2015-09-01
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineNormalWrap>
            <TimelineNormalWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Custom
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                      Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineNormalWrap>
          </Col>
          <Col lg={12} xs={24}>
            <TimelineNormalWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Timeline one
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline>
                    <Timeline.Item className="active" dot={<SwEllipse size={10} color="#ADB4D2" />}>
                      <div className="timeline-content-inner flex items-center justify-content-between">
                        <div className="timeline-content-text">
                          <p className="text-primary">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                          </p>
                        </div>
                        <span className="timeline-content-time">6:00 am</span>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#FB3586" />}>
                      <div className="timeline-content-inner flex items-center justify-content-between">
                        <div className="timeline-content-text">
                          <p className="text-body dark:text-white60">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                          </p>
                        </div>
                        <span className="timeline-content-time">1 hrs</span>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                      <div className="timeline-content-inner flex items-center justify-content-between">
                        <div className="timeline-content-text">
                          <p className="text-body dark:text-white60">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                          </p>
                        </div>
                        <span className="timeline-content-time">2 days</span>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                      <div className="timeline-content-inner flex items-center justify-content-between">
                        <div className="timeline-content-text">
                          <p className="text-body dark:text-white60">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                          </p>
                        </div>
                        <span className="timeline-content-time">3 weeks</span>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                      <div className="timeline-content-inner flex items-center justify-content-between">
                        <div className="timeline-content-text">
                          <p className="text-body dark:text-white60">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                          </p>
                        </div>
                        <span className="timeline-content-time">2 months</span>
                      </div>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineNormalWrap>

            <TimelineBoxWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Timeline Two
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline mode="alternate">
                    <Timeline.Item dot={<SwEllipse size={10} color="#ADB4D2" />}>
                      <h2>10:00 AM</h2>
                      <div className="content-box">
                        <p>
                          Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                          the industry`s standard dummy text ever since the,
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#FB3586" />}>
                      <h2>10:00 AM</h2>
                      <div className="content-box">
                        <p>
                          Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                          the industry`s standard dummy text ever since the,
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                      <h2>10:00 AM</h2>
                      <div className="content-box">
                        <p>
                          Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                          the industry`s standard dummy text ever since the,
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                      <h2>10:00 AM</h2>
                      <div className="content-box">
                        <p>
                          Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                          the industry`s standard dummy text ever since the,
                        </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                      <h2>10:00 AM</h2>
                      <div className="content-box">
                        <p>
                          Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                          the industry`s standard dummy text ever since the,
                        </p>
                      </div>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineBoxWrap>
            <TimelineNormalWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Color
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 2</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineNormalWrap>

            <TimelineNormalWrap>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Right Alternate
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Timeline mode="right">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                      Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </TimelineNormalWrap>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Timelines;
