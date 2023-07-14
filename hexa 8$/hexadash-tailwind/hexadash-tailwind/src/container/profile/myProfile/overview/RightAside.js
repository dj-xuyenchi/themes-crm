import React, { useState } from 'react';
import UilPlay from '@iconscout/react-unicons/icons/uil-play';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import ModalVideo from 'react-modal-video';
import { RightAsideWrapper } from './Style';
import { Button } from '../../../../components/buttons/buttons';
import { profileFriendsChangeStatus } from '../../../../redux/profile/actionCreator';
import './video-modal.css';

function RightAside() {
  const dispatch = useDispatch();
  const { friends, gallery } = useSelector((state) => {
    return {
      friends: state.Profile.friends,
      gallery: state.gallery.data,
    };
  });

  const [isOpen, setOpen] = useState(false);

  return (
    <RightAsideWrapper>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <div className="bg-white dark:bg-white10 rounded-10 mb-[25px] relative">
        <div className="h-[60px] px-[25px] border-regular dark:border-white10 border-b-1 text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between">
          <div className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Friends
          </div>
        </div>
        <ul className="p-0 m-0 pb-[20px]">
          {friends.map(({ name, key, designation, status, img }) => {
            return (
              <li
                className="flex items-center flex-wrap gap-[10px] justify-between py-[20px] px-[25px] cursor-pointer"
                key={key}
              >
                <div className="flex gap-[10px]">
                  <img className="w-[46px] h-[46px] rounded-full" src={require(`../../../../${img}`)} alt="" />
                  <p className="p-0 m-0 text-[14px] font-semibold text-dark dark:text-white87">
                    {name}{' '}
                    <span className="block mt-[3px] font-normal text-light dark:text-white60">{designation}</span>
                  </p>
                </div>
                <Button
                  className=" [&.ant-btn-primary]:bg-primary [&.ant-btn-primary]:hover:bg-hbr-primary border-solid border-1 [&.ant-btn-primary]:border-primary [&.ant-btn-primary]:text-white [&.ant-btn-primary]:text-white87 hover:bg-primary text-[12px] font-medium leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[12.88px] h-[32px] [&.ant-btn-primary]:shadow-btn gap-[8px] text-theme-gray dark:text-white87 hover:text-white bg-transparent dark:border-white10"
                  onClick={() => dispatch(profileFriendsChangeStatus(key))}
                  outlined={!status}
                  type={status ? 'primary' : 'white'}
                >
                  {!status ? (
                    'Follow'
                  ) : (
                    <div className="flex items-center gap-[6px]">
                      <UilCheck className="w-[14px] h-[14px]" />
                      Following
                    </div>
                  )}
                </Button>
              </li>
            );
          })}

          <Link to="#" className="mt-[10px] text-[14px] font-medium px-[25px] text-info">
            Load more friends
          </Link>
        </ul>
      </div>
      <div className="bg-white dark:bg-white10 rounded-10 mb-[25px] relative">
        <div className="h-[60px] px-[25px] border-regular dark:border-white10 border-b-1 text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between">
          <div className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Photos
          </div>
          <Link className="text-[13px] font-medium text-primary" to="/admin/pages/gallery">
            See All
          </Link>
        </div>
        <div className="px-[25px] py-[20px]">
          <Row className="-mx-[4px]" gutter={10}>
            {gallery.map(({ img, id }) => {
              return (
                id <= 6 && (
                  <Col className="my-[4px]" key={id} xxl={8} lg={4} md={4} sm={8} xs={8}>
                    <img
                      className="w-full min-4xl:max-w-[103px] rounded-[6px]"
                      src={require(`../../../../${img}`)}
                      alt=""
                    />
                  </Col>
                )
              );
            })}
          </Row>
        </div>
      </div>
      <div className="bg-white dark:bg-white10 rounded-10 mb-[25px] relative">
        <div className="h-[60px] px-[25px] border-regular dark:border-white10 border-b-1 text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between">
          <div className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Videos
          </div>
          <Link className="text-[13px] font-medium text-primary" to="/admin/pages/gallery">
            See All
          </Link>
        </div>
        <div className="px-[25px] py-[20px]">
          <Row className="-mx-[4px]" gutter={10}>
            {gallery.map(({ img, id }) => {
              return (
                id <= 6 && (
                  <Col className="my-[4px]" key={id} xxl={8} lg={4} md={8} sm={6} xs={8}>
                    <Link
                      className="relative inline-block z-[4] after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-full after:h-full after:content[''] after:rounded-6 after:bg-light-extra/[.20] group"
                      onClick={() => setOpen(true)}
                      to="#"
                    >
                      <img
                        className="w-full min-4xl:max-w-[103px] rounded-[6px]"
                        src={require(`../../../../${img}`)}
                        alt=""
                      />
                      <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center absolute top-[50%] left-[50%] z-[5] bg-dark/[38%] translate-x-[-50%] translate-y-[-50%] group-hover:bg-primary">
                        <UilPlay className="w-[14px] h-[14px] text-white" />
                      </span>
                    </Link>
                  </Col>
                )
              );
            })}
          </Row>
        </div>
      </div>
    </RightAsideWrapper>
  );
}

export default RightAside;
