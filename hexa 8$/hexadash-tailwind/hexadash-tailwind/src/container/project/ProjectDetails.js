import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilChartPie from '@iconscout/react-unicons/icons/uil-chart-pie';
import UilWebGridAlt from '@iconscout/react-unicons/icons/uil-web-grid-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import { Link, NavLink, Routes, Route, useParams } from 'react-router-dom';
import FileListCard from './overview/FileListCard';
import { GlobalUtilityStyle } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/project/actionCreator';

const TaskList = lazy(() => import('./overview/TaskList'));
const Activities = lazy(() => import('./overview/Activities'));

function ProjectDetails() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.data);
  const params = useParams();
  useEffect(() => {
    if (!dispatch) {
      dispatch(filterSinglePage(parseInt(params.id, 10)));
    }
  }, [params.id, dispatch]);

  const { title, content } = project[0];
  const [activeValue, setActiveValue] = useState('task');

  return (
    <>
      <div className="flex items-center justify-between pt-[42px] pb-[35px] px-[25px] flex-wrap gap-[15px] sm:justify-center">
        <div className="inline-flex flex-wrap items-center gap-5 md:justify-center">
          <Heading as="h4" className="text-dark dark:text-white87 text-[20px] font-semibold mb-0">
            {title}
          </Heading>
          <div className="flex items-center gap-x-3">
            <Button
              className="h-[35px] px-[14px] text-sm font-semibold rounded-md"
              size="default"
              type="primary"
              key="1"
            >
              <Link to="#" className="flex items-center gap-[6px] text-xs font-medium">
                <UilPlus className="w-[14px] h-[14px]" /> Add Task
              </Link>
            </Button>
            <Button
              className="h-[35px] px-[14px] text-xs font-semibold rounded-md dark:text-white87 dark:bg-white10 dark:border-white10 dark:hover:bg-white30 transition duration-300"
              size="default"
              type="default"
              key="2"
            >
              <Link to="#" className="flex items-center gap-[6px]">
                <UilCheck className="w-[14px] h-[14px]" /> Mark as Complete
              </Link>
            </Button>
          </div>
        </div>
        <div className="inline-flex items-center gap-x-5">
          <Link
            to="#"
            className="flex items-center gap-x-1.5 bg-white dark:bg-white10 text-primary h-[35px] px-[14px] text-xs font-medium border border-normal dark:border-white10 rounded-md"
          >
            <UilEditAlt className="w-[14px] h-[14px]" />
            Edit
          </Link>
          <Link
            to="#"
            className="flex items-center gap-x-1.5 bg-white dark:bg-white10 dark:hover:bg-white30 text-danger h-[35px] px-[14px] text-xs font-medium border border-normal dark:border-white10 rounded-md transition duration-300"
          >
            <UilTrashAlt className="w-[14px] h-[14px]" />
            Remove
          </Link>
        </div>
      </div>
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-[30px] ssm:px-[15px]  pb-[20px]">
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <div className="bg-success mb-[25px] py-4 px-[25px] rounded-[10px]">
              <h3 className="text-lg font-medium text-white dark:text-white87">Progress</h3>
              <Progress
                percent={65}
                strokeWidth={5}
                status="active"
                className="gap-x-2 [&>div>.ant-progress-inner]:bg-[#fff3] [&>div>div>.ant-progress-bg]:bg-white dark:[&>div>div>.ant-progress-bg]:bg-white87 [&>.ant-progress-text]:text-white dark:[&>.ant-progress-text]:text-white60 [&>.ant-progress-text]:font-medium"
              />
            </div>
            <div className="bg-white dark:bg-white10 mb-[25px] p-[25px] rounded-[10px] gap-[25px] flex flex-wrap min-xl:flex-col xl:justify-between">
              <div className="flex items-center gap-x-5">
                <Link
                  to="#"
                  className="flex items-center justify-center bg-primary-transparent text-primary w-[60px] h-[60px] rounded-xl"
                >
                  <UilListUl className="w-[25px] h-[25px]" />
                </Link>
                <div>
                  <Heading as="h5" className="text-dark dark:text-white87 text-[20px] font-semibold mb-[3px]">
                    47
                  </Heading>
                  <p className="mb-0 text-body dark:text-white60">Total Task</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <Link
                  to="#"
                  className="flex items-center justify-center bg-secondary-transparent text-secondary w-[60px] h-[60px] rounded-xl"
                >
                  <UilChartPie className="w-[25px] h-[25px]" />
                </Link>
                <div>
                  <Heading as="h5" className="text-dark dark:text-white87 text-[20px] font-semibold mb-[3px]">
                    34
                  </Heading>
                  <p className="mb-0 text-body dark:text-white60">Task Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <Link
                  to="#"
                  className="flex items-center justify-center bg-success-transparent text-success w-[60px] h-[60px] rounded-xl"
                >
                  <UilWebGridAlt className="w-[25px] h-[25px]" />
                </Link>
                <div>
                  <Heading as="h5" className="text-dark dark:text-white87 text-[20px] font-semibold mb-[3px]">
                    $27,500
                  </Heading>
                  <p className="mb-0 text-body dark:text-white60">Spendings</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <Link
                  to="#"
                  className="flex items-center justify-center bg-warning-transparent text-warning w-[60px] h-[60px] rounded-xl"
                >
                  <UilClock className="w-[25px] h-[25px]" />
                </Link>
                <div>
                  <Heading as="h5" className="text-dark dark:text-white87 text-[20px] font-semibold mb-[3px]">
                    250
                  </Heading>
                  <p className="mb-0 text-body dark:text-white60">Hours Spent</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="bg-white dark:bg-white10 min-4xl:min-h-[485px] mb-[25px] rounded-[10px]">
              <div className="px-[25px] py-[18px] border-b border-regular dark:border-white10">
                <Heading as="h3" className="m-0 text-lg font-semibold text-dark dark:text-white87">
                  About Project
                </Heading>
              </div>
              <div className="p-[25px]">
                <div>
                  <p className="text-body dark:text-white60">{content}</p>
                  <p className="text-body dark:text-white60">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor
                  </p>
                </div>
                <div className="flex items-center mt-[42px] gap-x-20 gap-y-[15px] flex-wrap">
                  <div>
                    <span className="mb-[3px] text-body dark:text-white60 text-[13px]">Project Owner</span>
                    <p className="font-medium text-body dark:text-white60">Peter Jackson</p>
                  </div>
                  <div>
                    <span className="mb-[3px] text-body dark:text-white60 text-[13px]">Budget</span>
                    <p className="font-medium text-body dark:text-white60">$56,700</p>
                  </div>
                  <div>
                    <span className="mb-[3px] text-body dark:text-white60 text-[13px]">Start Date</span>
                    <p className="font-medium text-primary">28 Dec 2019</p>
                  </div>
                  <div>
                    <span className="mb-[3px] text-body dark:text-white60 text-[13px]">Deadline</span>
                    <p className="font-medium text-danger">18 Mar 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={6} lg={9} xs={24}>
            <div className="bg-white dark:bg-white10 min-h-[485px] mb-[25px] rounded-[10px]">
              <div className="flex items-center justify-between px-[25px] py-3 border-b border-regular dark:border-white10">
                <Heading as="h3" className="m-0 text-lg font-semibold text-dark dark:text-white87">
                  Users
                </Heading>
                <Button
                  className="flex items-center gap-x-1.5 h-[38px] px-3 text-xs font-medium dark:text-white87 dark:bg-transparent dark:border-white10"
                  outlined
                  type="white"
                  size="small"
                >
                  <UilUserPlus className="w-[14px] h-[14px]" /> Add Users
                </Button>
              </div>
              <div className="flex flex-col gap-y-[25px] p-[25px]">
                <div className="flex items-center gap-x-[15px]">
                  <div>
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={require(`../../static/img/users/1.png`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <Heading as="h5" className="text-dark dark:text-white87 text-sm font-semibold mb-0.5">
                      Meyri Carles
                    </Heading>
                    <p className="mb-0 text-body dark:text-white60">Web Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div>
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={require(`../../static/img/users/3.png`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <Heading as="h5" className="text-dark dark:text-white87 text-sm font-semibold mb-0.5">
                      Tuhin Molla
                    </Heading>
                    <p className="mb-0 text-body dark:text-white60">Project Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div>
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={require(`../../static/img/users/9.jpg`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <Heading as="h5" className="text-dark dark:text-white87 text-sm font-semibold mb-0.5">
                      Billal Hossain
                    </Heading>
                    <p className="mb-0 text-body dark:text-white60">App Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div>
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={require(`../../static/img/users/4.png`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <Heading as="h5" className="text-dark dark:text-white87 text-sm font-semibold mb-0.5">
                      Khalid Hasan
                    </Heading>
                    <p className="mb-0 text-body dark:text-white60">App Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div>
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src={require(`../../static/img/users/5.png`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <Heading as="h5" className="text-dark dark:text-white87 text-sm font-semibold mb-0.5">
                      Meyri Carles
                    </Heading>
                    <p className="mb-0 text-body dark:text-white60">Ui Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={16} lg={15} xs={24}>
            <GlobalUtilityStyle>
              <div className="bg-white dark:bg-white10 rounded-[10px] mb-[25px]">
                <nav className="flex items-center gap-x-[30px] px-[25px] py-0 border-b border-regular dark:border-white10">
                  <NavLink
                    to="./tasklist"
                    onClick={() => {
                      setActiveValue('task');
                    }}
                    className={`relative py-5 text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-[1px] ${
                      activeValue === 'task'
                        ? 'text-primary after:block after:bg-primary'
                        : 'text-body dark:text-white60 after:none'
                    }`}
                  >
                    Task List
                  </NavLink>
                  <NavLink
                    to="./activities"
                    onClick={() => {
                      setActiveValue('activities');
                    }}
                    className={`relative py-5 text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-[1px] ${
                      activeValue === 'activities'
                        ? 'text-primary after:block after:bg-primary'
                        : 'text-body dark:text-white60 after:none'
                    }`}
                  >
                    Activities
                  </NavLink>
                </nav>
                <div className="min-h-[435px] w-full flex pt-[10px] ltr:pr-[17px] rtl:pl-[17px] pb-0.5">
                  <Suspense
                    fallback={
                      <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
                        <Spin />
                      </div>
                    }
                  >
                    <Routes>
                      <Route index element={<TaskList />} />
                      <Route path="tasklist" element={<TaskList />} />
                      <Route path="activities" element={<Activities />} />
                    </Routes>
                  </Suspense>
                </div>
              </div>
            </GlobalUtilityStyle>
          </Col>
          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default ProjectDetails;
