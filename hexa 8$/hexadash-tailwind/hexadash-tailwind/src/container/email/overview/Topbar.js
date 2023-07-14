import React from 'react';
import UilRedo from '@iconscout/react-unicons/icons/uil-redo';
import UilArchive from '@iconscout/react-unicons/icons/uil-archive';
import UilExclamationOctagon from '@iconscout/react-unicons/icons/uil-exclamation-octagon';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import UilFolder from '@iconscout/react-unicons/icons/uil-folder';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const Topbar = React.memo(({ refreshState }) => {
  return (
    <div className="flex items-center">
      <Tooltip placement="bottom" title="Refresh">
        <NavLink
          onClick={refreshState}
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilRedo className="w-4 h-4" />
        </NavLink>
      </Tooltip>
      <Tooltip placement="bottom" title="Archive">
        <NavLink
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilArchive className="w-4 h-4" />
        </NavLink>
      </Tooltip>
      <Tooltip placement="bottom" title="Info">
        <NavLink
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilExclamationOctagon className="w-4 h-4" />
        </NavLink>
      </Tooltip>
      <Tooltip placement="bottom" title="Delete">
        <NavLink
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilTrash className="w-4 h-4" />
        </NavLink>
      </Tooltip>
      <Tooltip placement="bottom" title="Read">
        <NavLink
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilBookOpen className="w-4 h-4" />
        </NavLink>
      </Tooltip>
      <Tooltip placement="bottom" title="Folder">
        <NavLink
          to="#"
          className="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white60 w-[38px] h-[38px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
        >
          <UilFolder className="w-4 h-4" />
        </NavLink>
      </Tooltip>
    </div>
  );
});

Topbar.propTypes = {
  refreshState: propTypes.func.isRequired,
};

export default Topbar;
