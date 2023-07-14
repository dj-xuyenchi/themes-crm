// eslint-disable-next-line max-classes-per-file
import { DatePicker } from 'antd';
import { addDays } from 'date-fns';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ItemWraper } from '../../container/styled';
import { Button } from '../buttons/buttons';

function DateRangePickerOne() {
  const [state, setState] = useState({
    datePickerInternational: null,
    dateRangePicker: {
      selection: {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
      },
    },
  });

  const handleRangeChange = (which) => {
    setState({
      ...state,
      dateRangePicker: {
        ...state.dateRangePicker,
        ...which,
      },
    });
  };

  const { dateRangePicker } = state;
  const start = dateRangePicker.selection.startDate.toString().split(' ');
  const end = dateRangePicker.selection.endDate.toString().split(' ');

  return (
    <ItemWraper>
      <DateRangePicker
        onChange={handleRangeChange}
        showSelectionPreview
        moveRangeOnFirstSelection={false}
        className="PreviewArea [&+div]:mb-0 inline-flex md:max-h-[300px] md:overflow-x-hidden md:overflow-y-auto"
        months={2}
        ranges={[dateRangePicker.selection]}
        direction="horizontal"
      />

      <div className="border-t border-regular dark:border-white10 p-[10px] flex items-center flex-wrap justify-end gap-[8px]">
        <p className="text-[13px] ltr:mr-[12px] rtl:ml-[12px] font-medium mb-0">{`${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${end[2]} ${end[3]}`}</p>
        <Button size="small" type="primary" className="h-[32px] inline-flex items-center px-[13px] text-[12px]">
          Apply
        </Button>
        <Button
          size="small"
          type="white"
          className="bg-transparent dark:text-white60 dark:border-white10 h-[32px] inline-flex items-center px-[13px] text-[12px]"
          outlined
        >
          Cancel
        </Button>
      </div>
    </ItemWraper>
  );
}

class CustomDateRange extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue) => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;

    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
          style={{ margin: '5px' }}
        />

        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
          style={{ margin: '5px' }}
        />
      </div>
    );
  }
}

export { DateRangePickerOne, CustomDateRange };
