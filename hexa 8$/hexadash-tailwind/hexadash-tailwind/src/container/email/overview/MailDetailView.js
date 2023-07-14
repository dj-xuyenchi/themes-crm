import React, { useEffect, lazy, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilRedo from '@iconscout/react-unicons/icons/uil-redo';
import UilArchive from '@iconscout/react-unicons/icons/uil-archive';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import UilCornerUpLeft from '@iconscout/react-unicons/icons/uil-corner-up-left';
import UilCornerUpRight from '@iconscout/react-unicons/icons/uil-corner-up-right';
import UilExclamationOctagon from '@iconscout/react-unicons/icons/uil-exclamation-octagon';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFolder from '@iconscout/react-unicons/icons/uil-folder';
import { Link, NavLink, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Tooltip, Row, Col, Spin } from 'antd';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { Dropdown } from '../../../components/dropdown/dropdown';
import Heading from '../../../components/heading/heading';
import { filterSinglePage, onStarUpdate } from '../../../redux/email/actionCreator';

const MailComposer = lazy(() => import('./MailComposer'));

function Single() {
  const navigate = useNavigate();
  const email = useSelector((state) => state.emailSingle.data[0]);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    replyMessage: 0,
  });

  const params = useParams();
  useEffect(() => {
    if (filterSinglePage) {
      const id = parseInt(params.id, 10);
      dispatch(filterSinglePage(id));
    }
  }, [params.id, dispatch]);

  const replyMail = async (replyMessage) => {
    // hit replyMail api
    setState({ ...state, replyMessage });
  };

  const onStaredChange = (id) => {
    dispatch(onStarUpdate(id));
  };

  const ReplayMess = React.memo((value) => {
    return (
      <>
        <div className="flex gap-5">
          <img className="w-[50px] h-[50px] rounded-full" src={require('../../../static/img/email/2.png')} alt="" />
          <MailComposer replay props={value} defaultTag="Alice Freeman" onSend={replyMail} />
        </div>
      </>
    );
  });

  return (
    <div className="bg-white dark:bg-white10 rounded-[10px]">
      <div className="flex items-center ssm:flex-col justify-between ssm:justify-center px-[25px] py-[13px] border-b border-regular dark:border-white10">
        <div className="flex items-center">
          <Link
            onClick={() => navigate(-1)}
            to="#"
            className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
          >
            <UilArrowLeft className="w-4 h-4" />
          </Link>
          <Tooltip placement="bottom" title="Refresh">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilRedo className="w-4 h-4" />
            </NavLink>
          </Tooltip>
          <Tooltip placement="bottom" title="Archive">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilArchive className="w-4 h-4" />
            </NavLink>
          </Tooltip>
          <Tooltip placement="bottom" title="Info">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilExclamationOctagon className="w-4 h-4" />
            </NavLink>
          </Tooltip>
          <Tooltip placement="bottom" title="Delete">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilTrash className="w-4 h-4" />
            </NavLink>
          </Tooltip>
          <Tooltip placement="bottom" title="Read">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilBookOpen className="w-4 h-4" />
            </NavLink>
          </Tooltip>
          <Tooltip placement="bottom" title="Folder">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
            >
              <UilFolder className="w-4 h-4" />
            </NavLink>
          </Tooltip>
        </div>
        <div className="flex items-center py-3">
          <span className="text-light dark:text-white60">1 - 50 of 235</span>
        </div>
      </div>
      <div className="p-[25px]">
        <Row gutter={15}>
          <Col>
            <div className="px-[30px] ssm:px-0 border-b border-regular dark:border-white10">
              <div className="flex items-center justify-between flex-wrap gap-[15px]">
                <Heading as="h2">
                  {email.subject}
                  <span className="inline-flex items-center bg-primary-transparent text-primary h-[22px] ltr:ml-2.5 rtl:mr-2.5 px-1.5 text-xs font-normal capitalize rounded-[3px]">
                    {email.type}
                  </span>
                </Heading>

                <div className="flex items-center">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center flex-col bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary"
                  >
                    <UilAngleUp className="w-4 h-4" />
                    <UilAngleDown className="w-4 h-4" />
                  </Link>

                  <Link
                    to="#"
                    className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
                  >
                    <UilPrint className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between sm:flex-wrap gap-[15px]">
                <div className="flex items-center gap-5 mt-5">
                  <img
                    className="min-2xl:w-[60px] min-2xl:h-[60px] w-[50px] h-[50px] rounded-full"
                    src={require(`../../../${email.img}`)}
                    alt=""
                  />
                  <div>
                    <Heading as="h4" className="mb-1 text-base font-medium text-dark dark:text-white87">
                      {email.userName}
                    </Heading>
                    <Dropdown
                      placement="bottom"
                      className="bg-white dark:bg-[#010413] py-1 shadow-[0_5px_30px_#9299b820] dark:dark:shadow-[0_0_30px_#9299B810] rounded-[5px]"
                      content={
                        <ul className=" px-[25px] py-[10px] m-0 gap-y-3 border-none">
                          <li className="flex gap-x-[50px]">
                            <span className="min-w-[40px] text-[#9299b8] dark:text-white60">From:</span>{' '}
                            <span className="text-body dark:text-white60">{email.from}</span>{' '}
                          </li>
                          <li className="flex gap-x-[50px]">
                            <span className="min-w-[40px] text-[#9299b8] dark:text-white60">To:</span>
                            <span className="text-body dark:text-white60">{email.to}</span>{' '}
                          </li>
                          <li className="flex gap-x-[50px]">
                            <span className="min-w-[40px] text-[#9299b8] dark:text-white60">CC:</span>
                            <span className="text-body dark:text-white60">example@gamil.com</span>{' '}
                          </li>
                          <li className="flex gap-x-[50px]">
                            <span className="min-w-[40px] text-[#9299b8] dark:text-white60">Date:</span>
                            <span className="text-body dark:text-white60">{moment(email.id).format('LLL')}</span>
                          </li>
                        </ul>
                      }
                    >
                      <Link to="#" className="flex items-center gap-[5px] text-light dark:text-white60">
                        To {email.to}
                        <UilAngleDown className="w-[18px] h-[18px]" />
                      </Link>
                    </Dropdown>
                  </div>
                </div>

                <div className="flex items-center xs:flex-wrap xs:gap-[10px]">
                  <span className="text-light dark:text-white60 min-xs:ltr:mr-[15px] min-xs:rtl:ml-[15px]">
                    <UilPaperclip className="w-4 h-4" />
                  </span>
                  <span className="text-light dark:text-white60 min-xs:ltr:mr-[15px] min-xs:rtl:ml-[15px]">
                    {' '}
                    {moment(email.id).format('LLL')}{' '}
                  </span>
                  <Link
                    className={`min-xs:px-[15px] ${email.stared ? 'text-warning' : 'text-light dark:text-white60'}`}
                    onClick={() => onStaredChange(email.id)}
                    to="#"
                  >
                    <FontAwesome name="star-o" className="w-4 h-4" />
                  </Link>
                  <Link to="#" className="min-ssm:px-[15px] text-light dark:text-white60">
                    <UilCornerUpLeft className="w-4 h-4" />
                  </Link>
                  <Link to="#" className="min-ssm:px-[15px] text-light dark:text-white60">
                    <UilEllipsisV className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-[22px] min-sm:ltr:pl-[82px] min-sm:rtl:pr-[82px]">
                <span className="inline-block mb-10 sm:mb-5 text-body dark:text-white60">Hello Adam,</span>
                <p className="min-sm:mb-[55px] sm:mb-[30px] text-body dark:text-white60">{email.body}</p>

                <Heading as="h6" className="text-dark dark:text-white87 text-[15px] font-normal leading-[30px]">
                  Best Regards <br /> {email.userName}
                </Heading>
              </div>

              <div className="flex flex-wrap mt-11 xs:mt-[15px] -mx-[5px] min-sm:ltr:pl-[82px] min-sm:rtl:pr-[82px]">
                <figure className="group relative p-2.5 mb-[30px] mx-[5px] border dark:border-white10 rounded-[10px]">
                  <div className="relative before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:w-full before:h-0 before:bg-dark-transparent before:rounded-[10px] before:transition-all group-hover:before:h-full">
                    <img src={require('../../../static/img/email/2.png')} alt="" />
                  </div>
                  <div className="gap-x-[10px] absolute top-[80px] left-1/2 -translate-x-1/2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilImport className="w-[14px] h-[14px] text-white" />
                    </Link>
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilShareAlt className="w-[14px] h-[14px] text-white" />
                    </Link>
                  </div>
                  <figcaption className="mt-[10px]">
                    <Heading as="h4" className="mb-0 text-dark dark:text-white87 text-[13px] font-semibold">
                      Attached.jpg
                    </Heading>
                    <p className="mb-0 text-xs text-body dark:text-white60">256.5 KB</p>
                  </figcaption>
                </figure>

                <figure className="group relative p-2.5 mb-[30px] mx-[5px] border dark:border-white10 rounded-[10px]">
                  <div className="relative before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:w-full before:h-0 before:bg-dark-transparent before:rounded-[10px] before:transition-all group-hover:before:h-full">
                    <img src={require('../../../static/img/email/1.png')} alt="" />
                  </div>
                  <div className="gap-x-[10px] absolute top-[80px] left-1/2 -translate-x-1/2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilImport className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilShareAlt className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                  </div>
                  <figcaption className="mt-[10px]">
                    <Heading as="h4" className="mb-0 text-dark dark:text-white87 text-[13px] font-semibold">
                      Attached.jpg
                    </Heading>
                    <p className="mb-0 text-xs text-body dark:text-white60">256.5 KB</p>
                  </figcaption>
                </figure>

                <figure className="group relative p-2.5 mb-[30px] mx-[5px] border dark:border-white10 rounded-[10px]">
                  <div className="relative before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:w-full before:h-0 before:bg-dark-transparent before:rounded-[10px] before:transition-all group-hover:before:h-full">
                    <img src={require('../../../static/img/email/3.png')} alt="" />
                  </div>
                  <div className="gap-x-[10px] absolute top-[80px] left-1/2 -translate-x-1/2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilImport className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilShareAlt className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                  </div>
                  <figcaption className="mt-[10px]">
                    <Heading as="h4" className="mb-0 text-dark dark:text-white87 text-[13px] font-semibold">
                      Attached.zip
                    </Heading>
                    <p className="mb-0 text-xs text-body dark:text-white60">256.5 KB</p>
                  </figcaption>
                </figure>

                <figure className="group relative p-2.5 mb-[30px] mx-[5px] border dark:border-white10 rounded-[10px]">
                  <div className="relative before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:w-full before:h-0 before:bg-dark-transparent before:rounded-[10px] before:transition-all group-hover:before:h-full">
                    <img src={require('../../../static/img/email/4.png')} alt="" />
                  </div>
                  <div className="gap-x-[10px] absolute top-[80px] left-1/2 -translate-x-1/2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilImport className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                    <Link
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff20]"
                      to="#"
                    >
                      <UilShareAlt className="w-[14px] h-[14px] text-white dark:text-white87" />
                    </Link>
                  </div>
                  <figcaption className="mt-[10px]">
                    <Heading as="h4" className="mb-0 text-dark dark:text-white87 text-[13px] font-semibold">
                      Attached.pdf
                    </Heading>
                    <p className="mb-0 text-xs text-body dark:text-white60">256.5 KB</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row gutter={15}>
        <Col xs={24}>
          <div className="flex items-start justify-between flex-wrap mb-[50px] p-[30px] xs:pt-0 shadow-[0_15px_40px_rgba(116,116,116,0.06)]">
            <figure className="flex justify-between flex-wrap gap-[20px]">
              <img className="w-[50px] h-[50px] rounded-full" src={require('../../../static/img/email/2.png')} alt="" />
              <figcaption>
                <Heading as="h6" className="mb-3 font-medium text-dark dark:text-white87">
                  Reynante Labares
                </Heading>
                <p className="mb-0 text-body dark:text-white60">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor...
                </p>
              </figcaption>
            </figure>
            <div className="flex items-center flex-warp xs:gap-:[10px]">
              <span className="text-light dark:text-white60 ltr:mr-[15px] rtl:ml-[15px]">
                {' '}
                {moment(email.id).format('LLL')}{' '}
              </span>
              <Link
                className={`px-[15px] xs:px-[5px] ${email.stared ? 'text-warning' : 'text-light dark:text-white60'}`}
                onClick={() => onStaredChange(email.id)}
                to="#"
              >
                <FontAwesome name="star-o" className="w-4 h-4" />
              </Link>
              <Link to="#" className="px-[15px] xs:px-[5px] text-light dark:text-white60">
                <UilEllipsisV className="w-4 h-4" />
              </Link>
              <Link to="#" className="px-[15px] xs:px-[5px] text-light dark:text-white60">
                <UilCornerUpLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <nav className="min-xs:ltr:pl-[100px] min-xs:rtl:pr-[100px]">
            <ul className="flex items-center flex-wrap xs:justify-center gap-2.5 mb-0">
              <li>
                <NavLink
                  to="./replay"
                  className="inline-flex items-center h-10 px-[20px] gap-x-1 text-body dark:text-white60 hover-text-primary border dark:border-white10 rounded"
                >
                  <UilCornerUpLeft className="w-4 h-4" /> Reply
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="./forward"
                  className="inline-flex items-center h-10 px-[20px] gap-x-1 text-body dark:text-white60 hover-text-primary border dark:border-white10 rounded"
                >
                  <UilCornerUpRight className="w-4 h-4" /> Forward
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="my-[30px] px-[30px]">
            <Suspense
              fallback={
                <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="replay" element={<ReplayMess />} />
              </Routes>
            </Suspense>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Single;
