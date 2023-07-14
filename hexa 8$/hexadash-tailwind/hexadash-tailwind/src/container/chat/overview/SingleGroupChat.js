/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilClosedCaptioningSlash from '@iconscout/react-unicons/icons/uil-closed-captioning-slash';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import moment from 'moment';
import Picker from 'emoji-picker-react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { SmileOutlined, MoreOutlined } from '@ant-design/icons';
import Heading from '../../../components/heading/heading';
import { GlobalUtilityStyle } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { updateGroupChat } from '../../../redux/chat/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

function SingleGroupChat({ match }) {
  const dispatch = useDispatch();
  const { rtl, chat } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      chat: state.chatSingle.data,
    };
  });
  const left = !rtl ? 'left' : 'right';

  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].groupName,
    inputValue: '',
    fileList: [],
    fileList2: [],
  });
  const [pickerShow, setPickerShow] = useState(false);
  const { singleContent, name, me, inputValue } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].groupName,
        inputValue,
        me: 'woadud@gmail.com',
        fileList: [],
        fileList2: [],
      });
    }
    return () => {
      unmounted = true;
    };
  }, [match, chat, inputValue]);

  const handleChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pushcontent = {
      content: inputValue,
      time: new Date().getTime(),
      seen: false,
      reaction: false,
      email: me,
      userName: 'Woadud Akand',
    };
    dispatch(updateGroupChat(parseInt(match.params.id, 10), pushcontent));
    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setState({ ...state, inputValue: inputValue + emojiObject.emoji });
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const attachment = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList2: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const renderView = ({ style }) => {
    const customStyle = {
      marginRight: 'auto',
      [rtl ? 'left' : 'right']: '2px',
      [rtl ? 'marginLeft' : 'marginRight']: '-19px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  };

  const renderThumbVertical = ({ style }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
      [left]: '2px',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  };

  const renderThumbHorizontal = ({ style, props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const content = (
    <div className="bg-white dark:bg-[#010413] py-1 shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]  rounded-md">
      <Link
        to="#"
        className="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white60 text-sm hover:bg-primary-transparent hover:text-primary dark:hover:text-white87"
      >
        <UilUsersAlt className="w-[14px] h-[14px]" />
        <span>Create new group</span>
      </Link>
      <Link
        to="#"
        className="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white60 text-sm hover:bg-primary-transparent hover:text-primary dark:hover:text-white87"
      >
        <UilTrashAlt className="w-[14px] h-[14px]" />
        <span>Delete conversation</span>
      </Link>
      <Link
        to="#"
        className="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white60 text-sm hover:bg-primary-transparent hover:text-primary dark:hover:text-white87"
      >
        <UilClosedCaptioningSlash className="w-[14px] h-[14px]" />
        <span>Block & Report</span>
      </Link>
    </div>
  );

  return (
    <>
      <div
        className={`${pickerShow ? 'block fixed left-0 top-0 w-full h-full bg-[#11121760] z-998' : 'none'}`}
        onClick={() => setPickerShow(false)}
        aria-hidden="true"
      />
      <GlobalUtilityStyle>
        <Cards
          className="ant-card-head-px-25 ant-card-body-px-0 ant-card-body-py-25"
          title={
            <div className="flex py-2">
              <Heading as="h5">{name}</Heading>
              <div className="flex items-center justify-center w-full gap-x-1">
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#">
                  <img className="max-w-[30px]" src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                </Link>
                <Link to="#" className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full">
                  <span className="text-white text-[10px] font-semibold">20+</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center w-[30px] h-[30px] border border-dashed border-deep dark:border-white10 rounded-full"
                >
                  <span className="add-icon">
                    <UilPlus className="text-light dark:text-white60" />
                  </span>
                </Link>
              </div>
            </div>
          }
          isbutton={[
            <Dropdown content={content} key="1">
              <Link onClick={(e) => e.preventDefault()} to="#">
                <UilEllipsisH className="text-light dark:text-white60" />
              </Link>
            </Dropdown>,
          ]}
        >
          <ul className="mb-0">
            <Scrollbars
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}
              renderThumbHorizontal={renderThumbHorizontal}
              renderThumbVertical={renderThumbVertical}
              renderView={renderView}
              renderTrackVertical={(props) => <div {...props} />}
            >
              {singleContent.length ? (
                singleContent.map((mes, index) => {
                  const id = mes.time;
                  const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
                  return (
                    <li key={id} style={{ overflow: 'hidden' }}>
                      <div className={mes.email !== me ? 'left' : 'right'}>
                        {mes.email !== me ? (
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                        ) : null}

                        <div>
                          <Heading as="h5">
                            {mes.email !== me && name}

                            <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                          </Heading>
                          {mes.email !== me ? (
                            <div className="flex items-center">
                              {mes.content}

                              <div className="flex items-center">
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#127773;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128116;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128127;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128151;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128400;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link onClick={(e) => e.preventDefault()} to="#">
                                          <UilEllipsisH />
                                        </Link>
                                      </li>
                                    </ul>
                                  }
                                  placement="bottom"
                                >
                                  <Link to="#">
                                    <SmileOutlined />
                                  </Link>
                                </Dropdown>
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <div className="atbd-chatbox__messageControl">
                                      <ul>
                                        <li>
                                          <Link to="#">Edit</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Copy</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Quote</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Forward</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Remove</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  }
                                  placement="bottom"
                                >
                                  <Link onClick={(e) => e.preventDefault()} to="#">
                                    <UilEllipsisH />
                                  </Link>
                                </Dropdown>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <ul>
                                      <li>
                                        <Link to="#">Edit</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Copy</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Quote</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Forward</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Remove</Link>
                                      </li>
                                    </ul>
                                  }
                                  placement="bottom"
                                >
                                  <Link onClick={(e) => e.preventDefault()} to="#">
                                    <UilEllipsisH />
                                  </Link>
                                </Dropdown>
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <ul>
                                      <li>
                                        <Link to="#">&#127773;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128116;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128127;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128151;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128400;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <MoreOutlined />
                                        </Link>
                                      </li>
                                    </ul>
                                  }
                                  placement="bottom"
                                >
                                  <Link to="#">
                                    <SmileOutlined />
                                  </Link>
                                </Dropdown>
                              </div>
                              <div className="flex items-center">{mes.content}</div>
                            </div>
                          )}
                          {singleContent.length === index + 1 ? (
                            <div className="group-seen">
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                              <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })
              ) : (
                <p>No data found</p>
              )}
            </Scrollbars>
          </ul>

          <ul className="h-[450px] overflow-hidden ltr:3xl:[&>div>div]:!mr-0 rtl:3xl:[&>div>div]:!ml-0">
            <Scrollbars
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}
              renderThumbHorizontal={renderThumbHorizontal}
              renderThumbVertical={renderThumbVertical}
              renderView={renderView}
              renderTrackVertical={(props) => <div {...props} className="" />}
            >
              {singleContent.length ? (
                singleContent.map((mes, index) => {
                  const id = mes.time;

                  const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');

                  return (
                    <li className="mb-[30px] px-[25px] sm:px-[15px] last:mb-0" key={id} style={{ overflow: 'hidden' }}>
                      <div
                        className={`flex items-start ${
                          mes.email !== me
                            ? 'ltr:float-left rtl:float-right ltr:[&>div>h1]:text-start'
                            : 'ltr:float-right rtl:float-left ltr:[&>div>h1]:text-end rtl:[&>div>h1]:text-end [&>div>h1>span]:me-0'
                        }`}
                      >
                        {mes.email !== me ? (
                          <>
                            <img
                              className="max-w-[46px] xs:max-w-[32px] ltr:mr-[15px] rtl:ml-[15px] rounded-full"
                              src={require(`../../../static/img/chat-author/${mes.img}`)}
                              alt=""
                            />
                          </>
                        ) : null}

                        <div>
                          <Heading as="h5" className="text-sm font-semibold text-dark dark:text-white87">
                            {mes.email !== me && name}
                            <span className="text-light dark:text-white60 text-xs font-normal">
                              {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
                            </span>
                          </Heading>

                          {mes.email !== me ? (
                            <div className="flex items-center flex-wrap gap-[15px]">
                              <div>
                                <div className="max-w-[670px] bg-body dark:bg-white10  px-5 py-[18px] text-white dark:text-white87 text-base rounded-[15px] rounded-br-0">
                                  {mes.content}
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <div className="bg-white dark:bg-[#010413] px-[10px] dark:shadow-[0_0_30px_#9299B810] shadow-[0_5px_30px_#9299b820]  rounded-[5px]">
                                      <ul className="flex items-center">
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#127773;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128116;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128127;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128151;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128400;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <MoreOutlined className="flex items-center w-[14px] h-[14px]" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  }
                                  placement="bottom"
                                >
                                  <Link to="#" className="text-deep dark:text-white60">
                                    <SmileOutlined className="xs:w-[16px] xs:h-[16px]" />
                                  </Link>
                                </Dropdown>

                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <div className="bg-white dark:bg-[#010413] min-w-[210px] py-[14px] shadow-[0_5px_30px_#9299b820] rounded-[5px] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] ">
                                      <ul className="mb-0">
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Copy
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Edit
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Quote
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Forward
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Remove
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  }
                                  placement="bottom"
                                >
                                  <Link
                                    onClick={(e) => e.preventDefault()}
                                    to="#"
                                    className="text-deep dark:text-white60"
                                  >
                                    <UilEllipsisH className="xs:w-[16px] xs:h-[16px]" />
                                  </Link>
                                </Dropdown>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <div className="flex items-center mx-[15px] gap-3">
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <div className="bg-white dark:bg-[#010413] min-w-[210px] py-[14px] shadow-[0_5px_30px_#9299b820] rounded-[5px] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] ">
                                      <ul className="mb-0">
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Copy
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Edit
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Quote
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Forward
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="block px-6 py-1 text-sm text-body dark:text-white60 hover:bg-primary-transparent hover:text-primary"
                                          >
                                            Remove
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  }
                                  placement="bottom"
                                >
                                  <Link
                                    onClick={(e) => e.preventDefault()}
                                    to="#"
                                    className="text-deep dark:text-white60"
                                  >
                                    <UilEllipsisH />
                                  </Link>
                                </Dropdown>
                                <Dropdown
                                  action={['hover']}
                                  content={
                                    <div className="bg-white dark:bg-[#010413] px-[10px] shadow-[0_5px_30px_#9299b820] dark:shadow-[0_0_30px_#9299B810] rounded-[5px]">
                                      <ul className="flex items-center">
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#127773;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128116;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128127;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128151;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <span role="img">&#128400;</span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" className="block px-[7px] py-1 text-[20px]">
                                            <MoreOutlined className="flex items-center w-[14px] h-[14px]" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  }
                                  placement="bottom"
                                >
                                  <Link to="#" className="text-deep dark:text-white60">
                                    <SmileOutlined />
                                  </Link>
                                </Dropdown>
                              </div>
                              <div className="flex items-center">
                                <div className="max-w-[670px] bg-section dark:bg-white30 px-5 py-[18px] text-dark dark:text-white87 text-base rounded-[15px] rounded-br-0">
                                  {mes.content}
                                </div>
                              </div>
                            </div>
                          )}
                          {mes.email === me && singleContent.length === index + 1 ? (
                            <div className="flex items-center justify-end mt-[10px] gap-[5px] text-end">
                              <span className="text-xs font-normal text-light dark:text-white60">Seen 9:20 PM </span>
                              <img
                                className="max-w-[20px] rounded-full"
                                src={require(`../../../static/img/chat-author/${mes.img}`)}
                                alt=""
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })
              ) : (
                <p>No data found</p>
              )}
            </Scrollbars>
          </ul>

          <div>
            <form onSubmit={handleSubmit}>
              <div
                className={`relative flex items-center gap-2 sm:gap-[15px] sm:justify-center sm:flex-wrap mt-[20px] mx-[25px] ${
                  state.fileList.length && 'hasImage'
                } ${state.fileList2.length && 'hasFile'}`}
              >
                <div className="flex items-center w-full gap-2">
                  <span className="absolute ltr:left-[25px] rtl:right-[25px]  flex items-center z-998 [&>aside.emoji-picker-react]:absolute ltr:[&>aside.emoji-picker-react]:right-[25px] rtl:[&>aside.emoji-picker-react]:left-[25px] [&>aside.emoji-picker-react]:top-auto [&>aside.emoji-picker-react]:bottom-[20%] [&>aside.emoji-picker-react]:flex [&>aside.emoji-picker-react]:items-center [&>aside.emoji-picker-react]:shadow-none [&>aside.emoji-picker-react]:z-998 [&>aside.emoji-picker-react>div]:w-full">
                    {pickerShow && <Picker onEmojiClick={onEmojiClick} />}
                    <Link onClick={onPickerShow} to="#" className="text-light-extra dark:text-white60">
                      <UilSmile className="w-[24px] h-[24px]" />
                    </Link>
                  </span>
                  <input
                    onChange={handleChange}
                    placeholder="Type your message..."
                    name="chat"
                    id="chat"
                    style={{ width: '100%' }}
                    value={inputValue}
                    className="bg-section dark:bg-[#323540] h-[70px] sm:h-[50px] ltr:pr-[25px] rtl:pl-[25px] ltr:pl-[70px] rtl:pr-[70px] text-body dark:text-white60 border-none outline-none rounded-[35px]"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <Link to="#">
                    <Upload
                      {...props}
                      className="[&>div>.ant-upload]:flex [&>div>.ant-upload]:items-center [&>div>.ant-upload]:w-[50px] [&>div>.ant-upload]:h-[50px] [&>div>.ant-upload]:bg-section dark:[&>div>.ant-upload]:h-[50px] dark:[&>div>.ant-upload]:bg-[#323540] [&>div>.ant-upload]:m-0 [&>div>.ant-upload]:rounded-full [&>div>.ant-upload]:border-none [&>div>div>span.ant-upload]:mx-auto"
                    >
                      <UilCamera className="w-[18px] h-[18px] text-light dark:text-white60" />
                    </Upload>
                  </Link>
                  <Link to="#">
                    <Upload
                      {...attachment}
                      className="[&>.ant-upload]:flex [&>.ant-upload]:items-center [&>.ant-upload]:w-[50px] [&>.ant-upload]:h-[50px] [&>.ant-upload]:bg-section dark:[&>.ant-upload]:bg-[#323540] [&>.ant-upload]:rounded-full [&>.ant-upload]:border-none [&>div>span.ant-upload]:mx-auto"
                    >
                      <UilPaperclip className="w-[18px] h-[18px] text-light dark:text-white60" />
                    </Upload>
                  </Link>

                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="w-[50px] h-[50px] p-0 text-white dark:text-white87 rounded-full"
                  >
                    <UilMessage className="w-[18px] h-[18px] mx-auto" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Cards>
      </GlobalUtilityStyle>
    </>
  );
}

SingleGroupChat.propTypes = {
  match: PropTypes.object,
};

export default SingleGroupChat;
