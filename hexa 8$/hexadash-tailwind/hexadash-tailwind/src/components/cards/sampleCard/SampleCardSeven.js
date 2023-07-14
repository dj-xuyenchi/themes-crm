import UilEllipsis from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../buttons/buttons';
import { Checkbox } from '../../checkbox/checkbox';
import { Dropdown } from '../../dropdown/dropdown';

function SampleCardSeven({ item }) {
  const { installed, content, title, img } = item;
  const [state, setState] = useState({
    checked: false,
  });
  const onChange = (checked) => {
    setState({ ...state, checked });
  };
  return (
    <div className="relative mb-0 overflow-hidden bg-white dark:bg-white10 rounded-10">
      <h4 className="text-[18px] font-medium mb-[18px] text-dark dark:text-white87 pt-[25px] px-[25px] flex items-center gap-[20px]">
        <img className="max-w-[50px]" src={require(`../../../${img}`)} alt="" />
        <span className="text-dark dark:text-white87">{title}</span>
      </h4>
      <div className="px-[25px]">
        <p className="text-theme-gray dark:text-white60 text-[15px]">{content}</p>
      </div>
      <div
        className={
          installed
            ? 'flex justify-between items-center installed dark:border-white10 border-top-1 p-[25px] [&.installed>.card-short-checkbox]:block [&>.card-short-actions>.content-not-installed]:hidden'
            : 'border-regular border-top-1 p-[25px] [&>.card-short-actions>.content-installed]:hidden flex justify-end'
        }
      >
        <div className="hidden card-short-checkbox [&>label>span+span]:text-success [&>label>.ant-checkbox-checked>.ant-checkbox-inner]:bg-success [&>label>.ant-checkbox-checked>.ant-checkbox-inner]:border-success">
          <Checkbox checked={state.checked} onChange={onChange}>
            Installed
          </Checkbox>
        </div>
        <div className="flex card-short-actions">
          <div className="flex items-center content-installed content-action gap-[10px]">
            <Button className="hover:bg-hbr-primary border-solid border-1 border-primary text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[38px]">
              Open
            </Button>
            <div className="more">
              <Dropdown
                action={['click']}
                className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
                content={
                  <>
                    <Link
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                      to="#"
                    >
                      Edit
                    </Link>
                    <Link
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                      to="#"
                    >
                      Delete
                    </Link>
                    <Link
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                      to="#"
                    >
                      View
                    </Link>
                  </>
                }
              >
                <Link className="text-light-extra" to="#">
                  <UilEllipsis className="w-[24px] h-[24px] m-0" />
                </Link>
              </Dropdown>
            </div>
          </div>
          <div className="flex items-center content-not-installed content-action gap-[10px]">
            <Button
              className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[38px]"
              raised
            >
              Install
            </Button>
            <div className="more">
              <Dropdown
                action={['click']}
                className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
                content={
                  <>
                    <>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        Edit
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        Delete
                      </Link>
                      <Link
                        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                        to="#"
                      >
                        View
                      </Link>
                    </>
                  </>
                }
              >
                <Link className="text-light-extra" to="#">
                  <UilEllipsis className="w-[24px] h-[24px] m-0" />
                </Link>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SampleCardSeven.propTypes = {
  item: propTypes.object,
};

SampleCardSeven.defaultProps = {
  item: {
    id: 1,
    title: 'Adobe CC',
    installed: true,
    content: 'Lorem Ipsum is simply dummy text of the and the typesetting industry.',
    img: 'static/img/icon/adobe.svg',
  },
};

export default SampleCardSeven;
