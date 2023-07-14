import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Row, Col, Form, Input, Select, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left';
import UilAlignRight from '@iconscout/react-unicons/icons/uil-align-right';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Modal } from '../../components/modals/antd-modals';
import { noteAddData } from '../../redux/note/actionCreator';

const All = lazy(() => import('./overview/all'));
const Favorite = lazy(() => import('./overview/favorite'));
const Personal = lazy(() => import('./overview/personal'));
const Work = lazy(() => import('./overview/work'));
const Social = lazy(() => import('./overview/social'));
const Important = lazy(() => import('./overview/important'));

const { Option } = Select;
function Note() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Note',
    },
  ];
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible: false,
    modalType: 'primary',
    checked: [],
    responsive: 0,
    collapsed: false,
  });

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

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleOk = (values) => {
    onCancel();
    const arrayData = [];
    noteData.map((data) => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    dispatch(
      noteAddData([
        ...noteData,
        {
          ...values,
          key: max + 1,
          time: new Date().getTime(),
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const collapseSidebar = () => {
    setState({
      ...state,
      collapsed: false,
    });
  };

  const path = '.';

  const [activeNote, setActiveNote] = useState('all');

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Note"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row className="justify-content-center" gutter={25}>
          <Col className="text-center" xxl={5} xl={7} lg={9} xs={24}>
            {responsive <= 991 && (
              <Button
                type="link"
                className="bg-white dark:bg-whiteDark mb-[25px] rounded-[6px] text-primary"
                style={{ marginTop: 0 }}
                onClick={toggleCollapsed}
              >
                {collapsed ? (
                  <UilAlignLeft className="w-[14px] h-[14px]" />
                ) : (
                  <UilAlignRight className="w-[14px] h-[14px]" />
                )}
              </Button>
            )}
            {responsive > 991 ? (
              <div className="bg-white dark:bg-whiteDark h-full py-[25px] rounded-[10px]">
                <div className="px-[30px] pt-[30px] mb-5">
                  <Button
                    onClick={showModal}
                    shape="round"
                    type="primary"
                    size="default"
                    block
                    className="flex items-center gap-[5px] justify-center h-11 text-sm font-semibold"
                  >
                    <UilPlus className="w-[14px] h-[14px] text-white" /> Add Notes
                  </Button>
                </div>

                <div className="px-[15px]">
                  <ul className="mb-5">
                    <li>
                      <NavLink
                        to={`${path}/all`}
                        onClick={() => {
                          setActiveNote('all');
                        }}
                        className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                          activeNote === 'all' ? 'bg-[#f2eafb]' : ''
                        }`}
                      >
                        <UilEdit
                          className={`w-4 h-4 ${
                            activeNote === 'all' ? 'text-primary' : 'text-light-extra dark:text-white30'
                          }`}
                        />
                        <span
                          className={`leading-none ${
                            activeNote === 'all' ? 'text-primary' : 'text-body dark:text-white60'
                          }`}
                        >
                          All
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`${path}/favorite`}
                        onClick={() => {
                          setActiveNote('favorite');
                        }}
                        className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                          activeNote === 'favorite' ? 'bg-[#f2eafb]' : ''
                        }`}
                      >
                        <UilStar
                          className={`w-4 h-4 ${
                            activeNote === 'favorite' ? 'text-primary' : 'text-light-extra dark:text-white30'
                          }`}
                        />
                        <span
                          className={`leading-none ${
                            activeNote === 'favorite' ? 'text-primary' : 'text-body dark:text-white60'
                          }`}
                        >
                          Favorites
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <div>
                    <p className="flex items-center gap-2.5 px-[15px] text-xs text-light dark:text-white30">
                      <img className="max-w-[16px]" src={require('../../static/img/icon/label.png')} alt="icon" />
                      Labels
                    </p>
                    <ul>
                      <li>
                        <NavLink
                          to={`${path}/personal`}
                          onClick={() => {
                            setActiveNote('personal');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'personal' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <span
                            className={`flex items-center gap-2.5 leading-none ${
                              activeNote === 'personal' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            <span className="bg-primary w-2.5 h-2.5 rounded-full" />
                            Personal
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to={`${path}/work`}
                          onClick={() => {
                            setActiveNote('work');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'work' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <span
                            className={`flex items-center gap-2.5 leading-none ${
                              activeNote === 'work' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            <span className="bg-success w-2.5 h-2.5 rounded-full" />
                            Work
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${path}/social`}
                          onClick={() => {
                            setActiveNote('social');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'social' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <span
                            className={`flex items-center gap-2.5 leading-none ${
                              activeNote === 'social' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            <span className="bg-warning w-2.5 h-2.5 rounded-full" />
                            Social
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${path}/important`}
                          onClick={() => {
                            setActiveNote('important');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'important' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <span
                            className={`flex items-center gap-2.5 leading-none ${
                              activeNote === 'important' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            <span className="bg-info w-2.5 h-2.5 rounded-full" />
                            Important
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className={collapsed ? 'block' : 'hidden'}>
                <div className="bg-white dark:bg-whiteDark fixed left-0 top-[60px] w-[280px] h-full rounded-[10px] z-998">
                  <Button
                    type="link"
                    className="absolute top-5 right-5 bg-transparent text-primary"
                    style={{ marginTop: 0 }}
                    onClick={toggleCollapsed}
                  >
                    <UilTimes className="w-[14px] h-[14px]" />
                  </Button>
                  <div className="pt-[60px] px-[30px] pb-5">
                    <Button
                      onClick={showModal}
                      shape="round"
                      type="primary"
                      size="default"
                      block
                      className="flex items-center gap-[5px] justify-center h-11 text-sm font-semibold"
                    >
                      <UilPlus className="w-[14px] h-[14px] text-white" /> Add Notes
                    </Button>
                  </div>
                  <div className="px-[15px]">
                    <ul className="mb-5">
                      <li>
                        <NavLink
                          to={`${path}/all`}
                          onClick={() => {
                            collapseSidebar();
                            setActiveNote('all');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'all' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <UilEdit
                            className={`w-4 h-4 ${
                              activeNote === 'all' ? 'text-primary' : 'text-light-extra dark:text-white30'
                            }`}
                          />
                          <span
                            className={`leading-none ${
                              activeNote === 'all' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            All
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`${path}/favorite`}
                          onClick={() => {
                            collapseSidebar();
                            setActiveNote('favorite');
                          }}
                          className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                            activeNote === 'favorite' ? 'bg-[#f2eafb]' : ''
                          }`}
                        >
                          <UilStar
                            className={`w-4 h-4 ${
                              activeNote === 'favorite' ? 'text-primary' : 'text-light-extra dark:text-white30'
                            }`}
                          />
                          <span
                            className={`leading-none ${
                              activeNote === 'favorite' ? 'text-primary' : 'text-body dark:text-white60'
                            }`}
                          >
                            Favorites
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                    <div>
                      <p className="flex items-center gap-2.5 px-[15px] text-xs text-light dark:text-white30">
                        <img className="max-w-[16px]" src={require('../../static/img/icon/label.png')} alt="icon" />
                        Labels
                      </p>
                      <ul>
                        <li>
                          <NavLink
                            to={`${path}/personal`}
                            onClick={() => {
                              collapseSidebar();
                              setActiveNote('personal');
                            }}
                            className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                              activeNote === 'personal' ? 'bg-[#f2eafb]' : ''
                            }`}
                          >
                            <span
                              className={`flex items-center gap-2.5 leading-none ${
                                activeNote === 'personal' ? 'text-primary' : ''
                              }`}
                            >
                              <span className="bg-primary w-2.5 h-2.5 rounded-full" />
                              Personal
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            to={`${path}/work`}
                            onClick={() => {
                              collapseSidebar();
                              setActiveNote('work');
                            }}
                            className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                              activeNote === 'work' ? 'bg-[#f2eafb]' : ''
                            }`}
                          >
                            <span
                              className={`flex items-center gap-2.5 leading-none ${
                                activeNote === 'work' ? 'text-primary' : 'text-body dark:text-white60'
                              }`}
                            >
                              <span className="bg-success w-2.5 h-2.5 rounded-full" />
                              Work
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${path}/social`}
                            onClick={() => {
                              collapseSidebar();
                              setActiveNote('social');
                            }}
                            className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                              activeNote === 'social' ? 'bg-[#f2eafb]' : ''
                            }`}
                          >
                            <span
                              className={`flex items-center gap-2.5 leading-none ${
                                activeNote === 'social' ? 'text-primary' : 'text-body dark:text-white60'
                              }`}
                            >
                              <span className="bg-warning w-2.5 h-2.5 rounded-full" />
                              Social
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${path}/important`}
                            onClick={() => {
                              collapseSidebar();
                              setActiveNote('important');
                            }}
                            className={`flex items-center gap-[14px] px-5 py-3 rounded ${
                              activeNote === 'important' ? 'bg-[#f2eafb]' : ''
                            }`}
                          >
                            <span
                              className={`flex items-center gap-2.5 leading-none ${
                                activeNote === 'important' ? 'text-primary' : 'text-body dark:text-white60'
                              }`}
                            >
                              <span className="bg-info w-2.5 h-2.5 rounded-full" />
                              Important
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col xxl={19} xl={17} lg={15} xs={24}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center [&>div]:flex [&>div]:items-center">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="all" element={<All />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="personal" element={<Personal />} />
                <Route path="work" element={<Work />} />
                <Route path="social" element={<Social />} />
                <Route path="important" element={<Important />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
        <Modal type={state.modalType} title={null} visible={state.visible} footer={null} onCancel={handleCancel}>
          <div>
            <Form form={form} name="createProject" onFinish={handleOk}>
              <Form.Item
                rules={[{ required: true, message: 'Please input your note title!' }]}
                name="title"
                label="Title"
                className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Input placeholder="Note Title" />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: 'Please input your note description!' }]}
                name="description"
                label="Description"
                className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Input.TextArea rows={4} placeholder="Note Description" />
              </Form.Item>
              <Form.Item
                name="label"
                initialValue="personal"
                label="Note Label"
                className="[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:h-[50px] [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector>.ant-select-selection-item]:leading-[50px] [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:border-normal dark:[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:text-white60 dark:[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:border-white10 [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Select style={{ width: '100%' }}>
                  <Option value="personal">Personal</Option>
                  <Option value="work">Work</Option>
                  <Option value="social">Social</Option>
                  <Option value="important">Important</Option>
                </Select>
              </Form.Item>
              <Button
                htmlType="submit"
                size="default"
                type="primary"
                key="submit"
                className="h-11 px-5 text-sm font-semibold"
              >
                Add New Note
              </Button>
            </Form>
          </div>
        </Modal>
      </main>
    </>
  );
}

Note.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default Note;
