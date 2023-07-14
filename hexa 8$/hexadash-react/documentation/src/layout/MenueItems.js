import {
  UilChartBar, UilCompactDisc, UilCreateDashboard, UilEye, UilPrescriptionBottle, UilServer, UilTable
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavTitle } from './Style';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';

const MenuItems = ({ toggleCollapsed }) => {

  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const {  topMenu  } = useSelector(state => {
      return {
          topMenu: state.ChangeLayoutMode.topMenu,
      };
  });
  
  const path  = "";

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'development'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  
  const items = [
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t("Get Started")}</NavTitle>, 
      'starter-title',
      null,
      null,
      'group'
    ),
    getItem(
    <NavLink onClick={toggleCollapsed} to={`${path}`}>
      Overview
    </NavLink>, 
    'overview', 
    !topMenu && <UilEye />),
    getItem("Development", 'development', !topMenu && <UilCreateDashboard />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/installation`}>
          {t("Installation")}
        </NavLink>, 
        'installation', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/folder-structure`}>
          {t("Folder Structure")}
        </NavLink>, 
        'folder', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/create`}>
          {t("Create Starter Page")}
        </NavLink>, 
        'starter', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/customization`}>
          {t("Theme Configuration")}
        </NavLink>, 
        'config', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/routing`}>
          {t("Routing")}
        </NavLink>, 
        'routing', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/navigation`}>
          {t("Navigation")}
        </NavLink>, 
        'demo-1', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/multi-lang`}>
          {t("Multi Language")}
        </NavLink>, 
        'localization', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/redux`}>
          {t("Redux")}
        </NavLink>, 
        'redux', 
        null
      )
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t("Integration")}</NavTitle>, 
      'integration-title',
      null,
      null,
      'group'
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/axios-integrate`}>
        Axios Integration
      </NavLink>, 
      'axiosIntegration', 
      !topMenu && <UilServer />),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/firebase-integrate`}>
        Firebase Integration
      </NavLink>, 
      'fireIntegration', 
      !topMenu && <UilServer />),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/auth0-integrate`}>
        Auth0 Integration
      </NavLink>, 
      'auth0', 
      !topMenu && <UilServer />),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t("Components")}</NavTitle>, 
      'component-title',
      null,
      null,
      'group'
    ),
    getItem("Forms", 'forms', !topMenu && <UilCompactDisc />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/features/form-layout`}>
          {t("form")} {t("layouts")}
        </NavLink>, 
        'form-layout', 
        null
      )
    ]),
    getItem("Table", 'table', !topMenu && <UilTable />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/tables/basic`}>
          Basic Table
        </NavLink>, 
        'basicTable', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/tables/dataTable`}>
          Data Table
        </NavLink>,
        'dataTable', 
        null
      )
    ]),
    getItem("Charts", 'charts', !topMenu && <UilChartBar />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/chartjs`}>
          Chart Js
        </NavLink>, 
        'chartjs', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/google-chart`}>
          Google Chart
        </NavLink>,
        'google-chart', 
        null
      ),
      getItem(t("recharts"), 'recharts', !topMenu && <UilChartBar />, [
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/bar`}>
            Bar Chart
          </NavLink>, 
          'bar', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/area`}>
            Area Chart
          </NavLink>,
          'area', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/composed`}>
            {t("Composed")} {t("chart")}
          </NavLink>,
          'composed', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/line`}>
            {t("Line")} {t("chart")}
          </NavLink>,
          'line', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/pie`}>
            {t("Pie")} {t("chart")}
          </NavLink>,
          'pie', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radar`}>
            {t("radar")} {t("chart")}
          </NavLink>,
          'radar', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radial`}>
            {t("radial")} {t("charts")}
          </NavLink>,
          'radial', 
          null
        ),
      ]),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/peity`}>
          {t("peity")} {t("charts")}
        </NavLink>,
        'peity', 
        null
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/credits`}>
        Credits
      </NavLink>, 
      'credits', 
      !topMenu && <UilPrescriptionBottle />),
  ];
  
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode='inline'
      defaultOpenKeys={['development']}
      overflowedIndicator={<UilEllipsisV />}
      items={items}
    />
  );
};

MenuItems.propTypes = {
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
