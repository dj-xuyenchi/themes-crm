import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Link, NavLink } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle } from '../../../styled';

const inboxData = [
  {
    id: 1,
    user: {
      fName: 'Shane',
      lName: 'Watson',
      msg: 'We are looking a full stack developer',
    },
    time: '9:00 AM',
    theme: '#00AAFF',
  },
  {
    id: 2,
    user: {
      fName: 'Chris',
      lName: 'Dohan',
      msg: 'Well done, great work ',
      img: 'static/img/sellers/11.png',
    },
    time: '9:30 AM',
    theme: '#00AAFF',
  },
  {
    id: 3,
    user: {
      fName: 'Robert',
      lName: 'Clinton',
      msg: 'Tonight we are going to submit new...',
    },
    time: '9:30 AM',
    theme: '#FB3586',
  },
  {
    id: 4,
    user: {
      fName: 'Daniel',
      lName: 'White',
      msg: 'Please send me final file',
      img: 'static/img/sellers/12.png',
    },
    time: '9:30 AM',
    theme: '#FB3586',
  },
  {
    id: 5,
    user: {
      fName: 'Black',
      lName: 'Smith',
      msg: 'Good luck Tom',
    },
    time: '9:30 AM',
    theme: '#5840FF',
  },
];

function Inbox() {
  const moreContent = (
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Printer</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>PDF</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>CSV</span>
      </NavLink>
    </div>
  );
  return (
    <GlobalUtilityStyle>
      <div>
        <Cards title="Inbox" more={moreContent} className="ant-card-head-b-none ant-card-body-pt-0">
          <List
            className="-mt-3"
            itemLayout="horizontal"
            dataSource={inboxData}
            renderItem={(item) => (
              <List.Item className="flex items-center gap-3 p-0 pb-[14px] last:pb-0 border-none">
                <List.Item.Meta
                  avatar={
                    item.user.img ? (
                      <Avatar
                        shape="circle"
                        className="w-[34px] h-[34px] rounded-full"
                        src={require(`../../../../${item.user.img}`)}
                      />
                    ) : (
                      <Avatar
                        shape="circle"
                        className="w-[34px] h-[34px] rounded-full"
                        style={{ backgroundColor: item.theme }}
                      >
                        {item.user.fName[0]}
                        {item.user.lName[0]}
                      </Avatar>
                    )
                  }
                  title={
                    <Link
                      to="#"
                      className="text-[15px] leading-[24px] font-medium text-dark dark:text-white87 hover:text-primary"
                    >
                      {item.user.fName} {item.user.lName}
                    </Link>
                  }
                  description={item.user.msg}
                  className="p-0 [&>.ant-list-item-meta-content>.ant-list-item-meta-title]:mb-0 [&>.ant-list-item-meta-content>.ant-list-item-meta-description]:text-body dark:[&>.ant-list-item-meta-content>.ant-list-item-meta-description]:text-white60 [&>.ant-list-item-meta-content>.ant-list-item-meta-description]:text-xs [&>.ant-list-item-meta-content>.ant-list-item-meta-description]:leading-[19px]"
                />
                <span className="text-[13px] leading-[20px] text-light dark:text-white30">{item.time}</span>
              </List.Item>
            )}
          />
        </Cards>
      </div>
    </GlobalUtilityStyle>
  );
}

export default Inbox;
