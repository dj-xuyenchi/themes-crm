import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import Chart from 'react-apexcharts';
import { Cards } from '../../../../components/cards/frame/cards-frame';
// Sample data
const labels = ['Target', 'Completed', 'In Progress'];
const dataSets = {
  series: [90, 80, 70],
  options: {
    chart: {
      width: '100%',
      height: '100%',
      type: 'radialBar',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '28%',
        },
        track: {
          show: true,
          margin: 11,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
          },
          value: {
            fontSize: '24px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 600,
            offsetY: -21,
          },
          total: {
            show: true,
            label: 'Completed',
            fontSize: '16px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            color: '#404040',
            formatter() {
              return '60%';
            },
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    grid: {
      padding: {
        to: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    labels,
  },
};
const PerformanceOverviewRadial = React.memo(() => {
  const moreContent = (
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Printer</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>PDF</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
        to="#"
      >
        <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
        <span>CSV</span>
      </NavLink>
    </div>
  );

  return (
    <>
      <Cards
        more={moreContent}
        title="Performance Overview"
        size="large"
        className="mb-[25px] border-none h-full ant-card-body-p-25 ant-card-head-px-25 ant-card-head-b-none ant-card-body-pt-0 ant-card-body-pb-0 ant-card-head-title-base"
      >
        <div className="flex items-center ssm:flex-col">
          <Chart
            options={dataSets.options}
            series={dataSets.series}
            type="radialBar"
            className="ltr:-ml-[55px] rtl:-mr-[55px]"
            width={320}
          />
          <div className="ltr:-ml-[10px] rtl:-mr-[10px]">
            {dataSets.series.map((value, index) => {
              return (
                <div className="relative ltr:pl-[14px] rtl:pr-[14px] mb-[10px]" key={index}>
                  <span
                    className="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full"
                    style={{
                      backgroundColor: dataSets.options.colors[index],
                    }}
                  />
                  <span className="text-[15px] font-normal text-body dark:text-white60">{labels[index]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Cards>
    </>
  );
});

export default PerformanceOverviewRadial;
