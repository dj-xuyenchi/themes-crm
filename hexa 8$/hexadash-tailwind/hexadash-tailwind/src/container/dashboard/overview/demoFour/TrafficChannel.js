import React from 'react';
import { Progress, Table } from 'antd';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

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

const locationColumns = [
  {
    title: '',
    dataIndex: 'channel',
    key: 'channel',
    width: 150,
    className: 'px-[15px] py-[10px] first:pt-0',
  },
  {
    title: '',
    dataIndex: 'traffic',
    key: 'traffic',
    width: 40,
    className: 'px-[15px] py-[10px] first:pt-0',
  },
  {
    title: '',
    dataIndex: 'percentage',
    key: 'percentage',
    className: 'px-[15px] py-[10px] first:pt-0',
  },
];

const trafficData = [
  {
    id: 1,
    channel: 'Facebook',
    traffic: '38,536',
    percent: 90,
    progressType: 'primary',
  },
  {
    id: 2,
    channel: 'Instragram',
    traffic: '28,536',
    percent: 70,
    progressType: 'info',
  },
  {
    id: 3,
    channel: 'WhatsApp',
    traffic: '18,536',
    percent: 60,
    progressType: 'success',
  },
  {
    id: 4,
    channel: 'Twitter',
    traffic: '15,536',
    percent: 55,
    progressType: 'secondary',
  },
  {
    id: 5,
    channel: 'YouTube',
    traffic: '10,536',
    percent: 50,
    progressType: 'warning',
  },
  {
    id: 6,
    channel: 'LinkedIn',
    traffic: '9,536',
    percent: 45,
    progressType: 'dark',
  },
];

function TrafficChannel() {
  const locationData = [];

  trafficData.map(({ id, channel, traffic, percent, progressType }) => {
    return locationData.push({
      key: id,
      channel: <span className="text-dark dark:text-white87 text-[15px] font-medium">{channel}</span>,
      traffic: <span className="text-body dark:text-white60 text-sm font-medium">{traffic}</span>,
      percentage: (
        <Progress
          percent={percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className={`[&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-${progressType}`}
        />
      ),
    });
  });

  return (
    <div className="bg-white dark:bg-whiteDark rounded-[10px] h-full">
      <GlobalUtilityStyle>
        <Cards
          border={false}
          title="Social Media Traffic"
          className="ant-card-head-b-none ant-card-body-pt-0 bg-transparent border-none"
          more={moreContent}
        >
          <TableDefaultStyle>
            <div className="table-responsive table-pl-0 hover-tr-none table-td-border-none table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
              <Table columns={locationColumns} dataSource={locationData} pagination={false} showHeader={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </GlobalUtilityStyle>
    </div>
  );
}

export default TrafficChannel;
