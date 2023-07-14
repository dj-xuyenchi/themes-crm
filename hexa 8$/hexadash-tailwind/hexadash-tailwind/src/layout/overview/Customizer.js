/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UilPen from '@iconscout/react-unicons/icons/uil-pen';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import FontAwesome from 'react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLayoutMode, changeMenuMode, changeDirectionMode } from '../../redux/themeLayout/actionCreator';

function Customizer() {
  const { t } = useTranslation();
  const { rtl, layoutMode, topMenu } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      layoutMode: state.ChangeLayoutMode.mode,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });
  const [state, setState] = useState({
    customizerAction: false,
  });
  const { customizerAction } = state;

  const dispatch = useDispatch();

  // open Customizer Function
  const showCustomizer = () => {
    setState({
      customizerAction: !customizerAction,
    });
  };

  const darkmodeActivated = () => {
    document.body.classList.add('dark');
    document.body.classList.add('dark');
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark');
    document.body.classList.remove('dark');
  };
  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
  const changeNavbar = (topMode) => {
    const html = document.querySelector('html');
    if (topMode) {
      html.classList.add('hexadash-topmenu');
    } else {
      html.classList.remove('hexadash-topmenu');
    }
    dispatch(changeMenuMode(topMode));
  };
  const changeLayoutDirection = (rtlMode) => {
    if (rtlMode) {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'rtl');
    } else {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'ltr');
    }
    dispatch(changeDirectionMode(rtlMode));
  };

  return (
    <>
      <div>
        <Link
          className="inline-flex items-center bg-normalBG hover:bg-primary/10 hover:text-primary dark:bg-[#282b37] dark:text-white60 min-h-[34px] sm:w-[34px] sm:justify-center px-4 sm:px-0 sm:mx-[10px] xl:mx-[12px] mx-[20px] rounded-2xl gap-[8px] dark:hover:bg-white60 group dark:hover:text-dark transition duration-300"
          to="#"
          onClick={() => {
            showCustomizer();
          }}
        >
          <UilPen className="w-3.5 h-3.5 sm:mr-0 text-body group-hover:text-primary dark:text-white60 dark:group-hover:text-currentColor" />
          <span className="text-sm font-medium text-body group-hover:text-primary dark:text-white60 dark:group-hover:text-currentColor sm:hidden">
            {t('Customize')}...
          </span>
        </Link>
        <div
          className={`fixed top-0 ltr:right-0 rtl:left-0 bg-white dark:bg-[#323541] w-[350px] sm:w-[300px] h-full translate-x-0 shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] z-998 overflow-y-auto transition-all ${
            customizerAction
              ? 'ltr:translate-x-[0] rtl:translate-x-[-0]'
              : 'ltr:translate-x-[350px] rtl:translate-x-[-350px]'
          }`}
        >
          <div className="h-full">
            <div className="relative px-6 pt-12 pb-4">
              <h4 className="mb-0.5 text-dark dark:text-white87 text-base font-semibold">{t('Customizer')}</h4>
              <span className="dark:text-white60">
                {t('Customize')} {t('your')} {t('overview')} {t('page')} {t('layout')}
              </span>
              <Link
                to="#"
                className="absolute top-7 ltr:right-4 rtl:left-4"
                onClick={() => {
                  showCustomizer();
                }}
              >
                <UilTimes className="text-danger" />
              </Link>
            </div>
            <div className="px-6 pb-6">
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('layouts')} {t('type')}
                </h4>
                <ul className="flex -m-2.5">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(false);
                      }}
                      to="#"
                    >
                      <img src={require('../../static/img/ltr.png')} alt="" />
                      <FontAwesome
                        className={!rtl ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(true);
                      }}
                      to="#"
                    >
                      <img src={require(`../../static/img/rtl.png`)} alt="" />
                      <FontAwesome
                        className={rtl ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('sidebar')} {t('type')}
                </h4>
                <ul className="flex -m-2.5">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        darkmodeDiactivated();
                        changeLayout('lightMode');
                      }}
                      to="#"
                    >
                      <img src={require('../../static/img/light.png')} alt="" />
                      <FontAwesome
                        className={layoutMode === 'lightMode' ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        darkmodeActivated();
                        changeLayout('darkMode');
                      }}
                      to="#"
                    >
                      <img src={require(`../../static/img/dark.png`)} alt="" />
                      <FontAwesome
                        className={layoutMode === 'darkMode' ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('navbar')} {t('type')}
                </h4>
                <ul className="flex -m-2.5">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(false);
                      }}
                      to="#"
                    >
                      <img src={require('../../static/img/side.png')} alt="" />
                      <FontAwesome
                        className={!topMenu ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(true);
                      }}
                      to="#"
                    >
                      <img src={require(`../../static/img/top.png`)} alt="" />
                      <FontAwesome
                        className={topMenu ? 'block absolute top-4 right-4 text-success' : 'hidden'}
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customizer;
