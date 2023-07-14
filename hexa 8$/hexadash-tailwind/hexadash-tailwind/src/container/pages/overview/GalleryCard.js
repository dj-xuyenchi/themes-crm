import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../components/heading/heading';

function GalleryCards({ item }) {
  const { name, img, category } = item;
  return (
    <div className="mb-[25px]">
      <figure className="bg-white dark:bg-white10 rounded-10">
        <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
        <figcaption>
          <div className="px-6 py-5">
            <Heading className="text-15 font-medium mb-0.5 text-dark dark:text-white60" as="h4">
              {name}
            </Heading>
            <p className="mb-0 text-light dark:text-white60 text-13">{category}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

GalleryCards.propTypes = {
  item: PropTypes.object,
};

export default GalleryCards;
