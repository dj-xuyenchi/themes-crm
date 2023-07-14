import React from 'react';
import { Upload, message } from 'antd';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function CoverSection() {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="relative">
      <img
        className="w-full min-h-[150px] object-cover rounded-t-10"
        src={require('../../../static/img/profile/cover-img.png')}
        alt="banner"
      />
      <Upload
        {...props}
        className="absolute border border-white rounded-md top-5 ltr:right-5 rtl:left-5 lg:top-1/2 lg:ltr:right-1/2 lg:rtl:left-1/2 lg:-translate-y-1/2 lg:ltr:translate-x-1/2 lg:rtl:-translate-x-1/2 border-opacity-30"
      >
        <Link to="#" className="flex items-center px-4 xs:px-3 py-2 text-white gap-[8px]">
          <UilCamera className="w-4 h-4" /> Change Cover
        </Link>
      </Upload>
    </div>
  );
}

CoverSection.propTypes = {
  match: propTypes.object,
};

export default CoverSection;
