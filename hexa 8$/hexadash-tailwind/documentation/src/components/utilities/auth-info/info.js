import React, { useState } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilDollarSign from '@iconscout/react-unicons/icons/uil-dollar-sign';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Search from './Search';
import Settings from './settings';
import { Popover } from '../../popup/popup';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from '../../../redux/authentication/actionCreator';
import Heading from '../../heading/heading';

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    flag: 'en',
  });
  const { i18n } = useTranslation();
  const { flag } = state;

  const SignOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          {/* <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" /> */}
          <figcaption>
            <Heading as="h5">Abdullah Bin Talha</Heading>
            <p>UI Expert</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <UilUser /> Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilSetting /> Settings
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilDollarSign /> Billing
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilUsersAlt /> Activity
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilBell /> Help
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Sign Out
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value,e) => {
    e.preventDefault();
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
  };

  const country = (
    <NavAuth>
      
    </NavAuth>
  );

  return (
    <InfoWraper>
      <Search />
      <Settings />
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
            <span className="ninjadash-nav-actions__author--name">Md. Rafiq</span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
