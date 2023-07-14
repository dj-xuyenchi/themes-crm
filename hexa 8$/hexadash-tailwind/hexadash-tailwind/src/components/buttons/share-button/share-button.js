import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilRss from '@iconscout/react-unicons/icons/uil-rss';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function ShareButtonPageHeader() {
  const content = (
    <>
      <div className="block bg-white dark:bg-[#1b1d2a]">
        <NavLink
          className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm"
          to="#"
        >
          <UilFacebook className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
          <span>Facebook</span>
        </NavLink>
        <NavLink
          className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm"
          to="#"
        >
          <UilTwitter className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
          <span>Twitter</span>
        </NavLink>
        <NavLink
          className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm"
          to="#"
        >
          <UilRss className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
          <span>Feed</span>
        </NavLink>
        <NavLink
          className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm"
          to="#"
        >
          <UilLinkedin className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
          <span>Linkedin</span>
        </NavLink>
        <NavLink
          className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm"
          to="#"
        >
          <UilInstagram className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
          <span>Instagram</span>
        </NavLink>
      </div>
    </>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button
        className="text-[14px] font-medium border-none leading-[22px] dark:bg-white10 text-theme-gray dark:text-white60 dark:focus:text-dark dark:hover:text-dark inline-flex items-center justify-center rounded-[4px] px-[20px] h-[34px] gap-[8px]"
        size="small"
        type="white"
        key="3"
      >
        <UilShareAlt className="w-[14px] h-[14px] text-primary" />
        Share
      </Button>
    </Popover>
  );
}

export { ShareButtonPageHeader };
