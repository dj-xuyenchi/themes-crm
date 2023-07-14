import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import propTypes from 'prop-types';
import React from 'react';

function SampleCardFour({ item }) {
  const { content, title, img } = item;
  return (
    <figure className="mb-0 bg-white dark:bg-white10 rounded-10">
      <img className="w-full rounded-t-10" src={require(`../../../${img}`)} alt="" />
      <figcaption className="p-[25px]">
        <h4 className="flex justify-between mt-0 mb-0 font-medium text-light dark:text-white60 text-[12px]">
          <span>Web Development</span>
          <span>01 July 2020 </span>
        </h4>
        <h2 className=" mt-[6px] mb-[10px] text-[18px] font-semibold text-dark dark:text-white87">{title}</h2>
        <p className="leading-[1.79] text-theme-gray dark:text-white60">{content}</p>
        <div className="flex items-center justify-between text-light">
          <div className="flex items-center text-theme-gray dark:text-white60 gap-[10px]">
            <img className="w-[50px] rounded-full" src={require('../../../static/img/chat-author/t1.jpg')} alt="" />
            <span className="text-[14px] font-medium">Burns Marks</span>
          </div>
          <div className="inline-flex items-center gap-[10px]">
            <span className="flex items-center text-[13px] text-light-extra dark:text-white60 gap-[5px]">
              <UilEye className="w-[16px] h-[16px] text-light dark:text-white60" />
              70
            </span>
            <span className="flex items-center text-[13px] text-light-extra dark:text-white60 gap-[5px]">
              <UilHeart className="w-[16px] h-[16px] text-light dark:text-white60" />
              120
            </span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

SampleCardFour.propTypes = {
  item: propTypes.object,
};

SampleCardFour.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content:
      'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFour;
