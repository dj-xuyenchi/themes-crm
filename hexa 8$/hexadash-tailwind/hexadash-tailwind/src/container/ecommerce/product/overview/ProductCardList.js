import React from 'react';
import { Rate, Row, Col } from 'antd';
import UilShoppingBag from '@iconscout/react-unicons/icons/uil-shopping-bag';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { updateWishList } from '../../../../redux/product/actionCreator';

const ProductCardsList = React.memo(({ product }) => {
  const { id, name, rate, price, oldPrice, popular, img, description } = product;
  const dispatch = useDispatch();

  return (
    <div className="list-view" style={{ marginBottom: 20 }}>
      <div className="bg-white dark:bg-white10 p-5 rounded-[10px]">
        <Row gutter={15}>
          <Col md={6} xs={24}>
            <figure className="ltr:mr-[15px] rtl:ml-[15px] mb-0">
              <img className="w-full rounded-10" src={require(`../../../../${img}`)} alt="" />
            </figure>
          </Col>
          <Col md={12} xs={24}>
            <div className="product-single-description">
              <Heading className="mt-[25px] mb-4 text-lg font-semibold" as="h5">
                <NavLink
                  to={`/admin/ecommerce/productDetails/${id}`}
                  className="text-dark hover:text-primary dark:text-white87 hover:dark:text-primary"
                >
                  {name}
                </NavLink>
              </Heading>
              <p className="text-body dark:text-white60 text-[15px]">{description}</p>
            </div>
          </Col>
          <Col md={6} xs={24}>
            <div className="mt-[25px]">
              <Link
                onClick={() => dispatch(updateWishList(id))}
                className={` inline-flex items-center justify-center absolute min-3xl:ltr:right-5 min-3xl:rtl:left-5 ltr:right-0 rtl:left-0  min-3xl:top-[15px] top-0 bg-white dark:bg-white10 w-[34px] h-[34px] rounded-full shadow-[0_5px_10px_rgba(160,160,260,0.13)] ${
                  popular ? 'text-danger' : 'text-body dark:text-white60'
                } `}
                to="#"
              >
                {popular ? (
                  <ReactSVG src={require(`../../../../static/img/icon/heart-fill.svg`).default} />
                ) : (
                  <UilHeart className="w-[14px] h-[14px]" />
                )}
              </Link>
              <p className="flex items-center mb-[5px] flex-wrap gap-y-[5px]">
                <span className="font-semibold text-primary">${price} </span>
                {oldPrice && (
                  <>
                    <del className="mx-[5px] text-light dark:text-white60 text-sm"> ${oldPrice} </del>
                    <span className="text-xs font-medium text-link"> 60% Off</span>
                  </>
                )}
              </p>
              <div className="flex items-center 3xl:flex-wrap 3xl:gap-[5px] mb-3 text-xs font-medium text-dark dark:text-white87">
                <Rate
                  className="relative -top-[2px] ltr:mr-[5px] rtl:ml-[5px] ltr:[&>li]:mr-0.5 rtl:[&>li]:ml-0.5"
                  allowHalf
                  defaultValue={rate}
                  disabled
                />{' '}
                4.9
                <span className="ltr:ml-1.5 rtl:mr-1.5 text-light dark:text-white60 font-normal"> 778 Reviews</span>
              </div>
              <div className="flex items-start flex-col mt-5 -mx-[5px] -mb-[5px]">
                <Button
                  size="small"
                  type="white"
                  className="flex items-center h-[36px] m-[5px] px-5  text-body dark:text-white60 hover:text-primary text-xs font-semibold border-normal hover:border-primary dark:border-white10 hover:dark:border-primary dark:bg-transparent dark:hover:text-primary"
                  outlined
                >
                  <UilShoppingBag className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                  Add To Cart
                </Button>
                <Button
                  size="small"
                  type="primary"
                  className="flex items-center text-center justify-center min-w-[132px] h-[36px] m-[5px] px-6 bg-primary text-white dark:text-white87 text-xs font-semibold border-primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
});

ProductCardsList.propTypes = {
  product: PropTypes.object,
};

export default ProductCardsList;
