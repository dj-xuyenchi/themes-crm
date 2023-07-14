import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { GlobalUtilityStyle, ChartPointHorizontal } from '../../../styled';

const PerformanceOverview = React.memo(() => {
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
  const labels = ['In Progress', 'Target', 'Completed'];

  const options = {
    cutout: 70,
    maintainAspectRatio: false,
    responsive: false,
    borderWidth: 2,
    borderColor: 'transparent',
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {},
  };

  const datasets = [
    {
      data: [10, 60, 30],
      backgroundColor: ['#FA8B0C', '#8231D3', '#00E4EC'],
      centerText: '',
      centerTextLabel: 'Completed',
    },
  ];

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        more={moreContent}
        title="Performance Overview"
        size="large"
        className="border-none h-full ant-card-body-p-25 ant-card-head-px-25 ant-card-head-b-none ant-card-body-pt-0 ant-card-body-pb-0 ant-card-head-title-base"
      >
        <>
          <div className="[&>.doughnutchart-inner]:flex [&>.doughnutchart-inner]:items-center [&>.doughnutchart-inner]:justify-center [&>.doughnutchart-inner]:relative [&>.doughnutchart-inner]:mx-auto [&>.doughnutchart-inner>.doughnutchart-inner-text]:absolute [&>.doughnutchart-inner>.doughnutchart-inner-text]:top-1/2 [&>.doughnutchart-inner>.doughnutchart-inner-text]:left-1/2 [&>.doughnutchart-inner>.doughnutchart-inner-text]:transform [&>.doughnutchart-inner>.doughnutchart-inner-text]:-translate-x-1/2 [&>.doughnutchart-inner>.doughnutchart-inner-text]:-translate-y-1/2 [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-content]:block [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-content]:text-dark dark:[&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-content]:text-white87 [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-content]:text-3xl [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-content]:font-semibold [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-label]:text-body dark:[&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-label]:text-white60 [&>.doughnutchart-inner>.doughnutchart-inner-text>.doughnutchart-inner-label]:text-[15px]">
            <DoughnutChart labels={labels} datasets={datasets} width={180} height={180} option={options} />
          </div>
          <ChartPointHorizontal>
            <div className="flex items-center justify-between max-w-[330px] mx-auto mt-[34px] mb-[30px]">
              {datasets[0].data.map((value, index) => {
                return (
                  <div className="flex items-center gap-1.5" key={index}>
                    <span
                      className="w-[7px] h-[7px] rounded-full"
                      style={{
                        backgroundColor: datasets[0].backgroundColor[index],
                      }}
                    />
                    <span className="text-sm text-light">{labels[index]}</span>
                  </div>
                );
              })}
            </div>
          </ChartPointHorizontal>
        </>
      </Cards>
    </GlobalUtilityStyle>
  );
});

export default PerformanceOverview;
