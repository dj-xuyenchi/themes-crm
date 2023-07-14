import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../../components/maps/google-maps';
import { BorderLessHeading } from '../../../styled';

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

function Locations() {
  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards className="[&>.ant-card-head]:border-b-0 [&>.ant-card-body]:pt-0" title="Location" more={moreContent}>
          <GoogleMaps latitude="55.797897" longitude="-1.077641" />
        </Cards>
      </BorderLessHeading>
    </div>
  );
}

export default Locations;
