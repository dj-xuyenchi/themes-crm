import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { NavLink } from 'react-router-dom';
import { Timeline } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { SwEllipse } from '../../../../components/utilities/icons';
import { TimelineNormalWrap } from '../../../ui-elements/ui-elements-styled';
import { GlobalUtilityStyle } from '../../../styled';

function Timelines() {
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
      <TimelineNormalWrap>
        <Cards title="Timeline" more={moreContent} className="ant-card-head-b-none ant-card-body-pt-0">
          <Timeline className="py-3">
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#FB3586" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">
                  Create a services site 2015-09-01
                </span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#5840FF" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">
                  Solve initial network problems 2015-09-01
                </span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#01B81A" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">
                  Network problems being solved 2015-09-01
                </span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#00AAFF" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">Technical testing 2015-09-01</span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#FA8B0C" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">
                  Network problems being solved 2015-09-01
                </span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
            <Timeline.Item className="pb-[27px] last:pb-0" dot={<SwEllipse size={10} color="#FF0F0F" />}>
              <p className="flex items-center justify-between gap-2.5">
                <span className="text-sm font-medium text-dark dark:text-white87">
                  Solve initial network problems 2015-09-01
                </span>{' '}
                <span className="text-[13px] text-light dark:text-white30">10 minutes</span>
              </p>
            </Timeline.Item>
          </Timeline>
        </Cards>
      </TimelineNormalWrap>
    </GlobalUtilityStyle>
  );
}

export default Timelines;
