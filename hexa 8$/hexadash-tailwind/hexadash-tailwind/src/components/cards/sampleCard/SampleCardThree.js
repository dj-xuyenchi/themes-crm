import propTypes from 'prop-types';
import React from 'react';

function SampleCardThree({ item }) {
  const { content, title, img } = item;
  return (
    <figure className="mb-0 bg-white dark:bg-white10 rounded-10 dark:bg-white10 p-[25px] text-center">
      <img className="inline-block" src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2 className="mb-[10px] mt-[18px] text-[23px] font-semibold text-dark dark:text-white87">{title}</h2>
        <p className="leading-[1.79] mb-[15px] text-theme-gray dark:text-white60">{content}</p>
      </figcaption>
    </figure>
  );
}

SampleCardThree.propTypes = {
  item: propTypes.object,
};

SampleCardThree.defaultProps = {
  item: {
    id: 1,
    title: 'User Friendly',
    content: 'Lorem Ipsum is simply dummy text of the',
    img: 'static/img/sampleCards/1.svg',
  },
};

export default SampleCardThree;
