import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Button } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '../../dropdown/dropdown';

function SampleCardSix({ item }) {
  const { content, title, img, className } = item;
  return (
    <figure className="mb-0 p-[25px] bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] flex m-0 relative gap-[20px] rounded-10">
      <div className={`w-[60px] h-[60px] rounded-[12px] flex items-center justify-center bg-${className}`}>
        <img src={require(`../../../${img}`)} alt="" />
      </div>
      <figcaption>
        <div className="more">
          <Dropdown
            className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
            content={
              <>
                <Link
                  className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                  to="#"
                >
                  <span>Edit</span>
                </Link>
                <Link
                  className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                  to="#"
                >
                  <span>Delete</span>
                </Link>
              </>
            }
            action={['click']}
          >
            <Button
              className="absolute top-[10px] bg-transparent border-none text-light-extra dark:text-white60 ltr:right-[15px] rtl:left:[15px] min-w-[30px] min-h-[30px] inline-flex items-center justify-center"
              type="light"
              to="#"
              shape="circle"
            >
              <UilEllipsisH className="w-[24px] h-[24px] m-0" />
            </Button>
          </Dropdown>
        </div>
        <h2 className="text-dark dark:text-white87 text-[20px] font-semibold mb-0">{title}</h2>
        <p className="text-[14px] text-dark dark:text-white87 mb-0">{content}</p>
      </figcaption>
    </figure>
  );
}

SampleCardSix.propTypes = {
  item: propTypes.object,
};

SampleCardSix.defaultProps = {
  item: {
    id: 1,
    title: '47',
    content: 'Total tasks',
    img: 'static/img/icon/1.svg',
    className: 'primary',
  },
};

export default SampleCardSix;
