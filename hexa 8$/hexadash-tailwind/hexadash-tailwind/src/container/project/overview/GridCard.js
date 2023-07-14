import React from 'react';
import { Progress, Tag } from 'antd';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { textRefactor } from '../../../components/utilities/utilities';

function GridCard({ value }) {
  const { id, title, status, content, percentage } = value;
  return (
    <>
      <div className="bg-white dark:bg-white10 rounded-[10px]">
        <div className="pt-[30px] px-[30px]">
          <div className="flex items-start justify-between">
            <h1 className="flex flex-wrap items-center -m-0.5 text-base">
              <Link
                to={`/admin/project/projectDetails/${id}`}
                className="m-0.5 ltr:mr-[11px] rtl:ml-[11px] text-dark dark:text-white87"
              >
                {title}
              </Link>
              <Tag
                className={`text-white border-none ltr:mr-0 rtl:ml-0 uppercase text-[10px] ${
                  status === 'early'
                    ? 'bg-primary'
                    : status === 'progress'
                    ? 'bg-danger'
                    : status === 'late'
                    ? 'bg-warning'
                    : status === 'complete'
                    ? 'bg-success'
                    : 'bg-dark'
                } `}
              >
                {status}
              </Tag>
            </h1>
            <Dropdown
              content={
                <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    to="#"
                  >
                    Total Income
                  </Link>
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    to="#"
                  >
                    Total Expense
                  </Link>
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    to="#"
                  >
                    Total Tax
                  </Link>
                  <Link
                    className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    to="#"
                  >
                    Net Profit
                  </Link>
                </div>
              }
            >
              <Link to="#" className="text-light-extra dark:text-white60">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
          <p className="text-body dark:text-white60 mt-[15px] mb-[25px]">{textRefactor(content, 13)}</p>
          <div className="flex items-center mb-[15px] gap-x-[30px]">
            <div className="flex flex-col">
              <span className="text-xs mb-0.5 text-body dark:text-white60">Start Date</span>
              <strong className="font-medium text-body dark:text-white60">26 Dec 2019</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-xs mb-0.5 text-body dark:text-white60">Deadline</span>
              <strong className="font-medium text-body dark:text-white60">18 Mar 2020</strong>
            </div>
          </div>
          <Progress
            percent={status === 'complete' ? 100 : percentage}
            strokeWidth={5}
            status="primary"
            className=" ltr:[&>span.ant-progress-text]:ml-2 rtl:[&>span.ant-progress-text]:mr-2 [&>span.ant-progress-text]:text-body dark:[&>span.ant-progress-text]:text-white60 [&>span.ant-progress-text]:text-xs [&>span.ant-progress-text]:font-medium [&.ant-progress-status-success>.ant-progress-text>span]:text-success"
          />
          <p className="mt-0.5 text-body dark:text-white60 text-xs">12/15 Task Completed</p>
        </div>
        <div className="pt-4 px-[30px] pb-[25px] mt-[17px] border-t border-regular dark:border-white10">
          <p className="mb-4 text-sm text-body dark:text-white60">Assigned To</p>
          <ul className="flex items-center flex-wrap -m-[3px]">
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/1.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/2.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/3.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/4.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/5.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/6.png`)}
                alt=""
              />
            </li>
            <li className="m-[3px]">
              <img
                className="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
                src={require(`../../../static/img/users/7.png`)}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

GridCard.propTypes = {
  value: PropTypes.object,
};

export default GridCard;
