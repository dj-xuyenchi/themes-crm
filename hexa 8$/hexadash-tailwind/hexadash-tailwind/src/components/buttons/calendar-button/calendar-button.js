import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt';
import React from 'react';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function CalendarButtonPageHeader() {
  const content = <DateRangePickerOne />;

  return (
    <Popover placement="bottomRight" title="Search by Calendar" content={content} action="hover">
      <Button
        className="text-[14px] font-medium border-none leading-[22px] dark:bg-white10 text-theme-gray dark:text-white60 dark:focus:text-dark dark:hover:text-dark inline-flex items-center justify-center rounded-[4px] px-[20px] h-[34px] gap-[8px]"
        size="small"
        type="white"
      >
        <UilCalendar className="w-[14px] h-[14px] text-primary" />
        Calendar
      </Button>
    </Popover>
  );
}

export { CalendarButtonPageHeader };
