import React from 'react';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../components/dropdown/dropdown';
import filesData from '../../../demoData/filesData.json';

function FileListCard({ title }) {
  return (
    <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] rounded-10 relative mb-[25px]">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b-1  flex items-center justify-between">
        <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          {title}
        </h1>
      </div>
      <div className="min-h-[380px] flex flex-col gap-y-[18px] p-[25px]">
        {filesData.map((file, index) => (
          <div className="flex items-center justify-between file-list__single" key={index}>
            <div className="flex items-center w-[50%] gap-x-[16px]">
              <img className="max-w-[42px]" src={require(`../../../static/img/files/${file.logo}`)} alt="File Logo" />
              <div>
                <span className="text-[14px] font-medium text-dark dark:text-white87 block leading-[1.42]">
                  {file.title}
                </span>
                <span className="my-[2px] text-theme-gray dark:text-white60 block text-[12px] leading-[1.42]">
                  {file.size}
                </span>
                <span className="inline-flex text-[12px] leading-[1.42] gap-[10px]">
                  {file.actions.map((action, ind) => (
                    <Link className="font-medium text-primary" to={action.url} key={ind}>
                      {action.label}
                    </Link>
                  ))}
                </span>
              </div>
            </div>
            <Dropdown
              className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
              content={
                <>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEye className="group-hover:text-primary" />
                    View
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilEdit className="group-hover:text-primary" />
                    Edit
                  </Link>
                  <Link
                    className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
                    to="#"
                  >
                    <UilTrashAlt className="group-hover:text-primary" />
                    Delete
                  </Link>
                </>
              }
            >
              <Link className="text-light-extra dark:text-white60" to="#">
                <UilEllipsisH className="w-[24px] h-[24px] m-0" />
              </Link>
            </Dropdown>
          </div>
        ))}
      </div>
    </div>
  );
}

FileListCard.defaultProps = {
  title: 'File',
};

FileListCard.propTypes = {
  title: PropTypes.string,
};

export default FileListCard;
