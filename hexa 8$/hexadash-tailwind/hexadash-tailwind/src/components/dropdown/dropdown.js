import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownStyle } from './dropdown-style';
import { GlobalUtilityStyle } from '../../container/styled';

function Dropdown(props) {
  const { content, placement, title, action, children, style, className } = props;

  return (
    <DropdownStyle
      overlayClassName={className}
      style={style}
      placement={placement}
      title={title}
      overlay={<GlobalUtilityStyle>{content}</GlobalUtilityStyle>}
      trigger={action}
    >
      {children}
    </DropdownStyle>
  );
}

const content = (
  <>
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.40)] py-1">
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <span>Export to CSV</span>
      </Link>
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <span>Export to XML</span>
      </Link>
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <span>Export to Drive</span>
      </Link>
    </div>
  </>
);

Dropdown.defaultProps = {
  action: ['hover'],
  placement: 'bottomRight',
  content,
  style: { DropdownStyle },
  className: 'hexadash-dropdown',
};

Dropdown.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export { Dropdown };
