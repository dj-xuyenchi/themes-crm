/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-cycle */
import { DatePicker, Form, Input, Radio, Select, TimePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Button } from '../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../styled';
import { eventContext } from '../Calendar';

const { Option } = Select;
function EventForm({ onHandleAddEvent }) {
  const eventData = useContext(eventContext);

  const title = eventData && eventData.title ? eventData.title : '';
  const type = eventData && eventData.type ? eventData.type : '';
  const start = eventData && eventData.start ? eventData.start : moment();
  const end = eventData && eventData.end ? eventData.end : moment().add(3, 'hours');
  const description = eventData && eventData.description ? eventData.description : '';
  const label = eventData && eventData.label ? eventData.label : '';

  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    const startDate = moment(values.eventStartDate).format('MM/DD/YYYY');
    const startTime = moment(values.eventStartTime).format('LT');
    const endDate = moment(values.eventEndDate).format('MM/DD/YYYY');
    const endTime = moment(values.eventEndTime).format('LT');
    onHandleAddEvent({
      title: values.eventTitle,
      description: values.eventDescription,
      start: moment(`${endDate} ${endTime}`).format('MM/DD/YYYY/LT'),
      end: moment(`${startDate} ${startTime}`).format('MM/DD/YYYY/LT'),
      type: values.eventType,
      label: values.eventLabel,
    });
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue({
      eventTitle: title,
      eventType: type,
      eventStart: start,
      eventEnd: end,
      eventDescription: description,
      eventLabel: label,
    });
  });

  return (
    <BasicFormWrapper>
      <div>
        <Form form={form} name="addNewEvent" onFinish={handleSubmit}>
          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">Title</span>
            <Form.Item className="mb-0 w-full" name="eventTitle" initialValue={title}>
              <Input
                className="w-full h-[50px] d-flex items-center border-normal dark:border-white10 rounded-6"
                placeholder="Please set event title"
              />
            </Form.Item>
          </div>
          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">Event Type</span>
            <Form.Item className="mb-0 w-full" name="eventType" initialValue={type}>
              <Radio.Group>
                <Radio value="event">Event</Radio>
                <Radio value="reminder">Reminder</Radio>
                <Radio value="task">Task</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">Start:</span>
            <div className="flex items-center w-full gap-[10px]">
              <Form.Item className="mb-0 w-full" name="eventStartDate" initialValue={moment(start)}>
                <DatePicker
                  className="w-full h-[50px] d-flex items-center border-normal dark:border-white10 rounded-6"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
              <Form.Item className="mb-0 w-full" name="eventStartTime" initialValue={moment(start)}>
                <TimePicker
                  className="w-full h-[50px] d-flex items-center border-normal dark:border-white10 rounded-6"
                  format="h:mm:ss A"
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">End:</span>
            <div className="flex items-center w-full gap-[10px]">
              <Form.Item className="mb-0 w-full" name="eventEndDate" initialValue={moment(start)}>
                <DatePicker
                  className="w-full h-[50px] d-flex items-center border-normal dark:border-white10 rounded-6"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
              <Form.Item className="mb-0 w-full" name="eventEndTime" initialValue={moment(start)}>
                <TimePicker
                  className="w-full h-[50px] d-flex items-center border-normal dark:border-white10 rounded-6"
                  format="h:mm:ss A"
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">Description</span>
            <Form.Item className="mb-0 w-full" name="eventDescription">
              <Input.TextArea
                className="w-full h-[100px] d-flex items-center border-normal dark:border-white10 rounded-6 resize-none"
                placeholder="Write Your Description"
              />
            </Form.Item>
          </div>
          <div className="flex items-center mb-[25px]">
            <span className="min-w-[90px] text-light dark:text-white60">Label</span>
            <Form.Item className="mb-0 w-full" name="eventLabel">
              <Select
                className="[&>div]:h-[50px] [&>div]:border-normal dark:[&>div]:border-white10 [&>div+span]:text-light dark:[&>div+span]:text-white60"
                name="title"
                style={{ width: '100%' }}
              >
                <Option value="primary">
                  <span className="bullet primary" />
                  Primary
                </Option>
                <Option value="secondary">
                  <span className="bullet secondary" />
                  Secondary
                </Option>
                <Option value="success">
                  <span className="bullet success" />
                  success
                </Option>
                <Option value="warning">
                  <span className="bullet warning" />
                  Warning
                </Option>
                <Option value="info">
                  <span className="bullet info" />
                  Info
                </Option>
              </Select>
            </Form.Item>
          </div>
          <div className="flex items-center justify-end md:justify-center gap-[10px]">
            <Button
              className="ant-btn ant-btn-white dark:border-white10 dark:bg-white10 dark:text-white87 h-[34px] flex items-center justify-center px-[15px]"
              onClick={() => {
                return form.resetFields();
              }}
            >
              Reset
            </Button>
            <Button
              htmlType="submit"
              className="btn-save h-[34px] flex items-center justify-center px-[15px]"
              type="primary"
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </BasicFormWrapper>
  );
}

EventForm.propTypes = {
  // eventData: PropTypes.object,
  onHandleAddEvent: PropTypes.func,
};

export default EventForm;
