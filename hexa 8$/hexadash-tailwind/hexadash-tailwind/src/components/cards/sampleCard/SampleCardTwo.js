import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function SampleCardTwo({ item }) {
  const { content, title, img } = item;
  return (
    <figure className="mb-0 bg-white dark:bg-white10 rounded-10 dark:bg-white10 p-[25px]">
      <img className="w-[60px] h-[60px] rounded-t-10" src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2 className="mb-[10px] mt-[18px] text-[18px] font-semibold text-dark dark:text-white87">{title}</h2>
        <p className="leading-[1.79] mb-[15px] text-theme-gray dark:text-white60">{content}</p>
        <Link className="text-primary" to="#">
          Learn More
        </Link>
      </figcaption>
    </figure>
  );
}

SampleCardTwo.propTypes = {
  item: propTypes.object,
};

SampleCardTwo.defaultProps = {
  item: {
    id: 1,
    title: 'Creative Planning',
    content:
      'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.',
    img: 'static/img/icon/strategy.svg',
  },
};

export default SampleCardTwo;
