// import UilBriefcaseAlt from '@iconscout/react-unicons/icons/uil-briefcase-alt';
// import UilAward from '@iconscout/react-unicons/icons/uil-award';
import * as Unicons from '@iconscout/react-unicons';
import propTypes from 'prop-types';
import React from 'react';

function InfoCard({ icon, text, counter, type }) {
  const IconTag = Unicons[icon];
  return (
    <div type={type} className="bg-white dark:bg-white10 p-[15px] mb-[25px] text-center rounded-[10px]">
      <span
        className={`flex items-center justify-center w-[58px] h-[58px] bg-${type}-transparent text-${type} mx-auto mb-2.5 rounded-[14px]`}
      >
        <IconTag />
      </span>
      <p className="text-body dark:text-white60 text-base mb-4">{text}</p>
      <h2 className="mb-1 text-3xl text-body dark:text-white60 font-semibold">{counter}</h2>
    </div>
  );
}

InfoCard.propTypes = {
  counter: propTypes.string,
  text: propTypes.string,
  icon: propTypes.string,
  type: propTypes.oneOf(['primary', 'secondary']),
};

InfoCard.defaultProps = {
  counter: '21k',
  text: 'Total Products',
  icon: 'briefcase',
  type: 'primary',
};

export default InfoCard;
