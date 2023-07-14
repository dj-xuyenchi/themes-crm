import React, { useState, useEffect } from 'react';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilSlidersV from '@iconscout/react-unicons/icons/uil-sliders-v';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import moment from 'moment';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Table } from 'antd';
import Topbar from './Topbar';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import Heading from '../../../components/heading/heading';
import { textRefactor } from '../../../components/utilities/utilities';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { onStarUpdate, onSortingAscending, onSortingDescending } from '../../../redux/email/actionCreator';
import { GlobalUtilityStyle } from '../../styled';

function Content({ searchData, email }) {
  const dispatch = useDispatch();
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [state, setState] = useState({
    selectedRowKeys: [],
    notData: searchData,
    emails: email,
    sort: true,
  });

  const { selectedRowKeys, notData, emails, sort } = state;

  useEffect(() => {
    setState({
      emails: email,
      selectedRowKeys,
      sort,
    });
  }, [email, selectedRowKeys, sort]);

  const handleSearch = (searchText) => {
    const data =
      searchData !== undefined &&
      searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const refreshState = (e) => {
    e.preventDefault();
    setState({
      ...state,
      emails: email,
    });
  };

  const onStaredChange = (id) => {
    dispatch(onStarUpdate(id));
  };

  const data = [];
  if (emails !== undefined)
    emails.map((inbox, key) => {
      // eslint-disable-next-line no-shadow

      const { id, type, userName, status, img, subject, body, attach, stared } = inbox;

      const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
      return data.push({
        key: id,
        name: (
          <div className="flex items-start">
            <Link
              onClick={() => {
                onStaredChange(id);
              }}
              to="#"
            >
              <FontAwesome
                name="star-o"
                className={`text-base ${stared ? ' text-warning' : ' text-light-extra dark:text-white60'}`}
              />
            </Link>
            <img
              className="inline-block w-8 h-8 rounded-full ltr:ml-5 rtl:mr-5 ltr:mr-4 rtl:ml-4"
              src={require(`../../../${img}`)}
              alt=""
            />
            <Heading as="h5" className="text-[15px] font-medium">
              <Link to="#" className="text-body dark:text-white60">
                {userName}
              </Link>
            </Heading>
          </div>
        ),
        email: inbox.email,
        status,
        content: (
          <div className="min-w-[540px]">
            <Heading as="h5" className="text-[15px] font-medium">
              <Link to={`/admin/email/single/${id}`} className="text-body dark:text-white60">
                {subject}
              </Link>
              <span
                className={`inline-flex items-center h-[22px] ltr:ml-2.5 rtl:mr-2.5 px-1.5 text-xs font-normal capitalize rounded-[3px] ${
                  key <= 1
                    ? 'bg-primary-transparent text-primary'
                    : 'bg-deepBG dark:bg-white10 text-body dark:text-white60'
                }`}
              >
                {type}
              </span>
            </Heading>
            <p className="m-0 text-body dark:text-white60">{textRefactor(body, 10)}</p>
            <div className="flex items-center gap-[15px]">
              {attach.length
                ? attach.map((item) => (
                    <a
                      key={item}
                      className="inline-flex items-center bg-deepBG dark:bg-white10 h-[30px] mt-[15px] px-5 text-light dark:text-white60 text-[13px] rounded-[15px]"
                      download
                      href={require(`../../../static/img/email/${item}`)}
                    >
                      <UilPaperclip className="w-4 ltr:mr-1.5 rtl:ml-1.5" />
                      {item}
                    </a>
                  ))
                : null}
            </div>
          </div>
        ),
        time: (
          <span className="text-body dark:text-white60 text-[13px] font-normal">
            {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
          </span>
        ),
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onRowSelection = (filterObj) => {
    const { filter, byValue } = filterObj;

    const newSelectedRowKeys = emails
      .filter((value) => {
        return value[filter] === byValue;
      })
      .map((item) => item.id);

    setState({ ...state, selectedRowKeys: newSelectedRowKeys });
  };

  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'all',
        text: 'All',
        onSelect: () => {
          const newSelectedRowKeys = email.map((item) => item.id);
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'read',
        text: 'Read',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'read' }),
      },
      {
        key: 'unread',
        text: 'Unread',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'unread' }),
      },
      {
        key: 'stared',
        text: 'Stared',
        onSelect: onRowSelection.bind(null, { filter: 'stared', byValue: true }),
      },
      {
        key: 'unstared',
        text: 'Unstared',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: false }),
      },
    ],
  };

  const columns = [
    {
      title: <Topbar refreshState={refreshState} />,
      dataIndex: 'name',
    },
    {
      title: (
        <div className="flex items-center justify-end [&>div]:max-w-[350px] [&>div>div>span>span:first-child]:h-[44px] [&>div>div>span>span:first-child>input]:h-[44px] [&>div>div>span>span:first-child>input]:bg-transparent [&>div>div>span>span:first-child]:rounded-[23px] [&>div>div>span>span:first-child]:border-none [&>div>div>span>span:first-child]:bg-normalBG dark:[&>div>div>span>span:first-child]:bg-white10 [&>div>div>span>span:last-child>span>span>svg]:text-dark dark:[&>div>div>span>span:last-child>span>span>svg]:text-white87 [&>div>.ant-select-selector]:bg-transparent">
          <AutoComplete placeholder="Search mail" onSearch={handleSearch} dataSource={notData} width="80%" patterns />
        </div>
      ),
      dataIndex: 'content',
    },
    {
      title: (
        <>
          <div className="flex items-center">
            <span className="inline-block text-sm font-normal text-light dark:text-white60">1 - 50 of 235</span>
            <div className="flex items-center mx-5">
              <Link
                className="inline-flex items-center justify-center bg-transparent text-light dark:text-primary w-[30px] h-[30px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
                to="#"
              >
                {!rtl ? <UilAngleLeft /> : <UilAngleRight />}
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-transparent text-light dark:text-white60 w-[30px] h-[30px] rounded-full hover:bg-primary-transparent hover:text-primary dark:hover:text-primary"
                to="#"
              >
                {rtl ? <UilAngleLeft /> : <UilAngleRight />}
              </Link>
            </div>
            <div className="flex items-center gap-[25px]">
              <Link
                onClick={() => {
                  setState({
                    ...state,
                    sort: !sort,
                  });
                  if (sort) {
                    dispatch(onSortingAscending());
                  } else {
                    dispatch(onSortingDescending());
                  }
                }}
                to="#"
              >
                <UilSlidersV className="w-4 h-4 text-light dark:text-white60" />
              </Link>
              <Dropdown
                content={
                  <div className="bg-white dark:bg-[#1b1d2a] py-[10px] w-[120px] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]  rounded-6">
                    <Link
                      to="#"
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    >
                      <span>Newest</span>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    >
                      <span>Oldest</span>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
                    >
                      <span>Unread</span>
                    </Link>
                  </div>
                }
              >
                <Link to="#">
                  <UilEllipsisV className="w-4 h-4 text-light dark:text-white60" />
                </Link>
              </Dropdown>
            </div>
          </div>
        </>
      ),
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <GlobalUtilityStyle>
      <div className="table-responsive hover-tr-none table-th-shape-none table-tr-selected-background-transparent table-tr-px-30 table-last-td-text-right rounded-10 dark:bg-white10">
        <Table
          className="[&>div>div>div>div>div>table>tbody>tr>.ant-table-cell]:align-top [&>div>div>div>div>div>table>tbody>tr>td]:text-start [&>div>div>div>div>div>table>tbody>tr>td]:border-regular dark:[&>div>div>div>div>div>table>tbody>tr>td]:border-white10 [&>div>div>div>div>div>table>tbody>tr:last-child>td]:border-none  [&>div>div>div>div>div>table>thead>tr>th]:bg-transparent ltr:[&>div>div>div>div>div>table>thead>tr>th]:pr-[30px] rtl:[&>div>div>div>div>div>table>thead>tr>th]:pl-[30px] dark:[&>div>div>div>div>div>table>thead>tr>th]:border-none [&>div>div>.ant-table]:rounded-10 ltr:[&>div>div>div>div>div>table>thead>tr>th>div>.ant-table-selection-extra]:right-[-20px] rtl:[&>div>div>div>div>div>table>thead>tr>th>div>.ant-table-selection-extra]:left-[-20px] [&>div>div>div>div>div>table>thead>tr>th>div>.ant-table-selection-extra]:top-[-3px]"
          pagination={false}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          onChange={handleChange}
        />
      </div>
    </GlobalUtilityStyle>
  );
}

Content.propTypes = {
  searchData: propTypes.arrayOf(propTypes.object).isRequired,
  email: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Content;
