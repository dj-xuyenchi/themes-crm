import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const SearchBar = React.memo(() => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    openSearch: false,
  });

  const openSearchbar = (e) => {
    e.preventDefault();
    setState({
      ...state,
      openSearch: true,
    });
  };
  const closeSearchbar = (e) => {
    e.preventDefault();
    setState({
      ...state,
      openSearch: false,
    });
  };

  const { openSearch } = state;

  return (
    <div className="flex items-center ltr:mr-2.5 rtl:ml-2.5">
      <div
        className={
          openSearch
            ? 'null ssm:fixed ssm:top-[72px] ssm:bg-white ssm:dark:bg-[#1b1d2a] ssm:rounded-[6px] ssm:ltr:ssm:right-[10px] rtl:ssm:left-[10px] ssm:min-w-[280px] ssm:z-[98] '
            : 'opacity-0 invisible w-0'
        }
      >
        <Form form={form} name="hexadash-search">
          <Form.Item name="search-input" className="mb-0">
            <Input
              className="bg-transparent dark:bg-transparent p-1.5 min-ssm:border-none ssm:h-[48px] ssm:px-[20px] ssm:dark:shadow-none ssm:border-1 ssm:border-regular dark:ssm:border-white10"
              placeholder="Search Here"
            />
          </Form.Item>
        </Form>
      </div>
      <Link
        to="/"
        onClick={(e) => openSearchbar(e)}
        className={
          openSearch
            ? 'hidden opacity-0'
            : 'hexadash-search-icon flex relative -top-1 w-4 h-4 text-theme-gray dark:text-white60 '
        }
      >
        <UilSearch />
      </Link>
      <Link
        to="/"
        onClick={(e) => closeSearchbar(e)}
        className={openSearch ? 'flex relative -top-1 w-4 h-4 text-theme-gray dark:text-white60' : 'hidden opacity-0'}
      >
        <UilTimes />
      </Link>
    </div>
  );
});

export default SearchBar;
