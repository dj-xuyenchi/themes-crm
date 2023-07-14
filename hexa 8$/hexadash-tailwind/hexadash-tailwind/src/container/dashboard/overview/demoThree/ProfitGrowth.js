import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import React from 'react';
import DashboardChart from '../../../../components/charts/DashboardChart';

import chartData from '../../../../demoData/dashboardChartContent.json';

const ProfitGrowth = React.memo(() => {
  const profitGrowthData = chartData.profitGrowth;

  const profitGrowthDataset = [
    {
      data: profitGrowthData.orders,
      backgroundColor: '#00AAFF50',
      hoverBackgroundColor: '#00AAFF',
      label: 'Orders',
      average: '50.8',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 49,
    },
    {
      data: profitGrowthData.sales,
      backgroundColor: '#8231D350',
      hoverBackgroundColor: '#8231D3',
      label: 'Sales',
      average: '$28k',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 60,
    },
  ];
  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
        <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          {profitGrowthData.title}
        </h1>
        <div className="flex items-center gap-[15px]">
          <span className="text-lg font-semibold">8,550</span>
          <span
            className={`flex items-center text-sm font-medium
              ${profitGrowthData.growthStatus === 'down' ? 'text-danger' : 'text-success'}
            `}
          >
            {profitGrowthData.growthStatus === 'growth' ? <UilUp /> : <UilDown />}
            25.36%
          </span>
        </div>
      </div>
      {!profitGrowthData ? (
        <div>
          <Spin />
        </div>
      ) : (
        <div>
          <div className="relative flex items-center justify-center gap-5 mx-3">
            <span className="relative flex items-center ltr:pl-3 rtl:pr-3 text-sm text-[#868eae] dark:text-white60 before:absolute before:bg-info before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
              Orders
            </span>
            <span className="relative flex items-center ltr:pl-3 rtl:pr-3 text-sm text-[#868eae] dark:text-white60 before:absolute before:bg-primary before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
              Sales
            </span>
          </div>
          <div className="hexadash-chart-container px-[25px] pb-[25px]">
            <DashboardChart
              id="hexadash-profit-growth"
              labels={profitGrowthData.labels}
              datasets={profitGrowthDataset}
              type="bar"
              layout={{
                padding: {
                  left: -10,
                  right: -10,
                },
              }}
              tooltip={{
                callbacks: {
                  label(t) {
                    const dstLabel = t.dataset.label;
                    const { formattedValue } = t;
                    return `  ${formattedValue} ${dstLabel}`;
                  },
                  labelColor(t) {
                    return {
                      backgroundColor: t.dataset.hoverBackgroundColor,
                      borderColor: 'transparent',
                    };
                  },
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
                    max: Math.max(...profitGrowthData.orders),
                    stepSize: Math.max(...profitGrowthData.orders) / 5,
                    font: {
                      size: 13,
                      family: "'Jost', sans-serif",
                    },
                    padding: 10,
                    color: '#747474',
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
                    min: 0,
                  },
                },
              }}
              height={window.innerWidth <= 575 ? 200 : 178}
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default ProfitGrowth;
