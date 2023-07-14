import UilEllipsis from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown } from '../dropdown/dropdown';

const ImageUrl = styled.div`
  ${({ bgUrl }) => bgUrl && `background-image: url(${require(`../../static/img/sampleCards/${bgUrl}`)})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

function BannerCard({ item }) {
  const { content, icon, title, authorName, authorImg, type, bgImage, titleColor, subTitleColor } = item;
  return (
    <ImageUrl
      className={`border-regular dark:border-white10 border-1 pt-[20px] px-[25px] pb-[25px] bg-${type} [&.bg-primary]:border-none dark:[&.bg-white]:bg-dark rounded-10 bg-cover bg-center`}
      bgUrl={bgImage}
    >
      <div className="flex items-center justify-between">
        <h4
          className={`text-[16px] font-medium items-center mb-[14px] ${titleColor} dark:[&.text-dark]:text-white flex gap-[10px]`}
        >
          <img className="w-[14px] h-[14px]" src={require(`../../static/img/icon/${icon}`)} alt="StrikingDash Banner" />
          <span>{title}</span>
        </h4>
        <Dropdown
          action={['click']}
          className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
          content={
            <>
              <Link
                className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm "
                to="#"
              >
                Edit
              </Link>
              <Link
                className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm "
                to="#"
              >
                Delete
              </Link>
              <Link
                className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm "
                to="#"
              >
                View
              </Link>
            </>
          }
        >
          <Link className="text-light-extra dark:text-white60 -mt-[15px]" to="#">
            <UilEllipsis className="w-[24px] h-[24px] m-0" />
          </Link>
        </Dropdown>
      </div>
      <div>
        <p className={`${subTitleColor} mb-[20px] leading-[1.786] dark:text-white60`}>{content}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-[15px]">
          <img className="w-[30px] h-[30px] rounded-full" src={require(`../../static/img/users/${authorImg}`)} alt="" />
          <span className={`${subTitleColor} text-[15px] font-medium dark:text-white60`}>{authorName}</span>
        </div>
        <div>
          <ul className="flex items-center flex-wrap gap-[10px] mb-0">
            <li className="flex items-center gap-[6px]">
              <UilEye className="w-[16px] h-[16px] text-light-extra dark:text-white60" />
              <span className="text-light-extra dark:text-white60 text-[13px]">70</span>
            </li>
            <li className="flex items-center gap-[6px]">
              <UilHeart className="w-[16px] h-[16px] text-light-extra dark:text-white60" />
              <span className="text-light-extra dark:text-white60 text-[13px]">70</span>
            </li>
          </ul>
        </div>
      </div>
    </ImageUrl>
  );
}

BannerCard.propTypes = {
  item: propTypes.object,
};

BannerCard.defaultProps = {
  item: {
    id: 1,
    type: 'primary',
    icon: 'water-fall.svg',
    bgImage: '',
    title: 'Primary Color',
    content:
      'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
    authorName: 'Chris Doe',
    authorImg: '10.png',
  },
};

export default BannerCard;
