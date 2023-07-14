import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import DashboardChart from '../../../../components/charts/DashboardChart';

import chartContent from '../../../../demoData/dashboardChartContent.json';

const { userOverviewData } = chartContent;

const UserOverview = React.memo(() => {
  const [overviewTab, setOverviewTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value) => {
    setOverviewTab(value);
  };

  const userOverviewDataset = [
    {
      data: userOverviewData[overviewTab].target,
      backgroundColor: '#8231D380',
      hoverBackgroundColor: '#8231D3',
      label: 'target',
      maxBarThickness: 10,
      barThickness: 16,
    },
    {
      data: userOverviewData[overviewTab].gained,
      backgroundColor: '#00AAFF80',
      hoverBackgroundColor: '#00AAFF',
      label: 'gained',
      maxBarThickness: 10,
      barThickness: 16,
    },
  ];

  return (
    <div className="h-full">
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
        <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
          <h1 className="mb-0 inline-flex items-center py-[16px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            User Overview
          </h1>
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  overviewTab === 'today'
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
                  overviewTab === 'week'
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
                  overviewTab === 'month'
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
        {!userOverviewData[overviewTab] ? (
          <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
            <Spin />
          </div>
        ) : (
          <div className="p-[25px] pt-0">
            <div className="flex items-center justify-center ssm:flex-col ssm:gap-y-[15px]">
              <div className="relative flex items-center mx-3 gap-[15px]">
                <span className="flex items-center text-sm ltr:pl-3 rtl:pr-3 text-body dark:text-white60 before:absolute before:bg-primary before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
                  Target
                </span>
                <span className="inline-block text-dark dark:text-white87 ltr:mr-1 rtl:ml-1 ltr:ml-2.5 rtl:mr-2.5 text-22 font-semibold">
                  $8,550
                </span>
                <span className="flex items-center text-sm font-medium text-success">
                  <UilUp className="w-5 h-5" />
                  25%
                </span>
              </div>
              <div className="relative flex items-center mx-3">
                <span className="flex items-center text-sm ltr:pl-3 rtl:pr-3 text-body dark:text-white60 before:absolute before:bg-info before:w-2 before:h-2 before:rounded-full ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-2/4">
                  Gained
                </span>
                <span className="inline-block text-dark dark:text-white87 ltr:mr-1 rtl:ml-1 ltr:ml-2.5 rtl:mr-2.5 text-22 font-semibold">
                  $5,550
                </span>
                <span className="flex items-center text-sm font-medium text-danger">
                  <UilDown className="w-5 h-5" />
                  15%
                </span>
              </div>
            </div>
            <div>
              <div className="hexadash-chart-container">
                <DashboardChart
                  labels={userOverviewData[overviewTab].labels}
                  datasets={userOverviewDataset}
                  barpercentage="0.5"
                  type="bar"
                  height={window.innerWidth < 1399 ? (window.innerWidth < 575 ? 300 : 100) : 128}
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
                        max: Math.max(...userOverviewData[overviewTab].gained),
                        stepSize: Math.floor(Math.max(...userOverviewData[overviewTab].gained) / 5),
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
                          size: 12,
                          family: "'Jost', sans-serif",
                        },
                        color: '#747474',
                        min: 0,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default UserOverview;
