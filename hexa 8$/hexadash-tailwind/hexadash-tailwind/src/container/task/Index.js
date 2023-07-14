/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Input, Form, Modal } from 'antd';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { FixedSidebar } from './style';
import { BasicFormWrapper } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { taskAddData } from '../../redux/task/actionCreator';

const All = lazy(() => import('./overview/all'));
const Favourites = lazy(() => import('./overview/favourites'));
const Completed = lazy(() => import('./overview/completed'));

function Task() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Task',
    },
  ];
  const [form] = Form.useForm();
  // const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { taskData } = useSelector((state) => {
    return {
      taskData: state.Task.data,
    };
  });

  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
  });

  const showModal = () => {
    setState({
      ...state,
      visible: true,
      collapsed: false,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleAddTask = (values) => {
    handleCancel();
    const arrayData = [];
    taskData.map((data) => {
      return arrayData.push(data.id);
    });

    const max = Math.max(...arrayData);
    dispatch(
      taskAddData([
        ...taskData,
        {
          ...values,
          id: max + 1,
          favourite: false,
          completed: false,
        },
      ]),
    );
  };

  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const path = '/admin/app/task';
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Task"
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xxl={5} lg={6} md={7} xs={24} className="mb-[25px]">
            {responsive > 767 ? (
              <>
                <div className="mb-[30px] bg-white dark:bg-whiteDark h-full py-[25px] rounded-[10px]">
                  <div className="hexadash-taskApp-sidebar">
                    <div className="px-[30px] mb-5">
                      <Button
                        className="w-full flex items-center gap-[5px] justify-center h-11 text-sm rounded-[22px] font-semibold text-white dark:text-white87"
                        size="large"
                        type="primary"
                        raised
                        onClick={showModal}
                      >
                        <UilPlus className="w-[15px] h-[15px]" />
                        Add Task
                      </Button>
                    </div>
                    <ul className="px-[15px] mb-5">
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/all`}
                        >
                          <span className="nav-item-icon">
                            <UilEdit className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/favourites`}
                        >
                          <span className="nav-item-icon">
                            <UilStar className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">Favourite</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/completed`}
                        >
                          <span className="nav-item-icon">
                            <UilCheck className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">Completed</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <Modal
                  title="Add Task"
                  className="hexadash-addTask-modal"
                  type={state.modalType}
                  visible={state.visible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <div className="hexadash-addTask-modal-inner">
                    <BasicFormWrapper>
                      <Form form={form} name="add-task" onFinish={handleAddTask}>
                        <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                          <Input placeholder="Title" size="middle" />
                        </Form.Item>

                        <Form.Item name="description">
                          <Input.TextArea rows={4} placeholder="Add Description" />
                        </Form.Item>
                        <div className="flex justify-end gap-[12px]">
                          <Button
                            className="px-[20px] py-[8px] text-primary border-primary bg-white dark:bg-white10 h-[38px] flex items-center justify-center font-medium"
                            size="small"
                            type="white"
                            key="cancel"
                            outlined
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="px-[20px] py-[8px] bg-primary text-white border-primary h-[38px] flex items-center justify-center font-medium"
                            htmlType="submit"
                            size="small"
                            type="primary"
                            key="submit"
                          >
                            Add Task
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </div>
                </Modal>
              </>
            ) : (
              <FixedSidebar
                className={collapsed ? 'show bg-white dark:bg-[#1b1d2a]' : 'hide bg-white dark:bg-[#1b1d2a]'}
              >
                <Link to="#" type="link" className="trigger-close" onClick={toggleCollapsed}>
                  <UilTimes />
                </Link>
                <div className="mb-[30px]">
                  <div className="hexadash-taskApp-sidebar">
                    <div className="px-[30px] mb-5">
                      <Button
                        className="w-full flex items-center gap-[5px] justify-center h-11 text-sm rounded-[22px] font-semibold text-white dark:text-white87"
                        size="large"
                        type="primary"
                        raised
                        onClick={showModal}
                      >
                        <UilPlus className="w-[15px] h-[15px]" />
                        Add Task
                      </Button>
                    </div>
                    <ul className="px-[15px] mb-5">
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/all`}
                        >
                          <span className="nav-item-icon">
                            <UilEdit className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/favourites`}
                        >
                          <span className="nav-item-icon">
                            <UilStar className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">Favourite</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex items-center gap-[12px] px-[15px] py-[9px] rounded-4 text-theme-gray dark:text-white60 [&.active]:bg-primary/10 [&.active]:text-primary [&.active>span>svg]:text-primary"
                          to={`${path}/completed`}
                        >
                          <span className="nav-item-icon">
                            <UilCheck className="text-light dark:text-white60 w-[16px]" />
                          </span>
                          <span className="nav-item-text">Completed</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <Modal
                  title="Add Task"
                  className="hexadash-addTask-modal"
                  type={state.modalType}
                  visible={state.visible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <div className="hexadash-addTask-modal-inner">
                    <BasicFormWrapper>
                      <Form form={form} name="add-task" onFinish={handleAddTask}>
                        <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                          <Input placeholder="Title" />
                        </Form.Item>

                        <Form.Item name="description">
                          <Input.TextArea rows={4} placeholder="Add Description" />
                        </Form.Item>
                        <div className="flex justify-end gap-[12px]">
                          <Button
                            className="px-[20px] py-[8px] text-primary border-primary bg-white dark:bg-white10 h-[38px] flex items-center justify-center font-medium"
                            size="small"
                            type="white"
                            key="cancel"
                            outlined
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="px-[20px] py-[8px] bg-primary text-white border-primary h-[38px] flex items-center justify-center font-medium"
                            htmlType="submit"
                            size="small"
                            type="primary"
                            key="submit"
                          >
                            Add Task
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </div>
                </Modal>
              </FixedSidebar>
            )}
          </Col>
          <Col xxl={19} lg={18} md={17} xs={24} className="mb-[25px]">
            {responsive <= 767 && (
              <div className="text-center mb-[30px]">
                <Button
                  type="link"
                  className="text-white bg-info px-[20px] py-[5px]"
                  style={{ marginTop: 0 }}
                  onClick={toggleCollapsed}
                >
                  {collapsed ? (
                    <UilAngleLeft className="w-[14px] h-[14px]" />
                  ) : (
                    <UilAngleRight className="w-[14px] h-[14px]" />
                  )}
                </Button>
              </div>
            )}
            <Suspense
              fallback={
                <div className="spin">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="all" element={<All />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="completed" element={<Completed />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
        <span
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          className={collapsed ? 'overlay-dark show' : 'overlay-dark'}
          onClick={toggleCollapsed}
        />
      </div>
    </>
  );
}

export default Task;
