import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Input, Form } from 'antd';
import UilInbox from '@iconscout/react-unicons/icons/uil-inbox';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilExclamationOctagon from '@iconscout/react-unicons/icons/uil-exclamation-octagon';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import { Button } from '../../../components/buttons/buttons';
import Title from '../../../components/heading/heading';

const EmailNavbar = React.memo(() => {
  const [state, setState] = useState({
    labels: ['personal', 'social', 'promotions'],
    newLabel: '',
    addNewDisplay: false,
  });
  const { labels, newLabel, addNewDisplay } = state;

  const addNewLabels = (e) => {
    e.preventDefault();

    setState({
      ...state,
      addNewDisplay: true,
    });
  };

  const cancelAddNewLabels = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handelChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (newLabel !== '') {
      setState({
        ...state,
        labels: [...labels, newLabel],
        newLabel: '',
      });
    } else {
      alert('Please Give a label...');
    }
  };

  const onLabelChange = (e) => {
    setState({
      ...state,
      newLabel: e.target.value,
    });
  };

  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <>
      <ul className="mb-0">
        <li className="relative">
          <NavLink
            to="./inbox"
            onClick={() => {
              setActiveTab('inbox');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'inbox'
                ? 'bg-primary-transparent text-primary group [&.active>svg]:text-primary'
                : 'bg-transparent  text-body dark:text-white60 group [&>svg]:text-light-extra dark:[&>svg]:text-white60'
            }`}
          >
            <UilInbox className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Inbox</span>
              <span className="flex items-center justify-center bg-primary-transparent text-primary h-[20px] px-[6.5px] text-[11px] rounded-[10px]">
                3
              </span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./starred"
            onClick={() => {
              setActiveTab('starred');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'starred'
                ? 'bg-primary-transparent text-primary [&.active>svg]:text-primary'
                : 'text-body dark:text-white60 [&>svg]:text-light-extra dark:[&>svg]:text-white60'
            }`}
          >
            <UilStar className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Starred</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./sent"
            onClick={() => {
              setActiveTab('sent');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'sent'
                ? 'bg-primary-transparent text-primary [&.active>svg]:text-primary'
                : 'text-body [&>svg]:text-light-extra dark:text-white60'
            }`}
          >
            <UilMessage className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Sent</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./drafts"
            onClick={() => {
              setActiveTab('drafts');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'drafts'
                ? 'bg-primary-transparent text-primary [&.active>svg]:text-primary'
                : 'text-body dark:text-white60 [&>svg]:text-light-extra dark:[&>svg]:text-white60'
            }`}
          >
            <UilEdit className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Drafts</span>
              <span className="flex items-center justify-center bg-primary-transparent text-primary h-[20px] px-[6.5px] text-[11px] rounded-[10px]">
                12
              </span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./spam"
            onClick={() => {
              setActiveTab('spam');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'spam'
                ? 'bg-primary-transparent text-primary [&.active>svg]:text-primary'
                : 'text-body [&>svg]:text-light-extra dark:text-white60'
            }`}
          >
            <UilExclamationOctagon className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Spam</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./trash"
            onClick={() => {
              setActiveTab('trash');
            }}
            className={`flex items-center px-[15px] py-[10px] gap-[15px] rounded-md ${
              activeTab === 'trash'
                ? 'bg-primary-transparent text-primary [&.active>svg]:text-primary'
                : 'text-body dark:text-white60 [&>svg]:text-light-extra dark:[&>svg]:text-white60'
            }`}
          >
            <UilTrashAlt className="w-4 h-4" />
            <span className="flex items-center justify-between w-full">
              <span>Trash</span>
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="mt-[35px]">
        <p className="m-0 px-[15px] text-[#9299b8] dark:text-white60 text-xs">Labels</p>
        <ul className="mt-1.5 mb-0">
          {labels.map((label) => {
            return (
              <li key={label} className="relative">
                <Link
                  to="#"
                  className="flex items-center bg-transparent text-body dark:text-white60 px-[15px] py-[10px] gap-[15px] rounded-md capitalize hover:bg-primary-transparent hover:text-primary"
                >
                  <UilListUl className="w-4 h-4" /> {label}
                </Link>
              </li>
            );
          })}

          <li className="relative" onKeyPress={() => {}} onClick={addNewLabels} role="menuitem">
            <NavLink
              onClick={addNewLabels}
              to="./newLabels"
              className="flex items-center bg-transparent text-light dark:text-white60 px-[15px] py-[10px] gap-[15px] text-[15px] rounded-md capitalize hover:bg-primary-transparent hover:text-primary"
            >
              <UilPlus className="w-4 h-4" /> Add New Label
            </NavLink>
            {addNewDisplay && (
              <div className="relative left-1/2 -translate-x-1/2 bg-white dark:bg-white10 w-[calc(100% + 60px)] px-[30px] py-[25px] rounded-lg shadow-boxLarge dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]">
                <Form onSubmit={handelChange}>
                  <Title label={3} className="mb-4 text-base font-medium text-dark dark:text-white87">
                    Add New Label
                  </Title>
                  <Input
                    onChange={onLabelChange}
                    value={newLabel}
                    name={newLabel}
                    type="text"
                    placeholder="Enter label name"
                    className="bg-white border rounded-sm dark:bg-white10 h-11 text-body dark:text-white60 dark:border-white10"
                  />
                  <div className="flex items-center flex-wrap mt-[10px] -mx-[5px] -mb-[5px]">
                    <Button
                      size="default"
                      onClick={handelChange}
                      type="primary"
                      className="bg-primary hover:bg-primary-hover h-[38px] m-[5px] px-5 text-white dark:text-white87 text-sm font-semibold rounded"
                    >
                      Add Label
                    </Button>
                    <Button
                      onClick={cancelAddNewLabels}
                      type="default"
                      className="h-[38px] m-[5px] px-5 text-body dark:text-white60 text-sm font-semibold border-none bg-white dark:bg-white10"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
});

export default EmailNavbar;
