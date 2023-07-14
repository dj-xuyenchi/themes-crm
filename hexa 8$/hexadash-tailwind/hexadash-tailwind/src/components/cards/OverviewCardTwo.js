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
            ? 'bg-white dark:bg-white10 py-[25px] px-[25px] pb-[12px] overflow-hidden rounded-10 relative text-[15px] text-theme-gray dak:text-white60'
            : 'bg-white dark:bg-white10 py-[25px] px-[25px] pb-[12px] overflow-hidden rounded-10 relative text-[15px] text-theme-gray dak:text-white60'
        }
      >
        <>
          <div className="flex justify-between">
            <div>
              <div className={contentFirst ? null : 'text-end'}>
                {halfCircleIcon ? (
                  <>
                    <span className="text-sm font-normal text-body dark:text-white60 text-[15px] ">{label}</span>
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
              {bottomStatus ? (
                <div>
                  <span className="inline-flex items-center w-full rounded-lg h-11">
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
            </div>
            <div
              className={`absolute top-0 ltr:-right-[140px] rtl:-left-[140px] w-[230px] md:w-[210px] ssm:w-[230px] px-[30px] rounded-full h-full flex items-center justify-start overflow-hidden bg-${type}-transparent text-${type}`}
            >
              <div
                className={
                  contentFirst
                    ? `flex items-center hexadash-overview-card__top--icon justify-center text-${type}`
                    : null
                }
              >
                <ReactSVG
                  className={`fill-${type} [&>div>svg]:w-[35px] [&>div>svg]:h-[35px] md:[&>div>svg]:w-[25px] md:[&>div>svg]:h-[25px]`}
                  src={require(`../../static/img/icon/${icon}`)}
                />
              </div>
            </div>
          </div>
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
