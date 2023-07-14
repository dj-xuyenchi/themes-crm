import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import GoogleIcon from '../../../../static/img/icon/google-customIcon.svg';
import config from '../../../../config/config';
import { GlobalUtilityStyle } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';

const SourceRevenueGenerated = React.memo(() => {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const { theme } = config;
  const chartHeight = window.innerWidth <= 1699 ? (window.innerWidth <= 991 ? 200 : 200) : 300;
  const chartWidth = window.innerWidth <= 1699 ? (window.innerWidth <= 991 ? 200 : 200) : 300;
  const chartjsPieChart = {
    height: chartHeight,
    width: chartWidth,
    labels: ['Twitter', 'Google', 'Facebook'],
    datasets: [
      {
        data: [1540, 1540, 5346],
        backgroundColor: ['#00AAFF', '#8231D3', '#5840FF'],
      },
    ],
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

    option: {
      borderColor: theme[mainContent]['white-background'],
      maintainAspectRatio: true,
      responsive: false,
    },

    tooltip: {
      mode: 'index',
      callbacks: {
        label(t) {
          const { dataset, label, dataIndex } = t;
          return `  ${label} ${dataset.data[dataIndex]}`;
        },
        labelColor({ dataIndex, dataset }) {
          return {
            backgroundColor: dataset.backgroundColor[dataIndex],
            borderColor: 'transparent',
            color: '#0a0a0a',
          };
        },
      },
    },
  };

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
    <GlobalUtilityStyle className="h-full">
      <Cards
        title="Source Of Revenue Generated"
        size="large"
        className="mb-[25px] border-none h-full ant-card-body-p-25 ant-card-head-px-25 ant-card-head-b-none ant-card-body-pt-0 ant-card-body-pb-0 ant-card-head-title-base"
        more={moreContent}
      >
        <div className="hexadash-chart-container flex items-center justify-between flex-wrap gap-y-[20px] py-[20px] sm:pt-0 px-[25px] 3xl:justify-center lg:justify-start md:justify-center gap-x-[20px] [&>.chartjs-tooltip>table>tbody>tr>td]:text-dark dark:[&>.chartjs-tooltip>table>tbody>tr>td]:text-white60">
          <DashboardChart {...chartjsPieChart} type="pie" id="pieChart" />
          <div className="flex flex-wrap gap-x-[44px] gap-y-[22px] ssm:gap-x-[15px] ssm:gap-y-[15px] ssm:justify-center">
            <div>
              <div className="flex items-center justify-center bg-info-transparent text-info w-[80px] h-[80px] mb-[10px] rounded-[10px]">
                <UilTwitter />
              </div>
              <div className="text-center">
                <span className="text-[15px] text-dark dark:text-white87 block font-medium">
                  {chartjsPieChart.labels[0]}
                </span>
                <span className="text-[14px] text-light dark:text-white60 block font-medium">
                  ${chartjsPieChart.datasets[0].data[0]}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center bg-danger-transparent text-danger w-[80px] h-[80px] mb-[10px] rounded-[10px]">
                <ReactSVG src={GoogleIcon} />
              </div>
              <div className="text-center">
                <span className="text-[15px] text-dark dark:text-white87 block font-medium">
                  {chartjsPieChart.labels[1]}
                </span>
                <span className="text-[14px] text-light dark:text-white60 block font-medium">
                  ${chartjsPieChart.datasets[0].data[1]}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center bg-secondary-transparent text-secondary w-[80px] h-[80px] mb-[10px] rounded-[10px]">
                <UilFacebook />
              </div>
              <div className="text-center">
                <span className="text-[15px] text-dark dark:text-white87 block font-medium">
                  {chartjsPieChart.labels[2]}
                </span>
                <span className="text-[14px] text-light dark:text-white60 block font-medium">
                  ${chartjsPieChart.datasets[0].data[2]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default SourceRevenueGenerated;
