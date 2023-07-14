import { Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';

import tableData from '../../../../demoData/table-data.json';

const { trafficChannel } = tableData;

function TrafficChannelTable() {
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

  const dataSource = [];
  if (trafficChannel !== null) {
    trafficChannel.map((value, key) => {
      const { icon, user, session, bounce, duration } = value;
      return dataSource.push({
        key,
        social: (
          <div className="flex items-center">
            <div className="hidden bg-facebook/[.07] bg-twitter/[.07] bg-instagram/[.07] bg-youtube/[.07] text-youtube" />
            <div
              className={`text-${icon} bg-${icon}/[.07] flex items-center justify-center w-[32px] h-[32px] rounded-6 ltr:mr-[12px] rtl:ml-[12px]`}
            >
              <i className={`fa fa-${icon} text-[15px]`} />
            </div>
            <div className="hexadash-social-company__content">
              <span className="text-dark dark:text-white87 text-[15px] font-medium">{user}</span>
            </div>
          </div>
        ),
        user: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{user}</span>,
        session: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{session}</span>,
        bounce: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{bounce}</span>,
        duration: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{duration}</span>,
      });
    });
  }

  const trafficColumns = [
    {
      title: 'Social',
      dataIndex: 'social',
      key: 'social',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: 'Users',
      dataIndex: 'user',
      key: 'user',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: 'Sessions',
      dataIndex: 'session',
      key: 'session',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: 'Bounce',
      dataIndex: 'bounce',
      key: 'bounce',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
    },
  ];

  return (
    <GlobalUtilityStyle>
      <Cards
        className="border-none h-full ant-card-body-p-25 ant-card-head-b-none ant-card-body-pt-0 ant-card-body-pb-0 ant-card-head-title-base"
        title="Social Media Traffic"
        size="large"
        more={moreContent}
      >
        <TableDefaultStyle>
          <>
            <div className="table-responsive pb-[25px] table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table dataSource={dataSource} columns={trafficColumns} pagination={false} />
            </div>
          </>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
}

export default TrafficChannelTable;
