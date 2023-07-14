import React, { useState } from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import { NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { CalendarWrapperPage } from '../../../styled';
import 'react-calendar/dist/Calendar.css';

function CalenderHead() {
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
    </div>
  );
  const [state, setState] = useState({
    date: new Date(),
  });
  const onChange = (date) => setState({ date });
  return (
    <Cards title="Calendar 2023" more={moreContent}>
      <CalendarWrapperPage className="hexadash-calendar-with-head">
        <div className="hexadash-calendar-widget">
          <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
        </div>
      </CalendarWrapperPage>
    </Cards>
  );
}

export default CalenderHead;
