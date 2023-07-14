import React, { useState } from 'react';
import UilSlidersV from '@iconscout/react-unicons/icons/uil-sliders-v';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { GlobalUtilityStyle } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { Slider } from '../../../../components/slider/slider';
import { CheckboxGroup } from '../../../../components/checkbox/checkbox';
import {
  filterByPriceRange,
  filterByRating,
  filterByBrand,
  filterByCategory,
} from '../../../../redux/product/actionCreator';

const Filters = React.memo(() => {
  const [state, setState] = useState({
    min: 0,
    max: 1500,
  });
  const dispatch = useDispatch();

  const { min, max } = state;
  const onChange = (value) => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
    dispatch(filterByPriceRange(value));
  };
  const onChangeRating = (checkValue) => {
    dispatch(filterByRating([checkValue]));
  };
  const onChangeBrand = (checkValue) => {
    dispatch(filterByBrand([checkValue]));
  };
  const options = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          <span className="rating-left">
            <Rate allowHalf defaultValue={5} disabled />
          </span>
          <span className="justify-end text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 5,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={4} disabled />
            and up
          </span>
          <span className="justify-end text-xs text-light dark:text-white60">25</span>
        </>
      ),
      value: 4,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={3} disabled />
            and up
          </span>
          <span className="justify-end text-xs text-light dark:text-white60">25</span>
        </>
      ),
      value: 3,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={2} disabled />
            and up
          </span>
          <span className="justify-end text-xs text-light dark:text-white60">25</span>
        </>
      ),
      value: 2,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={1} disabled />
            and up
          </span>
          <span className="justify-end text-xs text-light dark:text-white60">25</span>
        </>
      ),
      value: 1,
    },
  ];

  const optionsBrand = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Cup <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'cup',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Plate <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'plate',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Chair <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'chair',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Juice <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'juice',
    },
  ];

  const onChangeCategory = (value) => {
    dispatch(filterByCategory(value));
  };

  return (
    <GlobalUtilityStyle>
      <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative rony">
        <div className="py-[16px] px-[25px] border-regular dark:border-white10 border-b">
          <Heading as="h4" className="flex items-center mb-0 text-base font-medium text-dark dark:text-white87">
            <UilSlidersV className="w-4 h-4 ltr:mr-3 rtl:ml-3 text-light" />
            Filters
          </Heading>
        </div>
        <div className="p-[25px]">
          <div className="mb-8">
            <Heading as="h5" className="text-dark dark:text-white87 text-[15px] font-semibold mb-[15px]">
              Price Range
            </Heading>
            <Slider max={1500} onChange={onChange} range defaultValues={[min, max]} />
            <p className="text-body dark:text-white60 text-sm font-medium mb-0 mt-[15px]">
              ${min} - ${max}
            </p>
          </div>
          <div className="mb-8">
            <Heading as="h5" className="text-dark dark:text-white87 text-[15px] font-semibold mb-[15px]">
              Category
            </Heading>
            <nav>
              <ul className="mb-0">
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('all')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>All</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('accessories')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Accessories</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('appliance')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Appliances</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('bags')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Bags</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('electronic')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Electronic</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('entertainment')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Entertainment</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    onClick={() => onChangeCategory('induction')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Induction</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => onChangeCategory('mobile')}
                    to="#"
                    className="inline-flex items-center justify-between w-full group text-body dark:text-white60 hover:text-primary"
                  >
                    <span>Mobile Phone</span>
                    <span className="text-xs text-light dark:text-white60 group-hover:text-primary">25</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <Link className="inline-block mt-2 text-primary text-[13px] font-medium" to="#">
              See more
            </Link>
          </div>
          <div className="mb-8">
            <Heading as="h5" className="text-dark dark:text-white87 text-[15px] font-semibold mb-[15px]">
              Brands
            </Heading>
            <CheckboxGroup
              className="checkbox-label-w-full flex flex-col gap-y-[10px]"
              options={optionsBrand}
              onChange={onChangeBrand}
            />
            <Link className="inline-block mt-2 text-primary text-[13px] font-medium" to="#">
              See more
            </Link>
          </div>
          <div>
            <Heading as="h5" className="text-dark dark:text-white87 text-[15px] font-semibold mb-[15px]">
              Ratings
            </Heading>
            <CheckboxGroup
              className="custom-filter-rating checkbox-label-w-full flex flex-col gap-y-[10px]"
              options={options}
              onChange={onChangeRating}
            />
          </div>
        </div>
      </div>
    </GlobalUtilityStyle>
  );
});

export default Filters;
