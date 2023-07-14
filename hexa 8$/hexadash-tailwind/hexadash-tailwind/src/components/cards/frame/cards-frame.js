import UilellipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Dropdown } from '../../dropdown/dropdown';
import Heading from '../../heading/heading';

function Cards(props) {
  const {
    title,
    children,
    more,
    moreText,
    size,
    headless,
    caption,
    isbutton,
    bodyStyle,
    headStyle,
    border,
    bodypadding,
    className,
  } = props;
  return (
    <>
      {!headless ? (
        <Card
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border.toString()}
          className={className}
          bodypadding={bodypadding && bodypadding}
          extra={
            <div className="flex items-center gap-[15px]">
              {isbutton && isbutton}

              {more && (
                <Dropdown content={more} placement="bottom">
                  <Link className="flex items-center group" onClick={(e) => e.preventDefault()} to="#">
                    {!moreText ? (
                      <UilellipsisH className="w-[24px] h-[24px] text-light dark:text-white60 dark:group-hover:text-white87" />
                    ) : (
                      'More'
                    )}
                  </Link>
                </Dropdown>
              )}
            </div>
          }
          style={{ width: '100%' }}
        >
          {children}
        </Card>
      ) : (
        <Card
          bodypadding={bodypadding && bodypadding}
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ width: '100%' }}
          bordered={border.toString()}
          className={className}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p>{caption}</p>}
          {children}
        </Card>
      )}
    </>
  );
}

Cards.defaultProps = {
  border: false,
};

Cards.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  size: PropTypes.string,
  more: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.node,
  headless: PropTypes.bool,
  border: PropTypes.bool,
  caption: PropTypes.string,
  bodypadding: PropTypes.string,
  className: PropTypes.string,
  moreText: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export { Cards };
