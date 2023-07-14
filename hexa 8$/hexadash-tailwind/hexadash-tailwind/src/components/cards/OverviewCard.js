import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

function OverviewCard({ data, className, bottomStatus, contentFirst, halfCircleIcon }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { type, icon, label, total, status, statusRate, dataPeriod, suffix, prefix, decimels, statusColor, separator } =
    data;
  const totalNumber = Number(total);
  return (
    <div className={className}>
      <div
        className={
          halfCircleIcon
            ? 'p-[25px] bg-white dark:bg-white10 rounded-10 relative text-[15px] text-theme-gray dark:text-white60 leading-6'
            : 'p-[25px] bg-white dark:bg-white10 rounded-10 relative text-[15px] text-theme-gray dark:text-white60 leading-6'
        }
      >
        <>
          <div className="flex justify-between">
            <div
              className={
                contentFirst
                  ? `flex items-center justify-center order-2 bg-${type}-transparent text-${type} w-[58px] h-[58px] rounded-2xl`
                  : `flex items-center justify-center bg-${type}-transparent text-${type} w-[58px] h-[58px] rounded-2xl`
              }
            >
              <ReactSVG
                className={`fill-${type} w-[25px] h-[25px] svg-w-full [&>div>svg]:w-full [&>div>svg]:h-full flex items-center`}
                src={require(`../../static/img/icon/${icon}`)}
              />
            </div>
            <div className={contentFirst ? null : 'text-end'}>
              {halfCircleIcon ? (
                <>
                  <span className="text-sm font-normal text-body dark:text-white60">{label}</span>
                  <h4 className="mb-0 text-3xl lg:text-[26px] sm:text-2xl font-semibold leading-normal text-dark dark:text-white87">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? totalNumber : 0}
                      suffix={suffix}
                      prefix={prefix}
                      delay={0.5}
                      decimals={decimels}
                      separator={separator}
                      duration={2}
                    />
                  </h4>
                </>
              ) : (
                <>
                  <h4 className="mb-0 text-3xl lg:text-[26px] sm:text-2xl font-semibold leading-normal text-dark dark:text-white87">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? totalNumber : 0}
                      suffix={suffix}
                      prefix={prefix}
                      delay={0.5}
                      decimals={decimels}
                      separator={separator}
                      duration={2}
                    />
                  </h4>
                  <span className="font-normal text-body dark:text-white60 text-15">{label}</span>
                </>
              )}
            </div>
          </div>
          {bottomStatus ? (
            <div className="mt-3">
              <span className="inline-flex items-center w-full h-11 bg-gray-50 dark:bg-white06  px-2.5 rounded-lg">
                <span className={`flex items-center text-sm font-medium text-${statusColor}`}>
                  {status === 'growth' ? <UilUp className="w-5 h-5" /> : <UilDown className="w-5 h-5" />}
                  {statusRate}%
                </span>
                <span className="ltr:ml-2.5 rtl:mr-2.5 text-light dark:text-white60 text-sm">{dataPeriod}</span>
              </span>
            </div>
          ) : (
            ''
          )}
        </>
      </div>
    </div>
  );
}
OverviewCard.defaultProps = {
  data: {},
  className: '',
  bottomStatus: true,
  contentFirst: false,
  halfCircleIcon: false,
};
OverviewCard.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
  bottomStatus: propTypes.bool,
  contentFirst: propTypes.bool,
  halfCircleIcon: propTypes.bool,
};

export default OverviewCard;
