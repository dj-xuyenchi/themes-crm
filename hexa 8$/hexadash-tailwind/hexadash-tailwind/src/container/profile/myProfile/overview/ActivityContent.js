import React from 'react';
import UilAt from '@iconscout/react-unicons/icons/uil-at';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilInbox from '@iconscout/react-unicons/icons/uil-inbox';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilCommentAlt from '@iconscout/react-unicons/icons/uil-comment-alt';
import { Link } from 'react-router-dom';
import { ActivityContents } from './Style';
import { Dropdown } from '../../../../components/dropdown/dropdown';

function ActivityContent() {
  return (
    <ActivityContents>
      <div className="p-0 bg-white dark:bg-white10 rounded-10 py-[15px] ">
        <ul className="m-0">
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-primary bg-primary/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center">
              <UilInbox className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t1.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">James</span> Send you a message{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-secondary bg-secondary/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center secondary">
              <UilUpload className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t2.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Adam</span> upload website template for sale{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-success bg-success/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center success">
              <UilSignout className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t3.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Mumtahin</span> has registered{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-info bg-info/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center info">
              <UilAt className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t4.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">James</span> Send you a message{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-danger bg-danger/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center danger">
              <UilHeart className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t5.png')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Adam</span> upload website template for sale{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-warning bg-warning/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center warning">
              <UilCommentAlt className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t1.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Mumtahin</span> has registered{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-info bg-info/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center info">
              <UilAt className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t6.png')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">James</span> Send you a message{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-danger bg-danger/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center warning">
              <UilHeart className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t7.png')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Mumtahin</span> has registered{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-warning bg-warning/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center danger">
              <UilCommentAlt className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t8.png')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">Adam</span> upload website template for sale{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="py-[12px] px-[25px] flex items-center gap-[15px] hover:shadow-regular dark:shadow-none transition-[0.3s]">
            <span className="text-danger bg-danger/[.08] w-[31px] h-[31px] rounded-full flex items-center justify-center danger">
              <UilHeart className="w-[14px] h-[14px]" />
            </span>
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full max-w-[40px]"
                  src={require('../../../../static/img/chat-author/t1.jpg')}
                  alt=""
                />
                <p className="mb-0 text-[14px] text-theme-gray dark:text-white60">
                  <span className="inline-block font-medium text-primary">James</span> Send you a message{' '}
                  <span className="block mt-[3px] text-light-extra dark:text-white60">5 hours ago</span>
                </p>
              </div>
              <Link className="text-light-extra dark:text-white60" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <div className=" block bg-white w-[120px] dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Hide</span>
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        <span>Delete</span>
                      </Link>
                    </div>
                  }
                >
                  <UilEllipsisH className="w-[24px] h-[24px] m-0" />
                </Dropdown>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </ActivityContents>
  );
}

export default ActivityContent;
