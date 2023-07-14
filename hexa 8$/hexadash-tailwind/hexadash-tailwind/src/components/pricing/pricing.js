import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import PropTypes from 'prop-types';
import React from 'react';

function List(props) {
  const { text } = props;

  return (
    <div className="flex items-center mb-3 text-body dark:text-white60">
      <span className="ltr:mr-2.5 rtl:ml-2.5">
        <UilCheck className="w-6 h-6 text-success" />
      </span>
      <span>{text}</span>
    </div>
  );
}
List.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
};
export { List };
