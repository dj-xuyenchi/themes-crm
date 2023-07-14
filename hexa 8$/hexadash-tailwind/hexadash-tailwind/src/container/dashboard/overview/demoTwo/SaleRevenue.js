import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { chartLinearGradient, customTooltips } from '../../../../components/utilities/utilities';

const salesRevenue = {
  today: {
    users: [0, 30, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
    labels: ['2(h)', '4(h)', '6(h)', '8(h)', '10(h)', '12(h)', '14(h)', '16(h)', '18(h)', '20(h)', '22(h)', '24(h)'],
  },
  week: {
    users: [25, 30, 35, 20, 25, 40, 35],
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  month: {
    users: [20, 36, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
    labels: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
  },
};

const SaleRevenue = React.memo(({ title }) => {
  const [revenue, setRevenue] = useState('today');

  const handleTabActivation = (value) => {
    setRevenue(value);
  };

  const options = {
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  const salesRevenueDatasets = [
    {
      data: salesRevenue[revenue].users,
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('hexadash-sales-revenue'), 300, {
          start: '#8231D340',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointBorderColor: 'transparent',
      pointBackgroundColor: '#8231D3',
      amount: '$7,596',
      amountClass: 'current-amount',
      // eslint-disable-next-line no-dupe-keys
      borderWidth: 3,
      hoverRadius: '6',
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHitRadius: 30,
      pointStyle: 'circle',
      pointHoverBorderWidth: 2,
    },
  ];

  return (
    <div className="h-full">
      {salesRevenue[revenue] && (
        <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative mb-[25px] h-full">
          <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between  sm:flex-col sm:h-auto sm:mb-[15px]">
            <h1 className="mb-0 inline-flex items-center py-[16px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
              {title}
            </h1>
            <ul className="flex items-center mb-0">
              <li>
                <Link
                  className={
                    revenue === 'today'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium'
                  }
                  onClick={() => handleTabActivation('today')}
                  to="#"
                >
                  Today
                </Link>
              </li>
              <li>
                <Link
                  className={
                    revenue === 'week'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium'
                  }
                  onClick={() => handleTabActivation('week')}
                  to="#"
                >
                  Week
                </Link>
              </li>
              <li>
                <Link
                  className={
                    revenue === 'month'
                      ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                      : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium'
                  }
                  onClick={() => handleTabActivation('month')}
                  to="#"
                >
                  Month
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-3 hexadash-chart-container px-[25px]">
            <DashboardChart
              type="line"
              id="hexadash-sales-revenue"
              labels={salesRevenue[revenue].labels}
              datasets={salesRevenueDatasets}
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
              height={window.innerWidth < 1399 ? (window.innerWidth < 575 ? 100 : 110) : 136}
              option={options}
            />
          </div>
        </div>
      )}
    </div>
  );
});

SaleRevenue.defaultProps = {
  title: 'Sale Revenue',
};

SaleRevenue.propTypes = {
  title: PropTypes.string,
};

export default SaleRevenue;
