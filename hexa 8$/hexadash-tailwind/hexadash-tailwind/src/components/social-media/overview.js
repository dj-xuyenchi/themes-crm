import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { MainWraper, SocialIcon } from './overview-style';

function SocialMediaContent(props) {
  const { icon, bgColor, title, subTitle } = props;
  return (
    <MainWraper className="flex flex-col justify-center align-items w-full mx-18px">
      <SocialIcon
        className="social-icon w-[50px] h-[50px] text-white dark:text-dark flex items-center justify-center rounded-10"
        bgColor={bgColor}
      >
        <FontAwesome
          className="super-crazy-colors"
          name={icon}
          size="2x"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </SocialIcon>
      <h1 className="text-[22px] font-semibold pt-[5px] m-0">{title}</h1>
      <p className="m-0 text-light dark:text-white60">{subTitle}</p>
    </MainWraper>
  );
}

SocialMediaContent.propTypes = {
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export { SocialMediaContent };
