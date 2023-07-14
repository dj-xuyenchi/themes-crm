import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { TopMenuStyle } from './Style';

function TopMenu() {
  // const path  = '/admin';

  useLayoutEffect(() => {
    const active = document.querySelector('.ninjadash-top-menu a.active');
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper');
      const hasSubMenuLeft = active.closest('.has-subMenu-left');
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active');
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
    };
    window.addEventListener('load', active && activeDefault);
    return () => window.removeEventListener('load', activeDefault);
  }, []);

  return (
    <TopMenuStyle>
      <div className="ninjadash-top-menu">
        <ul>
          <li>
            <Link to="#">Blank Page</Link>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  );
}

export default TopMenu;
