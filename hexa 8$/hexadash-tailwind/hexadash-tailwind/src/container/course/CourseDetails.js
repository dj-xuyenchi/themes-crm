import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse } from 'antd';
import UilPlay from '@iconscout/react-unicons/icons/uil-play';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilBook from '@iconscout/react-unicons/icons/uil-book-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilAward from '@iconscout/react-unicons/icons/uil-award';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';
import ModalVideo from 'react-modal-video';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import '../profile/myProfile/overview/video-modal.css';

const { Panel } = Collapse;
const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'course',
    breadcrumbName: 'Courses',
  },
];

const lectures = [
  {
    id: '1',
    title: 'Getting Started',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '2',
    title: 'User Interface Vs User Experience',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '3',
    title: 'Design Fundamental',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '4',
    title: 'Colour Theory',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '5',
    title: 'Typography',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '6',
    title: 'Live Project 01',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '7',
    title: 'Live Project 02',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
];

function CourseDetails() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Course"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col lg={12} xs={24} className="lg:mb-[30px]">
            <div>
              <h2 className="text-dark dark:text-white87 text-3xl font-semibold">UI/UX Design Masters Course</h2>
              <div>
                <p className="text-base text-body dark:text-white60 mb-[28px]">
                  Many support queries and technical questions will already be answered in supporting documentation such
                  as and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                </p>
              </div>
              <h2 className="text-dark dark:text-white87 mt-[30px] mb-[14px] text-[22px] font-semibold">
                About Instructor
              </h2>
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[50px] rounded-full"
                  src={require(`../../static/img/users/14.jpg`)}
                  alt="hexadash course"
                />
                <div>
                  <h5 className="text-dark dark:text-white87 mb-[3px] text-base font-medium leading-[20px]">
                    David Warner
                  </h5>
                  <span className="text-[15px] text-body dark:text-white60">
                    Senior UI/UX Designer at Dribble, Top Rated Freelancer at Upwork
                  </span>
                </div>
              </div>
              <h2 className="text-dark dark:text-white87 mt-[30px] mb-[14px] text-[22px] font-semibold">
                About This Course
              </h2>
              <p className="text-base text-body dark:text-white60 mb-[28px]">
                User interface design or user interface engineering is the design of user interfaces for machines and
                software, such as computers, home appliances, mobile devices, and other electronic devices, with the
                focus on maximizing usability and the user experience.
              </p>
              <p className="text-base text-body dark:text-white60 mb-0">
                User interface design or user interface engineering is the design of user interfaces for machines and
                software, such as computers, home appliances, mobile devices, and other electronic devices, with the
                focus on maximizing.
              </p>
              <h2 className="text-dark dark:text-white87 mt-[30px] mb-[14px] text-[22px] font-semibold">
                What You Will Learn
              </h2>
              <ul className="flex flex-col gap-3 mb-0">
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  Basic to Advance knowledge of UI/UX Design
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  UI/UX Design Fundamental
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  Colour Theory
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  Typography
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  Design Systems
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  Alignment
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  User Research
                </li>
                <li className="relative pl-4 text-body dark:text-white60 text-base after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-dark dark:after:bg-whiteDark after:rounded-full">
                  User Flow
                </li>
              </ul>
              <h2 className="text-dark dark:text-white87 mt-[30px] mb-[14px] text-[22px] font-semibold">
                Course content
              </h2>
              <div>
                <Collapse
                  className="bg-transparent [&>.ant-collapse-item]:bg-white [&>.ant-collapse-item:last-child]:bg-regularBG dark:[&>.ant-collapse-item]:bg-white06 dark:[&>.ant-collapse-item:last-child]:bg-white10 [&>.ant-collapse-item]:mb-[5px] [&>.ant-collapse-item]:rounded-[5px] [&>.ant-collapse-item]:border [&>.ant-collapse-item]:border-regular dark:[&>.ant-collapse-item]:border-whiteDark [&>.ant-collapse-item]:shadow-[0_15px_40px_rgba_(173,181,217)] [&>.ant-collapse-item>.ant-collapse-header]:text-[15px] [&>.ant-collapse-item>.ant-collapse-header]:font-medium [&>.ant-collapse-item>.ant-collapse-header]:text-dark dark:[&>.ant-collapse-item>.ant-collapse-header]:text-white87 [&>.ant-collapse-item>.ant-collapse-header]:py-[15px] [&>.ant-collapse-item>.ant-collapse-header]:px-[25px] [&>.ant-collapse-item>.ant-collapse-header]:border-b [&>.ant-collapse-item>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-item>.ant-collapse-header]:border-white06 [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:px-[25px] [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:py-[20px] [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:pb-[12px]"
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) =>
                    isActive ? (
                      <UilMinus className="w-[14px] h-[14px] text-light-extra dark:text-white60 ltr:mr-2 rtl:ml-2" />
                    ) : (
                      <UilPlus className="w-[14px] h-[14px] text-light-extra dark:text-white60 ltr:mr-2 rtl:ml-2" />
                    )
                  }
                >
                  {lectures.map((lecture) => (
                    <Panel
                      header={`${lecture.title}`}
                      key={lecture.id}
                      extra={
                        <div className="flex items-center gap-x-[70px] xl:gap-x-[30px] sm:gap-x-[10px] ml-2.5">
                          <span className="text-sm text-body dark:text-white60 font-normal">03 Lectures</span>
                          <span className="text-sm text-body dark:text-white60 font-normal">15:00</span>
                        </div>
                      }
                    >
                      <ul className="flex items-center flex-col gap-y-6">
                        {lecture.classes.map((singleClass, index) => (
                          <li className="w-full" key={index}>
                            <Link className="flex items-center gap-2" onClick={() => setOpen(true)} to="#">
                              <UilPlay className="w-4 h-4 text-primary" />
                              <span className="text-body dark:text-white60 text-[15px]">{singleClass.classTitle}</span>
                              <div className="flex items-center ml-auto gap-x-[80px] xl:gap-x-[30px] sm:gap-x-[10px]">
                                <p className="text-sm text-primary mb-0">Preview</p>
                                <span className="text-sm text-body dark:text-white60">5:00</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Panel>
                  ))}
                </Collapse>
              </div>
              <h2 className="text-dark dark:text-white87 mt-[30px] mb-[14px] text-[22px] font-semibold">FAQ </h2>
              <div>
                <Collapse
                  className="bg-transparent [&>.ant-collapse-item]:bg-white [&>.ant-collapse-item:last-child]:bg-regularBG dark:[&>.ant-collapse-item]:bg-white06 dark:[&>.ant-collapse-item:last-child]:bg-white10 [&>.ant-collapse-item]:mb-[5px] [&>.ant-collapse-item]:rounded-[5px] [&>.ant-collapse-item]:border [&>.ant-collapse-item]:border-regular dark:[&>.ant-collapse-item]:border-whiteDark [&>.ant-collapse-item]:shadow-[0_15px_40px_rgba_(173,181,217)] [&>.ant-collapse-item>.ant-collapse-header]:text-[15px] [&>.ant-collapse-item>.ant-collapse-header]:font-medium [&>.ant-collapse-item>.ant-collapse-header]:text-dark dark:[&>.ant-collapse-item>.ant-collapse-header]:text-white87 [&>.ant-collapse-item>.ant-collapse-header]:py-[15px] [&>.ant-collapse-item>.ant-collapse-header]:px-[25px] [&>.ant-collapse-item>.ant-collapse-header]:border-b [&>.ant-collapse-item>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-item>.ant-collapse-header]:border-white10 [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:px-[25px] [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:py-[24px] [&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]:pb-[30px]"
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) =>
                    isActive ? (
                      <UilMinus className="w-[14px] h-[14px] text-light-extra dark:text-white60 ltr:mr-2 rtl:ml-2" />
                    ) : (
                      <UilPlus className="w-[14px] h-[14px] text-light-extra dark:text-white60 ltr:mr-2 rtl:ml-2" />
                    )
                  }
                >
                  <Panel header="How long does it take to download updates?" key="1">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="How to use SCSS variables to build custom color?" key="2">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="3">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="What is the flex layout?" key="4">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="5">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="Where to buy this UI dashboard?" key="6">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="7">
                    <p className="text-base text-body dark:text-white60 mb-0">
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div className="bg-white dark:bg-whiteDark p-[35px] rounded-[10px]">
              <div className="mb-6">
                <iframe
                  height="315"
                  src="https://www.youtube.com/embed/dBd1j6x2HOo"
                  title="YouTube video player"
                  className="w-full rounded-[10px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <ul className="flex items-center justify-center flex-wrap gap-[25px]">
                <li className="flex items-center flex-col">
                  <span className="flex items-center justify-center bg-[#8231d320] w-[70px] h-[70px] rounded-[10px]">
                    <UilBook className="text-primary" />
                  </span>
                  <span className="inline-block text-body dark:text-white60 mt-1.5">35 Lectures</span>
                </li>
                <li className="flex items-center flex-col">
                  <span className="flex items-center justify-center bg-[#5840ff20] w-[70px] h-[70px] rounded-[10px]">
                    <UilClock className="text-secondary" />
                  </span>
                  <span className="finline-block text-body dark:text-white60 mt-1.5">15 Hours</span>
                </li>
                <li className="flex items-center flex-col">
                  <span className="flex items-center justify-center bg-[#01b81a20] w-[70px] h-[70px] rounded-[10px]">
                    <UilAward className="text-success" />
                  </span>
                  <span className="finline-block text-body dark:text-white60 mt-1.5">Certificate</span>
                </li>
                <li className="flex items-center flex-col">
                  <span className="flex items-center justify-center bg-[#fa8b0c20] w-[70px] h-[70px] rounded-[10px]">
                    <UilSync className="text-warning" />
                  </span>
                  <span className="finline-block text-body dark:text-white60 mt-1.5">Lifetime access</span>
                </li>
              </ul>
              <div className="mt-[30px] text-center">
                <span className="block text-dark dark:text-white87 mb-3 text-3xl font-semibold">$250</span>
                <Button size="default" type="primary" className="h-11 px-5 text-sm font-semibold">
                  Start This Course
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default CourseDetails;
