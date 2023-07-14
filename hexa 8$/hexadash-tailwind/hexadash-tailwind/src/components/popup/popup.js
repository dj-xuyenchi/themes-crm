import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Content, PopoverStyle, Title } from './style';

function Popover(props) {
  const { content, placement, title, action, children } = props;
  const content1 = <Content>{content}</Content>;

  return (
    <PopoverStyle placement={placement} title={title && <Title>{title}</Title>} content={content1} trigger={action}>
      {children}
    </PopoverStyle>
  );
}

const content = (
  <>
    <Link className="text-start py-[6px] flex align-center gap-[6px] hover:text-primary " to="#">
      <UilCheckCircle />
      <span>Btn Dropdown one</span>
    </Link>
    <Link className="text-start py-[6px] flex align-center gap-[6px] hover:text-primary hover:bg-primary/.50" to="#">
      <UilCheckCircle />
      <span>Btn Dropdown two</span>
    </Link>
    <Link className="text-start py-[6px] flex align-center gap-[6px] hover:text-primary hover:bg-primary/.50" to="#">
      <UilCheckCircle />
      <span>Btn Dropdown three</span>
    </Link>
  </>
);

Popover.defaultProps = {
  action: 'hover',
  placement: 'bottom',
  content,
};

Popover.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export { Popover };
