import React, { useEffect, useState } from 'react';
import { Table, Progress } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { TableDefaultStyle, GlobalUtilityStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { memberProgressData } = tableData;

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

const columns = [
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: '',
    dataIndex: 'salary',
    key: 'salary',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: '',
    dataIndex: 'workOn',
    key: 'workOn',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
  {
    title: '',
    dataIndex: 'status',
    key: 'status',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden',
  },
];

function MemberProgress() {
  const [state, setState] = useState({
    traffic: 'today',
  });

  const [memberProgressState, setMemberProgressState] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setMemberProgressState(memberProgressData[state.traffic]);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [state.traffic]);

  /* State destructuring */
  const { traffic } = state;

  const dataSource = [];

  if (memberProgressState)
    memberProgressState.map(({ id, title, workOn, userImg, salary, status, progress }) => {
      return dataSource.push({
        key: id,
        id,
        title: (
          <div className="flex items-center gap-3">
            <img
              className="max-w-[32px]"
              src={require(`../../../../static/img/sellers/${userImg}`)}
              alt="HexaDash Team"
            />
            <span className="font-medium capitalize text-dark dark:text-white87 text-15">{title}</span>
          </div>
        ),
        salary: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">${salary}</span>,
        workOn: <span className="font-normal capitalize text-[14px] text-dark dark:text-white87">{workOn}</span>,
        status: (
          <Progress
            percent={status}
            strokeWidth={5}
            status="active"
            showInfo
            className={`min-w-[100px] font-normal capitalize text-[14px] [&>.ant-progress-text]:text-dark dark:[&>.ant-progress-text]:text-white87 [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-${progress}`}
          />
        ),
      });
    });

  // progress-dt progress-primary

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      traffic: value,
    });
  };

  return (
    <GlobalUtilityStyle>
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  traffic === 'today'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => handleTabActivation('today', e)}
                to="#"
              >
                Today
              </Link>
            </li>
            <li>
              <Link
                className={
                  traffic === 'week'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabActivation('week', e)}
                to="#"
              >
                Week
              </Link>
            </li>
            <li>
              <Link
                className={
                  traffic === 'month'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabActivation('month', e)}
                to="#"
              >
                Month
              </Link>
            </li>
          </ul>
        }
        title="Member Progress"
        size="large"
        more={moreContent}
        className="ant-card-head-b-none ant-card-body-pt-0"
      >
        <TableDefaultStyle>
          <div className="table-pl-0 hover-tr-none table-pt-15 table-td-border-none table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
            <Table columns={columns} dataSource={dataSource} pagination={false} showHeader={false} />
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
}

export default MemberProgress;
