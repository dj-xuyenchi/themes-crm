import propTypes from 'prop-types';
import React from 'react';
import { Button } from '../../buttons/buttons';

function SampleCardOne({ item }) {
  const { content, title, img } = item;
  return (
    <figure className="mb-0 bg-white dark:bg-white10 rounded-10 dark:bg-white10">
      <img className="w-full rounded-t-10" src={require(`../../../${img}`)} alt="" />
      <figcaption className="p-[25px]">
        <h2 className="mb-[10px] text-[18px] font-semibold text-dark dark:text-white87">{title}</h2>
        <p className="leading-[1.79] mb-[15px] text-theme-gray dark:text-white60">{content}</p>
        <Button className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
          View More
        </Button>
      </figcaption>
    </figure>
  );
}

SampleCardOne.propTypes = {
  item: propTypes.object,
};

SampleCardOne.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    img: 'static/img/sampleCards/1.png',
  },
};

export default SampleCardOne;
