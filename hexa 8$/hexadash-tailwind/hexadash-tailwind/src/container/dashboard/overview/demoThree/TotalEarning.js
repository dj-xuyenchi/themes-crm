import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Col, Row } from 'antd';
import React from 'react';
import DashboardChart from '../../../../components/charts/DashboardChart';

import totalChartData from '../../../../demoData/TotalEarning.json';

const TotalEarning = React.memo(() => {
  return (
    <Row gutter={25}>
      {totalChartData.map((item, i) => {
        return (
          <Col xs={24} key={i}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
                <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Total {item.title}
                  <span className="text-xs ltr:ml-1.5 rtl:mr-1.5 text-body font-medium">(Last){item.period}</span>
                </h1>
                <div className="flex items-center gap-[12px]">
                  <span className="text-lg font-semibold">$8,550</span>
                  <span
                    className={`flex items-center text-sm font-medium
                      ${item.status === 'down' ? 'text-danger' : 'text-success'}
                    `}
                  >
                    {item.status === 'growth' ? <UilUp /> : <UilDown />}
                    25.36%
                  </span>
                </div>
              </div>
              <div className="hexadash-chart-container px-[25px] pb-[25px]">
                <DashboardChart
                  type="line"
                  id="totalEarning"
                  labels={item.labels}
                  datasets={[
                    {
                      data: item.data,
                      borderColor: item.lineColor,
                      borderWidth: 3,
                      fill: false,
                      pointBackgroundColor: '#8231D3',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: '#fff',
                      pointBorderWidth: 0,
                      pointHoverBorderWidth: 0,
                      pointHoverRadius: 0,
                      z: 5,
                    },
                  ]}
                  elements={{
                    line: {
                      tension: 0.3,
                      borderCapStyle: 'round',
                      borderJoinStyle: 'round',
                      capBezierPoints: true,
                    },
                    point: {
                      radius: 0,
                      z: 5,
                    },
                  }}
                  height={window.innerWidth <= 575 ? 280 : 200}
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
                        return `${item.title}: $${formattedValue}k`;
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
          </Col>
        );
      })}
    </Row>
  );
});

export default TotalEarning;
