import React from 'react';
import { Rate } from 'antd';
import UilShoppingBag from '@iconscout/react-unicons/icons/uil-shopping-bag';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { updateWishList } from '../../../../redux/product/actionCreator';

function ProductCards({ product }) {
  const { id, name, rate, price, oldPrice, popular, img } = product;
  const dispatch = useDispatch();

  return (
    <div className="relative bg-white dark:bg-white10 mb-[30px] rounded-[10px] shadow-[0_5px_20px_rgba(173,181,217,0,1)]">
      <figure className="mb-0 ">
        <img className="w-full rounded-t-[10px]" src={require(`../../../../${img}`)} alt={`img${id}`} />
      </figure>
      <figcaption className="pt-5 px-5 pb-[26px]">
        <Link
          onClick={() => dispatch(updateWishList(id))}
          className={` inline-flex items-center justify-center absolute ltr:right-5 rtl:left-5 top-[15px] bg-white dark:bg-white10 w-[34px] h-[34px] rounded-full shadow-[0_5px_10px_rgba(160,160,260,0.13)] ${
            popular ? 'text-danger' : 'text-body dark:text-dark'
          } `}
          to="#"
        >
          {popular ? (
            <ReactSVG src={require(`../../../../static/img/icon/heart-fill.svg`).default} />
          ) : (
            <UilHeart className="w-[14px] h-[14px]" />
          )}
        </Link>
        <Heading className="mb-1 text-lg font-semibold" as="h5">
          <Link
            to={`/admin/ecommerce/productDetails/${id}`}
            className="text-dark hover:text-primary dark:text-white87 hover:dark:text-primary"
          >
            {name}
          </Link>
        </Heading>
        <div className="flex items-center gap-[5px] mb-3 text-xs font-medium text-dark dark:text-white87">
          <Rate
            className="relative -top-[2px] flex items-center ltr:[&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li.ant-rate-star-zero>div>div>span>svg]:text-[#c6d0dc]"
            allowHalf
            defaultValue={rate}
            disabled
          />{' '}
          4.9
          <span className="ltr:ml-1.5 rtl:mr-1.5 text-light dark:text-white60 font-normal"> 778 Reviews</span>
        </div>
        <p className="flex items-center mb-[5px]">
          <span className="font-semibold text-primary">${price} </span>
          {oldPrice && (
            <>
              <del className="mx-[5px] text-light dark:text-white60 text-sm"> ${oldPrice} </del>
              <span className="text-xs font-medium text-link"> 60% Off</span>
            </>
          )}
        </p>
        <div className="flex items-center flex-wrap mt-5 -mx-[5px] -mb-[5px]">
          <Button
            size="small"
            className="flex items-center h-[36px] m-[5px] px-5  text-body dark:text-white60 hover:text-primary text-xs font-semibold border-normal hover:border-primary dark:border-white10 hover:dark:border-primary dark:bg-transparent dark:hover:text-primary"
            outlined
          >
            <UilShoppingBag className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
            Add To Cart
          </Button>
          <Button
            size="small"
            type="primary"
            className="flex items-center h-[36px] m-[5px] px-5 bg-primary text-white dark:text-white87 text-xs font-semibold border-primary"
          >
            Buy Now
          </Button>
        </div>
      </figcaption>
    </div>
  );
}

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
