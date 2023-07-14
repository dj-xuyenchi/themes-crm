import React from 'react';
import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt';
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const CalendarButtonPageHeader = () => {
  const content = (
    <>
      <DateRangePickerOne />
    </>
  );

  return (
    <Popover placement="bottomRight" title="Search by Calendar" content={content} action="hover">
      <Button size="small" type="white">
        <UilCalendar/>
        Calendar
      </Button>
    </Popover>
  );
};

export { CalendarButtonPageHeader };
