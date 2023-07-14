import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilCalender from '@iconscout/react-unicons/icons/uil-calender';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSubject from '@iconscout/react-unicons/icons/uil-subject';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Col, Modal, notification, Row } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import CalenDar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import EventForm from './overview/EventForm';
import { CalendarWrapperPage } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { addNewEvents, calendarDeleteData } from '../../redux/calendar/actionCreator';

const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
export const eventContext = React.createContext();

function Calendars() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Calendar',
    },
  ];
  const mapToRBCFormat = (e) => ({ ...e, start: new Date(e.start), end: new Date(e.end) });
  const dispatch = useDispatch();
  const { events } = useSelector((state) => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });

  const [state, setState] = useState({
    date: new Date(),
    selectedEvent: events[0],
    isEventModalVisible: false,
    isFormModalVisible: false,
    modalTitle: 'Update Event',
  });

  const onSelectEvent = (selectedData) => {
    setState({
      ...state,
      isEventModalVisible: true,
      isFormModalVisible: false,
      selectedEvent: selectedData,
    });
  };

  const onSelectSlot = () => {
    setState({
      ...state,
      isFormModalVisible: true,
      selectedEvent: {},
      modalTitle: 'Create New',
    });
  };

  const onChange = (date) =>
    setState({
      ...state,
      date,
    });

  const onHandleVisible = () => {
    setState({
      ...state,
      isFormModalVisible: true,
      selectedEvent: {},
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      isFormModalVisible: false,
      isEventModalVisible: false,
    });
  };
  const eventStyleGetter = (event) => {
    return {
      className: event.label,
    };
  };
  const { isFormModalVisible, isEventModalVisible, selectedEvent, modalTitle } = state;

  const activateEdit = (selectedData) => {
    setState({
      ...state,
      selectedEvent: selectedData,
      modalTitle: 'Update Event',
      isEventModalVisible: false,
      isFormModalVisible: true,
    });
  };
  const deleteEvent = (id) => {
    const data = events.filter((item) => item.id !== id);
    dispatch(calendarDeleteData(data));
    setState({
      ...state,
      isEventModalVisible: false,
    });
    notification.open({
      message: 'Selected Event Deleted',
    });
  };
  const addNew = (event) => {
    const arrayData = [];
    events.map((data) => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(addNewEvents([...events, { ...event, id: max + 1 }]));
    setState({
      ...state,
      isFormModalVisible: false,
    });
    notification.open({
      message: 'New Event Added',
    });
  };
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Calendar"
        routes={PageRoutes}
      />
      <CalendarWrapperPage>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent hexadash-calendar-wrap">
          <Row gutter={25}>
            <Col xxl={6} xl={9} xs={24} className="xl:mb-[25px]">
              <div>
                <Button
                  onClick={onSelectSlot}
                  className="flex items-center justify-center h-[50px] text-[14px] gap-[6px] font-medium w-full rounded-[8px] shadow-[0px_3px_5px_rgba(255, 105, 165, 0.02)] text-white mb-[25px] bg-primary"
                  size="large"
                  type="primary"
                >
                  <UilPlus className="w-[15px] h-[15px] text-white dark:text-white87" /> Create New Event
                </Button>
                <div className="calendar-display">
                  <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
                </div>
                <br />
                <Cards headless>
                  <h3 className="flex items-center justify-between mb-[18px] text-dark dark:text-white87 font-medium mt-0 leading-[1.5715]">
                    My Calendars
                    <Link onClick={onHandleVisible} className="text-theme-gray dark:text-white60" to="#">
                      <UilPlus className="w-[16px] h-[16px]" />
                    </Link>
                  </h3>
                  <ul className="p-0 m-0">
                    {events.map((event) => {
                      const { id, title, label } = event;
                      return (
                        <li className="last:mb-0 mb-[14px] relative" key={id}>
                          <Link
                            className="text-[14px] font-normal flex items-center gap-[8px] text-theme-gray dark:text-white60 hover:text-primary hover:dark:text-primary"
                            to="#"
                          >
                            <span
                              className={`relative top-[-1px] rounded-full inline-block h-[8px] w-[8px] bg-${label}`}
                            />
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Cards>
              </div>
            </Col>
            <Col xxl={18} xl={15} xs={24}>
              <Modal
                className="hexadash-event-form"
                footer={null}
                type="primary"
                title={modalTitle}
                visible={isFormModalVisible}
                onCancel={handleCancel}
              >
                <eventContext.Provider value={selectedEvent}>
                  <EventForm eventData={selectedEvent} onHandleAddEvent={addNew} />
                </eventContext.Provider>
              </Modal>
              <Modal
                title={selectedEvent.title}
                className={`hexadash-event-form-modal [&>div>.ant-modal-header]:bg-current [&>div>.ant-modal-header]:text-current [&>div>.ant-modal-header]:rounded-t-10 [&>.ant-modal-content]:rounded-10 [&>div>.ant-modal-header]:py-[19px] [&>div>.ant-modal-header>.ant-modal-title]:text-white dark:[&>div>.ant-modal-header>.ant-modal-title]:text-white87 text-${selectedEvent.label}`}
                visible={isEventModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                <div className="relative">
                  <div className="absolute ltr:right-[20px] rtl:left-[20px] top-[-74px]">
                    <Link
                      className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-transparent text-white/50 hover:text-white87 hover:bg-white10"
                      to="#"
                      onClick={() => activateEdit(selectedEvent)}
                    >
                      <UilEdit className="w-[15px] h-[15px] text-current" />
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-transparent text-white/50 hover:text-white87 hover:bg-white10"
                      to="#"
                      onClick={() => deleteEvent(selectedEvent.id)}
                    >
                      <UilTrash className="w-[15px] h-[15px] text-current" />
                    </Link>
                  </div>
                  <div className="hexadash-event-details">
                    <ul className="mb-[4px]">
                      <li className="flex items-center text-[14px] mb-[6px]">
                        <UilCalender className="w-[14px] h-[14px] mt-[2px] ltr:mr-3 rtl:ml-3 text-light dark:text-white30" />
                        <span className="text-sm ltr:mr-[2px] rtl:ml-[2px] text-light dark:text-white30">Date:</span>
                        <span className="hexadash-event-text text-[14px] font-medium text-dark dark:text-white87">
                          <span>
                            {moment(selectedEvent.start).format('Do MMMM YYYY')} to{' '}
                            {moment(selectedEvent.end).format('Do MMMM YYYY')}
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center text-[14px] mb-[6px]">
                        <UilClock className="w-[14px] h-[14px] ltr:mr-[12px] rtl:ml-[12px] text-light dark:text-white60" />
                        <span className="text-sm ltr:mr-[2px] rtl:ml-[2px] text-light dark:text-white30">Time:</span>
                        <span className="text-dark dark:text-white87 text-sm font-medium">
                          <span>
                            {moment(selectedEvent.start).format('LT')} - {moment(selectedEvent.end).format('LT')}
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start text-[14px]">
                        <UilSubject className="w-[14px] h-[14px] mt-[3px] ltr:mr-[12px] rtl:ml-[12px] text-light dark:text-white60" />
                        <span className="text-[15px] text-light dark:text-white30">
                          Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam consetetur sadipscing elitr
                          sed diam
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal>
              <DragAndDropCalendar
                className="ninjadasgcaled"
                selectable
                localizer={Localizer}
                events={events.map(mapToRBCFormat)}
                resizable
                // eslint-disable-next-line no-use-before-define
                components={{ toolbar: CustomToolbar }}
                defaultView="month"
                defaultDate={new Date()}
                step={60}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                eventPropGetter={eventStyleGetter}
              />
            </Col>
          </Row>
        </div>
      </CalendarWrapperPage>
    </>
  );
}

export class CustomToolbar extends Toolbar {
  componentDidMount() {
    const toolbarLink = document.querySelectorAll('.calendar-header__right a');
    // eslint-disable-next-line no-plusplus
    for (let i = 0, { length } = toolbarLink; i < length; i++) {
      // eslint-disable-next-line func-names
      toolbarLink[i].onclick = function () {
        const activatedLink = document.querySelector('.calendar-header__right a.active');
        if (activatedLink) activatedLink.classList.remove('active');
        this.classList.add('active');
      };
    }
  }

  render() {
    return (
      <div className="calendar-header">
        <div className="calendar-header__left">
          <button type="button" className="btn-today" onClick={() => this.navigate('TODAY')}>
            today
          </button>
          <div className="calender-head__navigation">
            <button className="btn-navigate" type="button" onClick={() => this.navigate('PREV')}>
              <UilAngleLeft />
            </button>
            <span className="date-label">{this.props.label}</span>
            <button className="btn-navigate" type="button" onClick={() => this.navigate('NEXT')}>
              <UilAngleRight />
            </button>
          </div>
        </div>
        <div className="calendar-header__right">
          <ul>
            <li>
              <Link className="active" to="#" onClick={this.view.bind(null, 'month')}>
                Month
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.view.bind(null, 'week')}>
                Week
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.view.bind(null, 'day')}>
                Day
              </Link>
            </li>
          </ul>
          <Link to="#" onClick={this.view.bind(null, 'agenda')} className="schedule-list">
            <UilListUl />
            Schedule
          </Link>
        </div>
      </div>
    );
  }
}

export default Calendars;
