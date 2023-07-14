/* eslint-disable no-param-reassign */
import React from 'react';
import { Row, Col } from 'antd';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import DashboardChart from '../../../../components/charts/DashboardChart';

import totalChartData from '../../../../demoData/TotalSaleChart.json';

const TotalLineChart = React.memo(() => {
  return (
    <Row gutter={25}>
      {totalChartData.map((item, i) => {
        return (
          <Col xxl={8} md={i === 2 ? 24 : 12} sm={24} xs={24} key={i} className="mb-[25px]">
            <div className="hexadash-total-chart">
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
                  <h1 className="mb-0 inline-flex items-center py-[16px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Total {item.title}
                    <span className="text-[12px] text-theme-gray dark:text-white60 ltr:ml-[5px] rtl:mr-[5px]">
                      (Last{item.period})
                    </span>
                  </h1>
                  <div className="flex items-center justify-center ssm:flex-col ssm:gap-y-[15px]">
                    <div className="relative flex items-center mx-3">
                      <span className="inline-block text-dark dark:text-white87 ltr:mr-1 rtl:ml-1 ltr:ml-2.5 rtl:mr-2.5 text-[18px] font-semibold">
                        $8,550
                      </span>
                      <span
                        className={`flex items-center text-sm text-${item.statusColor} hexadash-total-chart-status-${item.status}`}
                      >
                        {item.status === 'growth' ? <UilUp className="w-5 h-5" /> : <UilDown className="w-5 h-5" />}
                        25.36%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hexadash-chart-container p-[25px] ltr:pl-[15px] rtl:pr-[15px] pt-[5px]">
                  <DashboardChart
                    labels={item.labels}
                    id={`id_${i}`}
                    datasets={[
                      {
                        data: item.data,
                        borderColor: item.lineColor,
                        borderWidth: 3,
                        fill: false,
                        pointBackgroundColor: '#FA8B0C',
                        pointBorderColor: '#fff',
                        pointHoverBorderColor: '#fff',
                        pointBorderWidth: 0,
                        pointHoverBorderWidth: 0,
                        pointHoverRadius: 0,
                        z: 5,
                      },
                    ]}
                    height={window.innerWidth <= 575 ? 200 : 180}
                    tooltip={{
                      custom(tooltip) {
                        if (!tooltip) return;
                        // disable displaying the color box;
                        tooltip.displayColors = false;
                      },
                      callbacks: {
                        title(t) {
                          const { label } = t[0];
                          return `${label}`;
                        },
                        label(t) {
                          const { formattedValue } = t;
                          return `  ${item.title}: ${formattedValue}k`;
                        },
                        labelColor() {
                          return {
                            backgroundColor: item.lineColor,
                            borderColor: 'transparent',
                          };
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
});

export default TotalLineChart;
