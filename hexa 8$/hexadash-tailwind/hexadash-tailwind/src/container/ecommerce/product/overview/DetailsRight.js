import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rate } from 'antd';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilShoppingBag from '@iconscout/react-unicons/icons/uil-shopping-bag';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ReactSVG } from 'react-svg';
import Heading from '../../../../components/heading/heading';
import { updateWishList } from '../../../../redux/product/actionCreator';
import { Button } from '../../../../components/buttons/buttons';

const DetailsRight = React.memo(({ product }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    quantity: 1,
  });

  const { name, rate, price, oldPrice, description, category, brand, popular, id } = product;
  const { quantity } = state;

  const incrementQuantity = (e) => {
    e.preventDefault();
    setState({
      ...state,
      quantity: quantity + 1,
    });
  };

  const decrementQuantity = (e) => {
    e.preventDefault();
    if (quantity !== 1)
      setState({
        ...state,
        quantity: quantity - 1,
      });
  };

  return (
    <div>
      <Heading
        className="mb-[10px] text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold"
        as="h1"
      >
        {name}
      </Heading>
      <Rate className="relative -top-[3px] [&>li]:mr-0.5" allowHalf defaultValue={rate} disabled />
      <span className="inline-block ltr:mr-1 ltr:ml-2 rtl:ml-1 rtl:mr-2 text-dark dark:text-white87 text-[15px] font-semibold">
        {rate}
      </span>
      <span className="font-normal text-light dark:text-white60"> 778 Reviews</span>
      <p>
        <span className="inline-block ltr:mr-1.5 rtl:ml-1.5 mb-2 text-light dark:text-white60 text-[13px]">
          Brand :
        </span>
        <span className="text-dark dark:text-white87 text-[13px] font-medium">{brand}</span>
      </p>
      <Heading className="text-dark dark:text-white87 mt-[18px] mb-2 text-[22px] font-medium" as="h3">
        <span className="text-sm text-light dark:text-white60">$</span>
        <span>{price}</span>
      </Heading>
      {oldPrice && (
        <Heading className="text-dark dark:text-white87 mb-[22px] font-semibold inline-flex items-center" as="h6">
          <del className="text-base font-normal text-light dark:text-white60">${oldPrice}</del>{' '}
          <span className="inline-block text-xs ltr:ml-2 rtl:mr-2 text-primary">30% Off</span>
        </Heading>
      )}
      <p className="max-w-[580px] mb-2 text-body dark:text-white60 text-[15px]">{description}</p>
      <div className="mt-[25px]">
        <p className="mb-1 text-body dark:text-white60">
          <span className="mr-[30px] text-dark dark:text-white87 font-medium">Available:</span>
          <span className="font-medium text-success"> In Stock</span>
        </p>
        <p className="mb-1 text-body dark:text-white60">
          <span className="mr-[30px] text-dark dark:text-white87 font-medium"> Shipping: </span>
          <span className="font-medium text-body dark:text-white60">Free</span>
        </p>
        <p className="my-[30px] text-body dark:text-white60">
          <span className="mr-[30px] text-dark dark:text-white87 font-medium">Quantity:</span>

          <Button
            className="w-[38px] h-[38px] bg-section dark:bg-white10 mr-[15px] p-x-3 text-sm text-body dark:text-white60 font-semibold border-none rounded-[10px]"
            onClick={decrementQuantity}
            type="default"
          >
            -
          </Button>
          {quantity}
          <Button
            className="w-[38px] h-[38px] bg-section dark:bg-white10 ml-[15px] p-x-3 text-sm text-body dark:text-white60 font-semibold border-none rounded-[10px]"
            onClick={incrementQuantity}
            type="default"
          >
            +
          </Button>
          <span className="ml-[15px] text-light dark:text-white60 text-[13px]">540 pieces available</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap mb-7 pb-[30px] border-b border-regular dark:border-white10 gap-[10px]">
        <div className="flex flex-wrap items-center gap-[10px]">
          <Button
            size="small"
            type="primary"
            className="flex items-center h-[44px] px-[30px] bg-primary text-white dark:text-white87 text-sm font-semibold border-primary rounded-[6px]"
          >
            Buy Now
          </Button>
          <Button
            size="small"
            type="white"
            className="flex items-center gap-[6px] h-[44px] px-[30px] bg-secondary text-white dark:text-white87 text-sm font-semibold border-secondary rounded-[6px]"
            outlined
          >
            <UilShoppingBag className="w-[14px] h-[14px]" />
            Add To Cart
          </Button>

          <Button
            onClick={() => dispatch(updateWishList(parseInt(id, 10)))}
            className={` inline-flex items-center justify-center bg-white dark:bg-white10 w-[40px] h-[40px] ltr:mr-[10px] rtl:ml-[10px] border-none rounded-full shadow-[0_5px_10px_rgba(160,160,260,0.13)] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] ${
              popular ? 'text-danger' : 'text-body dark:text-white60'
            } `}
            size="default"
            raised
            type="white"
            shape="circle"
          >
            {popular ? (
              <ReactSVG src={require(`../../../../static/img/icon/heart-fill.svg`).default} />
            ) : (
              <UilHeart className="w-[14px] h-[14px]" />
            )}
          </Button>
          <Button
            size="default"
            raised
            type="white"
            shape="circle"
            className="inline-flex items-center justify-center bg-white dark:bg-white10 text-body dark:text-white60 w-[40px] h-[40px] ltr:mr-[10px] rtl:ml-[10px] border-none rounded-full shadow-[0_5px_10px_rgba(160,160,260,0.13)] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]"
          >
            <UilShareAlt className="w-[14px] h-[14px]" />
          </Button>
        </div>
        <div className="ltr:ml-[5px] rtl:mr-[5px]">
          <NavLink to="#" className="ltr:mr-3 rtl:ml-3 group">
            <FontAwesome
              className="text-sm text-[#666] dark:text-white60 group-hover:text-[#8231d3]"
              name="facebook"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
          <NavLink to="#" className="ltr:mr-3 rtl:ml-3 group">
            <FontAwesome
              className="text-sm text-[#666] dark:text-white60 group-hover:text-[#8231d3]"
              name="twitter"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
          <NavLink to="#" className="ltr:mr-3 rtl:ml-3 group">
            <FontAwesome
              className="text-sm text-[#666] dark:text-white60 group-hover:text-[#8231d3]"
              name="pinterest-p"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
          <NavLink to="#" className="ltr:mr-3 rtl:ml-3 group">
            <FontAwesome
              className="text-sm text-[#666] dark:text-white60 group-hover:text-[#8231d3]"
              name="linkedin"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
          <NavLink to="#" className="ltr:mr-3 rtl:ml-3 group">
            <FontAwesome
              className="text-sm text-[#666] dark:text-white60 group-hover:text-[#8231d3]"
              name="send"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
        </div>
      </div>
      <ul className="mb-[10px]">
        <li>
          <span className="ltr:mr-[30px] rtl:ml-[30px] text-dark dark:text-white87 font-medium min-w-[66px] inline-block">
            Category:
          </span>
          <span className="text-body dark:text-white60">{category}</span>
        </li>
      </ul>
      <ul className="mb-0">
        <li>
          <span className="ltr:mr-[30px] rtl:ml-[30px] text-dark dark:text-white87 font-medium min-w-[66px] inline-block">
            Tags:
          </span>
          <span className="text-body dark:text-white60">Blue, Green, Light</span>
        </li>
      </ul>
    </div>
  );
});

DetailsRight.propTypes = {
  product: PropTypes.object,
};

export default DetailsRight;
