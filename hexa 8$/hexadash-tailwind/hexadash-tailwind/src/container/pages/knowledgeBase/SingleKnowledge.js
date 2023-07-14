/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left';
import UilAlignRight from '@iconscout/react-unicons/icons/uil-align-right';
import SingleKnowledgeDetails from './overview/SingleKnowledge/SingleKnowledgeDetails';
import GeneralKnowledgeTop from './overview/GeneralKnowledgeTop';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';

function SingleKnowledge() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Knowledgebase',
    },
  ];
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const [open, setOpen] = useState('menu1');
  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const [subMenuItem, setSubMenuItem] = useState('one');

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Knowledgebase"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <GeneralKnowledgeTop />
        <div className="bg-white dark:bg-white10 mt-[50px] px-[50px] lg:px-[30px] md:px-[20px] pb-[50px] rounded-10">
          <div className="max-w-[1110px] mx-auto">
            <div className="flex justify-between sm:flex-wrap sm:justify-center gap-[10px] pt-6 pb-10">
              <ul className="flex flex-wrap items-center gap-2 mb-0">
                <li>
                  <Link className="text-sm text-dark dark:text-white87" to="/admin/knowledgebase/plugins">
                    Doc Home
                  </Link>
                </li>
                <li>
                  <FontAwesome className="text-[14px] ltr:mr-2 rtl:ml-2" name="angle-right" size="2x" />
                  <Link className="text-sm text-dark dark:text-white87" to="/admin/knowledgebase/plugins">
                    Switch between accounts
                  </Link>
                </li>
                <li>
                  <FontAwesome className="text-[14px] ltr:mr-2 rtl:ml-2" name="angle-right" size="2x" />
                  <Link className="text-sm text-dark dark:text-white87" to="/admin/knowledgebase/plugins">
                    Introduction to Plugin
                  </Link>
                </li>
                <li>
                  <FontAwesome className="text-[14px] ltr:mr-2 rtl:ml-2" name="angle-right" size="2x" />
                  <span className="text-[#868eae] dark:text-white60">Plugins</span>
                </li>
              </ul>
              {responsive <= 991 && (
                <Button type="primary" className="knowledge-sidebar-trigger" onClick={toggleCollapsed}>
                  {collapsed ? <UilAlignLeft /> : <UilAlignRight />}
                </Button>
              )}
            </div>
            <div className="flex lg:flex-wrap">
              {responsive > 991 ? (
                <div className="min-w-[330px] h-fit ltr:mr-5 rtl:ml-5 border border-normal dark:border-white10 rounded">
                  <h4 className="px-[18px] py-5 text-dark  dark:text-white87 text-base border-b border-normal dark:border-white10 font-semibold">
                    Plugins
                  </h4>
                  <ul className="pt-[18px] px-5 pb-9">
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu1')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu1' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span>Introduction to Plugin</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu1' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu2')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu2' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span>Productivity tools for your Plugin admin & change password</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu2' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu3')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu3' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Download, install, and upgrade</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu3' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu4')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu4' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Explore plans & features</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu4' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu5')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu5' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Explore plans & features</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu5' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu6')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu6' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Profile Settings</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu6' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <Link
                        to="#"
                        onClick={() => setOpen('menu7')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu7' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Listings Management</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu7' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => setOpen('menu8')}
                        className="flex items-start text-base font-medium text-dark dark:text-white87"
                      >
                        {open === 'menu8' ? (
                          <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        ) : (
                          <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                        )}
                        <span className="menu-text">Miscellaneous</span>
                      </Link>
                      <ul
                        className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                        ${open === 'menu8' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                      >
                        <li className="mb-0">
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('one');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Switch between accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('two');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Installing vendor marketplace lorem vendor marketplace
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('three');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Stop getting emails from lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('four');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Threads to organize discussions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => {
                              setSubMenuItem('five');
                            }}
                            className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                            ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                          >
                            Understand your actions in lorem
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  className={`fixed top-[64px] ltr:left-0 rtl:right-0 bg-white dark:bg-dark w-[300px] h-full overflow-y-auto z-20 transition ${
                    collapsed ? 'translate-x-0' : 'ltr:-translate-x-[300px] rtl:translate-x-[300px]'
                  } `}
                >
                  <div className="w-[300px] h-screen overflow-y-auto border border-normal dark:border-white10 rounded">
                    <h4 className="flex justify-between px-[18px] py-5 text-dark dark:text-white87 text-base border-b border-normal dark:border-white10 font-semibold">
                      Plugins
                      <Button
                        type="link"
                        className="absolute top-[18px] ltr:right-[15px] rtl:left-[15px] bg-info h-8 px-5 text-white rounded-[6px]"
                        onClick={toggleCollapsed}
                      >
                        <UilTimes className="w-[14px] h-[14px]" />
                      </Button>
                    </h4>
                    <ul className="pt-[18px] px-5 pb-9">
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu1')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu1' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span>Introduction to Plugin</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu1' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu2')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu2' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span>Productivity tools for your Plugin admin & change password</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu2' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu3')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu3' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Download, install, and upgrade</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu3' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu4')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu4' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Explore plans & features</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu4' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu5')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu5' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Explore plans & features</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu5' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu6')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu6' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Profile Settings</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu6' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="#"
                          onClick={() => setOpen('menu7')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu7' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Listings Management</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu7' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => setOpen('menu8')}
                          className="flex items-start text-base font-medium text-dark dark:text-white87"
                        >
                          {open === 'menu8' ? (
                            <UilAngleDown className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          ) : (
                            <UilAngleUp className="min-w-[14px] min-h-[14px] ltr:mr-2 rtl:ml-2" />
                          )}
                          <span className="menu-text">Miscellaneous</span>
                        </Link>
                        <ul
                          className={`relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white10
                          ${open === 'menu8' ? 'relative h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible' : 'h-0 m-0 hidden'}`}
                        >
                          <li className="mb-0">
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('one');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'one' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('two');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'two' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Installing vendor marketplace lorem vendor marketplace
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('three');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'three' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Stop getting emails from lorem
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('four');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'four' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Threads to organize discussions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={() => {
                                setSubMenuItem('five');
                              }}
                              className={`relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10
                              ${subMenuItem === 'five' ? 'after:bg-primary' : 'after:bg-transparent'}`}
                            >
                              Understand your actions in lorem
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <SingleKnowledgeDetails />
            </div>
          </div>
          <span
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            className={collapsed ? 'sidebar-shade show' : 'sidebar-shade'}
            onClick={toggleCollapsed}
          />
        </div>
      </main>
    </>
  );
}

export default SingleKnowledge;
