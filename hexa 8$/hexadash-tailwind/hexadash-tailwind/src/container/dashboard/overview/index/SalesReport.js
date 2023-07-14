import PropTypes from 'prop-types';
import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { NavLink } from 'react-router-dom';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { chartLinearGradient, customTooltips } from '../../../../components/utilities/utilities';
import { GlobalUtilityStyle } from '../../../styled';

const salesRevenue = {
  users: ['72.6K', [0, 25, 20, 5, 60, 18, 20, 45, 35, 50, 48, 45], [20, 40, 55, 26, 40, 55, 38, 35, 25, 70, 20, 80]],
  totalOrder: '8550',
  orderGrowth: '25',
  totalSales: '5550',
  salesDown: '15',
  labels: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const SalesReport = React.memo(({ title }) => {
  const moreContent = (
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
        to="#"
      >
        <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Printer</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
        to="#"
      >
        <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>PDF</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
        to="#"
      >
        <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
        to="#"
      >
        <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
        to="#"
      >
        <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>CSV</span>
      </NavLink>
    </div>
  );

  const salesRevenueDatasets = [
    {
      data: salesRevenue.users[1],
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('hexadash-sales-revenue'), 300, {
          start: 'transparent',
          end: 'transparent',
        }),
      label: 'Total Orders',
      pointBorderColor: 'transparent',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
      lineTension: 0.45,
      // eslint-disable-next-line no-dupe-keys
      borderWidth: 3,
      hoverRadius: '6',
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHitRadius: 30,
      pointStyle: 'circle',
      pointHoverBorderWidth: 2,
    },
    {
      data: salesRevenue.users[2],
      borderColor: '#00AAFF',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('hexadash-sales-revenue'), 300, {
          start: 'transparent',
          end: 'transparent',
        }),
      label: 'Total Sales',
      pointBorderColor: 'transparent',
      pointBackgroundColor: '#00AAFF',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
      lineTension: 0.45,
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
    <GlobalUtilityStyle className="h-full">
      {salesRevenue && (
        <Cards
          className="ant-card-body-p-25 border-none h-full ant-card-head-px-25 ant-card-head-b-none ant-card-body-pt-0 ant-card-head-title-base"
          title={title}
          more={moreContent}
          size="large"
        >
          <div className="flex items-center justify-center ssm:flex-col ssm:gap-y-[15px]">
            <div className="relative flex items-center mx-3 gap-[15px]">
              <span className="flex items-center ltr:pl-3 rtl:pr-3 text-sm text-body dark:text-white60 before:absolute before:bg-primary before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
                Orders
              </span>
              <span className="inline-block text-dark dark:text-white87 ltr:mr-1 rtl:ml-1 ltr:ml-2.5 rtl:mr-2.5 text-22 font-semibold">
                $8,550
              </span>
              <span className="flex items-center text-sm text-success font-medium">
                <UilUp className="w-5 h-5" />
                25%
              </span>
            </div>
            <div className="relative flex items-center mx-3">
              <span className="flex items-center ltr:pl-3 rtl:pr-3 text-sm text-body dark:text-white60 before:absolute before:bg-info before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
                Sales
              </span>
              <span className="inline-block text-dark dark:text-white87 ltr:mr-1 rtl:ml-1 ltr:ml-2.5 rtl:mr-2.5 text-22 font-semibold">
                $5,550
              </span>
              <span className="flex items-center text-sm text-danger font-medium">
                <UilDown className="w-5 h-5" />
                15%
              </span>
            </div>
          </div>
          <div className="mt-3 hexadash-chart-container">
            <DashboardChart
              type="line"
              id="hexadash-sales-revenue"
              labels={salesRevenue.labels}
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
                    min: 50,
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
                    return `${dataset.label}: ${formattedValue}k`;
                  },
                },
              }}
              height={window.innerWidth < 1399 ? (window.innerWidth < 575 ? 175 : 100) : 100}
            />
          </div>
        </Cards>
      )}
    </GlobalUtilityStyle>
  );
});

SalesReport.defaultProps = {
  title: 'Sales Report',
};

SalesReport.propTypes = {
  title: PropTypes.string,
};

export default SalesReport;
