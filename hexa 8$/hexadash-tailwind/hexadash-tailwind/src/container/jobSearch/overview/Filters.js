import UilSlidersV from '@iconscout/react-unicons/icons/uil-sliders-v';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';
import Heading from '../../../components/heading/heading';
import { Slider } from '../../../components/slider/slider';

const Filters = React.memo(() => {
  const [state, setState] = useState({
    min: 10,
    max: 100,
  });

  const { min, max } = state;
  const onChange = (value) => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
    // dispatch(filterByPriceRange(value));
  };

  const optionsJobTypes = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Freelance <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'freelance',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Full Time <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'full',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Part Time <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'part',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Internship <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'internship',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Contract <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'contract',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Temporary <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'temporary',
    },
  ];

  const industry = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Designer Graphics <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Graphics',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Development <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Development',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Management <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Management',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Finance <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Finance',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Banking <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Banking',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Customer Support <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Customer Support',
    },
  ];

  const salary = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Hourly <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Hourly',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Weekly <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Weekly',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Monthly <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Monthly',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Yearly <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'Yearly',
    },
  ];

  const datePosted = [
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Last Hour <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'last',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          Last 24 hours <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: '24h',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          7 days <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: '7d',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          14 days <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: '14d',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          30 days <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: '30d',
    },
    {
      label: (
        <div className="inline-flex items-center justify-between w-full text-body dark:text-white60">
          All <span className="text-xs text-light dark:text-white60">25</span>
        </div>
      ),
      value: 'all',
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative rony">
        <div className="py-[16px] px-[25px] border-regular dark:border-white10 border-b">
          <Heading as="h4" className="flex items-center mb-0 text-base font-medium text-dark dark:text-white87">
            <UilSlidersV className="w-4 h-4 ltr:mr-3 rtl:ml-3 text-light" />
            Filters
          </Heading>
        </div>
        <div className="p-[25px]">
          <div className="mb-[30px]">
            <Heading as="h5" className="mb-2 text-[15px] text-dark dark:text-white87 font-semibold">
              Distance
            </Heading>
            <p className="text-[15px] text-body dark:text-white60">
              Within 30 miles of <strong>New York, NY</strong>
            </p>
            <div className="[&>div>.ant-slider-rail]:h-[3px] [&>div>.ant-slider-track]:h-[3px] [&>div>.ant-slider-step]:h-[3px] [&>div>.ant-slider-handle]:mt-[-7px]">
              <Slider max={100} onChange={onChange} defaultValue={30} />
            </div>
            <p className="flex items-center justify-between text-body dark:text-white60">
              <span>{min} miles</span> <span>{max} miles</span>
            </p>
          </div>

          <div className="mb-[30px]">
            <Heading as="h5" className="mb-2.5 text-[15px] text-dark dark:text-white87 font-semibold">
              Job Types
            </Heading>
            <CheckboxGroup
              options={optionsJobTypes}
              className="flex flex-col gap-y-[10px] [&>label]:m-0 [&>label>span:not(:first-child)]:w-full"
            />

            <div className="sidebar-single__action">
              <Link className="inline-block mt-2 text-primary text-[13px] font-medium" to="#">
                See more
              </Link>
            </div>
          </div>

          <div className="mb-[30px]">
            <Heading as="h5" className="mb-2.5 text-[15px] text-dark dark:text-white87 font-semibold">
              Industry
            </Heading>
            <CheckboxGroup
              options={industry}
              className="flex flex-col gap-y-[10px] [&>label]:m-0 [&>label>span:not(:first-child)]:w-full"
            />

            <div className="sidebar-single__action">
              <Link className="inline-block mt-2 text-primary text-[13px] font-medium" to="#">
                See more
              </Link>
            </div>
          </div>

          <div className="mb-[30px]">
            <Heading as="h5" className="mb-2.5 text-[15px] text-dark dark:text-white87 font-semibold">
              Salary
            </Heading>
            <CheckboxGroup
              options={salary}
              className="flex flex-col gap-y-[10px] [&>label]:m-0 [&>label>span:not(:first-child)]:w-full"
            />
          </div>

          <div>
            <Heading as="h5" className="mb-2.5 text-[15px] text-dark dark:text-white87 font-semibold">
              Date Posted
            </Heading>
            <CheckboxGroup
              options={datePosted}
              className="flex flex-col gap-y-[10px] [&>label]:m-0 [&>label>span:not(:first-child)]:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Filters;
