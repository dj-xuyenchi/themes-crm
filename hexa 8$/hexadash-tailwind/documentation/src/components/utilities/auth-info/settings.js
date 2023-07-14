import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { ReactSVG } from 'react-svg'
import { Popover } from '../../popup/popup';
import { SettingDropdwon } from './auth-info-style';
import Heading from '../../heading/heading';

const Settings = React.memo(() => {
  
  const content = (
    <SettingDropdwon>
      <div className="setting-dropdwon">
        
      </div>
    </SettingDropdwon>
  );

  return (
    <div className="ninjadash-nav-actions__settings">
      <Popover placement="bottomRight" content={content} action="click">
        <Link to="#" className="ninjadash-nav-action-link">
          {/* <ReactSVG src={require('../../../static/img/icon/setting.svg').default} /> */}
        </Link>
      </Popover>
    </div>
  );
});

export default Settings;
