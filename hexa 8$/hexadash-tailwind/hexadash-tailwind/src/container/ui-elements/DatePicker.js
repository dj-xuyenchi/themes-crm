import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { DatePickerWrapper, GlobalUtilityStyle } from '../styled';
import { DateRangePickerOne, CustomDateRange } from '../../components/datePicker/datePicker';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function DatePickers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Date Picker',
    },
  ];
  const [state, setstate] = useState({
    date: null,
    dateString: null,
  });
  const onChange = (date, dateString) => {
    setstate({ ...state, date, dateString });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Date Picker"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <DatePickerWrapper className="flex flex-wrap gap-y-[20px] flex-col w-full p-[25px]">
                  <DatePicker onChange={onChange} />
                  <MonthPicker onChange={onChange} placeholder="Select month" />
                  <RangePicker onChange={onChange} />
                  <WeekPicker onChange={onChange} placeholder="Select week" />
                </DatePickerWrapper>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Date Format
                  </h1>
                </div>
                <DatePickerWrapper className="flex flex-wrap gap-y-[20px] flex-col w-full p-[25px]">
                  <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                  <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                  <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                  <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                  />
                </DatePickerWrapper>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Disabled
                  </h1>
                </div>
                <DatePickerWrapper className="flex flex-wrap gap-y-[20px] flex-col w-full p-[25px]">
                  <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
                  <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
                  <RangePicker
                    defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                    disabled
                  />
                </DatePickerWrapper>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Preset Ranges
                  </h1>
                </div>
                <DatePickerWrapper className="flex flex-wrap gap-y-[20px] flex-col w-full p-[25px]">
                  <RangePicker
                    ranges={{
                      Today: [moment(), moment()],
                      'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    onChange={onChange}
                  />
                  <RangePicker
                    ranges={{
                      Today: [moment(), moment()],
                      'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={onChange}
                  />
                </DatePickerWrapper>
              </div>

              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Extra Footer
                  </h1>
                </div>
                <DatePickerWrapper className="flex flex-wrap gap-y-[20px] flex-col w-full p-[25px]">
                  <DatePicker renderExtraFooter={() => 'extra footer'} />
                  <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                  <RangePicker renderExtraFooter={() => 'extra footer'} />
                  <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                  <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
                </DatePickerWrapper>
              </div>
            </Col>

            <Col lg={12} md={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px]">
                  <h1 className="mb-0 inline-block text-dark dark:text-white87 font-medium text-[17px] pt-[16px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Date Range
                  </h1>
                  <p className="text-theme-gray dark:text-white60">Custom Date Range</p>
                </div>
                <div className="p-[25px]">
                  <CustomDateRange />
                </div>
              </div>
            </Col>
            <Col xxl={16} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px]">
                  <h1 className="mb-0 inline-block text-dark dark:text-white87 font-medium text-[17px] pt-[16px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Date Range
                  </h1>
                  <p className="text-theme-gray dark:text-white60">The simplest use of Date picker</p>
                </div>
                <div className="p-[25px]">
                  <DateRangePickerOne />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default DatePickers;
