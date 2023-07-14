import propTypes from 'prop-types';
import React from 'react';

function SampleCardFive({ item }) {
  const { content, title, img, auth } = item;
  return (
    <figure className="relative mb-0 overflow-hidden bg-white dark:bg-white10 rounded-10 ">
      <img className="w-full" src={require(`../../../${img}`)} alt="" />
      <figcaption className="absolute bottom-0 ltr:left-0 rtl:right-0 p-[25px] bg-dark/50 text-white dark:text-white87 flex flex-col justify-center h-full w-full">
        <h2 className="text-white dark:text-white87 mb-[10px] text-[18px] font-semibold">{title}</h2>
        <p className="text-white dark:text-white87 leading-[25px] text-[13px]">{content}</p>
        <div className="flex items-center justify-between text-white dark:text-white87">
          <div className="inline-flex flex-wrap items-center gap-[10px]">
            <img className="w-[50px] h-[50px] rounded-full " src={require(`../../../${auth}`)} alt="" />
            <span className="font-medium text-[13px]">Burns Marks</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

SampleCardFive.propTypes = {
  item: propTypes.object,
};

SampleCardFive.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content: 'Lorem Ipsum is simply dummy text of the printing ',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFive;
