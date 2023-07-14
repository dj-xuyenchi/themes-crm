import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import DashboardChart from '../../../../components/charts/DashboardChart';

import chartContent from '../../../../demoData/dashboardChartContent.json';

const { earnings } = chartContent;

const MonthlyEarning = React.memo(({ title }) => {
  const [earningsTab, setEarningsTab] = useState('today');

  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setEarningsTab(value);
  };

  const earningsData = earnings !== null && [
    {
      data: earnings[earningsTab].users,
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('hexadash-earning-revenue'), 300, {
          start: '#8231D340',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
    },
  ];

  return (
    <>
      {earningsData !== null && (
        <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
          <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
            <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
              {title}
            </h1>
            <ul className="flex items-center mb-0">
              <li>
                <Link
                  className={
                    earningsTab === 'today'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                  }
                  onClick={(e) => handleTabActivation('today', e)}
                  to="#"
                >
                  Today
                </Link>
              </li>
              <li>
                <Link
                  className={
                    earningsTab === 'week'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                  }
                  onClick={(e) => handleTabActivation('week', e)}
                  to="#"
                >
                  Week
                </Link>
              </li>
              <li>
                <Link
                  className={
                    earningsTab === 'month'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                  }
                  onClick={(e) => handleTabActivation('month', e)}
                  to="#"
                >
                  Month
                </Link>
              </li>
            </ul>
          </div>
          <div className="hexadash-chart-container px-[25px] pb-[25px]">
            <DashboardChart
              id="hexadash-earning-revenue"
              labels={earnings[earningsTab].labels}
              datasets={earningsData}
              layout={{
                padding: {
                  left: -10,
                  right: -10,
                },
              }}
              scales={{
                y: {
                  grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                    zeroLineColor: '#485e9029',
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 3],
                    drawTicks: false,
                    drawBorder: false,
                    // eslint-disable-next-line no-dupe-keys
                    zeroLineWidth: 3,
                    borderWidth: 0,
                  },
                  ticks: {
                    beginAtZero: true,
                    font: {
                      size: 13,
                      family: "'Jost', sans-serif",
                    },
                    color: '#747474',
                    max: 80,
                    min: 0,
                    stepSize: 20,
                    padding: 10,
                    callback(label) {
                      return `${label}k`;
                    },
                  },
                },

                x: {
                  grid: {
                    display: true,
                    zeroLineWidth: 2,
                    zeroLineColor: 'transparent',
                    color: 'transparent',
                    z: 1,
                    tickMarkLength: 10,
                    drawTicks: true,
                    drawBorder: false,
                  },
                  ticks: {
                    beginAtZero: true,
                    font: {
                      size: 13,
                      family: "'Jost', sans-serif",
                    },
                    color: '#747474',
                  },
                },
              }}
              tooltip={{
                custom: customTooltips,
                callbacks: {
                  title() {
                    return `Total Revenue`;
                  },
                  label(t) {
                    const { formattedValue, dataset } = t;
                    return `${formattedValue}k ${dataset.label}`;
                  },
                },
              }}
              height={window.innerWidth < 1399 ? (window.innerWidth < 575 ? 100 : 110) : 90}
            />
          </div>
        </div>
      )}
    </>
  );
});

MonthlyEarning.defaultProps = {
  title: 'Monthly Earning',
};

MonthlyEarning.propTypes = {
  title: PropTypes.string,
};

export default MonthlyEarning;
