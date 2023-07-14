import UilBook from '@iconscout/react-unicons/icons/uil-book-open';
import UilDownloadAlt from '@iconscout/react-unicons/icons/uil-download-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function ExportButtonPageHeader() {
  const content = (
    <div className="block bg-white dark:bg-[#1b1d2a]">
      <NavLink className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm" to="#">
        <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Printer</span>
      </NavLink>
      <NavLink className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm" to="#">
        <UilBook className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>PDF</span>
      </NavLink>
      <NavLink className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm" to="#">
        <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm" to="#">
        <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink className="flex items-center hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm" to="#">
        <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>CSV</span>
      </NavLink>
    </div>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button
        className="text-[14px] font-medium border-none leading-[22px] dark:bg-white10 text-theme-gray dark:text-white60 dark:focus:text-dark dark:hover:text-dark inline-flex items-center justify-center rounded-[4px] px-[20px] h-[34px] gap-[8px]"
        size="small"
        type="white"
      >
        <UilDownloadAlt className="w-[14px] h-[14px] text-primary" />
        Export
      </Button>
    </Popover>
  );
}

export { ExportButtonPageHeader };
