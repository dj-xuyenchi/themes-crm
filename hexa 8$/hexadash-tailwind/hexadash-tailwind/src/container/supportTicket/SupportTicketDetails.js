import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, List, Row, Select, Spin } from 'antd';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import Picker from 'emoji-picker-react';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Cards } from '../../components/cards/frame/cards-frame';
import { singlePageReade, ticketUpdateData } from '../../redux/supportTickets/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { idGenerator } from '../../utility/utility';
import data from '../../demoData/supportData.json';

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function SupportTicketDetails() {
  const { dataState, allTickets } = useSelector((state) => {
    return {
      dataState: state.tickets.ticket,
      allTickets: state.tickets.data,
    };
  });
  const [state, setState] = useState({
    inputValue: '',
  });
  const [pickerShow, setPickerShow] = useState(false);
  const { inputValue } = state;

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (dispatch) {
      dispatch(singlePageReade(params.id));
    }
  }, [dispatch, params.id]);

  const handleUpdatePriority = (values) => {
    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.priority = values;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
  };

  const handleUpdateStatus = (values) => {
    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.status = values;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { conversations } = dataState[0].user;
    const id = idGenerator(conversations, 1);
    conversations.push({
      id,
      name: 'Daniel Pink',
      chat: inputValue,
      img: 'static/img/users/2.png',
      time: 'Just Now',
    });

    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.user.conversations = conversations;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
    setState({
      inputValue: '',
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setState({ ...state, inputValue: inputValue + emojiObject.emoji });
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  return (
    <>
      <PageHeader
        className="flex flex-wrap items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col sm:justify-center"
        title="Ticket Details"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        {dataState.length ? (
          <Row gutter={15}>
            <Col xs={24}>
              <Link
                className="inline-flex items-center text-theme-gray dark:text-white60 font-medium text-sm mb-[20px] hover:text-primary gap-[5px]"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                to="#"
              >
                <UilLeft /> Go back
              </Link>
            </Col>
            <Col lg={16} xs={24}>
              <div className="bg-white dark:bg-white10 p-[25px] rounded-10 mb-[25px]">
                <h3 className="text-[20px] font-medium mb-[25px] text-dark dark:text-white87 ">
                  {dataState[0].subject}
                </h3>
                <Row>
                  <Col xxl={8} md={12} xs={24} className="3xl:mb-[20px]">
                    <div>
                      <h4 className="text-[14px] text-light dark:text-white60 mb-[12px]">Requested By:</h4>
                      <div className="flex items-center mb-[30px] gap-[15px]">
                        <img className="w-[30px] rounded-full" src={require(`../../${dataState[0].user.img}`)} alt="" />
                        <span className="text-[14px] font-medium text-theme-gray dark:text-white60">
                          {dataState[0].user.name}
                        </span>
                      </div>
                      <h4 className="mb-[12px] text-dark dark:text-white87 font-medium">Priority</h4>
                      <Select
                        className="[&>div]:border-normal w-[200px] dark:[&>div]:border-white10 [&>div]:rounded-6 [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60 dark:[&>.ant-select-arrow]:text-white60"
                        onChange={handleUpdatePriority}
                        defaultValue={dataState[0].priority}
                      >
                        <Select.Option value="Low">Low</Select.Option>
                        <Select.Option value="Medium">Medium</Select.Option>
                        <Select.Option value="High">High</Select.Option>
                      </Select>
                    </div>
                  </Col>
                  <Col xxl={8} md={12} xs={24} className="3xl:mb-[20px]">
                    <div>
                      <div className="mb-[36px]">
                        <h4 className="text-[14px] text-light dark:text-white60 mb-[12px]">Created Date</h4>
                        <span className="text-[14px] font-medium text-theme-gray dark:text-white60">
                          January 20, 2020
                        </span>
                      </div>
                      <h4 className="mb-[12px] text-dark dark:text-white87 font-medium">Status</h4>
                      <Select
                        className="[&>div]:border-normal w-[200px] dark:[&>div]:border-white10 [&>div]:rounded-6 [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60 dark:[&>.ant-select-arrow]:text-white60"
                        onChange={handleUpdateStatus}
                        defaultValue={dataState[0].status}
                      >
                        <Select.Option value="Close">Close</Select.Option>
                        <Select.Option value="Open">Open</Select.Option>
                        <Select.Option value="Pending">Pending</Select.Option>
                      </Select>
                    </div>
                  </Col>
                  <Col xxl={8} md={12} xs={24} className="3xl:mb-[20px]">
                    <div>
                      <h4 className="text-[14px] text-light dark:text-white60 mb-[12px]">Updated Date</h4>
                      <span className="text-[14px] font-medium text-theme-gray dark:text-white60">
                        February 02, 2020
                      </span>
                    </div>
                  </Col>
                </Row>
                <div className="mt-[30px]">
                  <h4 className="text-[20px] font-semibold leading-[1] mb-[12px]">Overview :</h4>
                  <p className="text-[16px] mb-0 text-theme-gray dark:text-white60">{dataState[0].description}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 p-[25px] rounded-10 mb-[25px]">
                <h3 className="text-[20px] font-medium text-dark dark:text-white87">Conversation</h3>
                <List
                  dataSource={dataState[0].user.conversations}
                  renderItem={(item) => (
                    <List.Item className="p-0 border-none mb-[28px] last:mb-[0]" key={item.email}>
                      <List.Item.Meta
                        className="p-0 border-none"
                        avatar={<Avatar shape="square" src={require(`../../${item.img}`)} />}
                        title={
                          <Link className="text-dark dark:text-white87 text-[14px] font-medium" to="#">
                            {item.name}
                          </Link>
                        }
                        description={<div className="text-[16px] text-theme-gray dark:text-white60">{item.chat}</div>}
                      />
                      <span className="text-[14px] text-theme-gray dark:text-white60">{item.time}</span>
                    </List.Item>
                  )}
                />
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-[30px] relative items-center flex gap-[8px]">
                      <div className="w-full flex items-center gap-[8px]">
                        <span className="absolute ltr:left-[25px] rtl:right-[25px] top-[50%] -translate-y-[50%] flex items-center z-[998]">
                          {pickerShow && <Picker onEmojiClick={onEmojiClick} />}
                          <Link className="flex" onClick={onPickerShow} to="#">
                            <UilSmile className="text-light-extra dark:text-white60" />
                          </Link>
                        </span>
                        <input
                          className="h-[70px] sm:h-[50px] border-none rounded-[35px] bg-normalBG dark:bg-normalBGdark ltr:pl-[75px] rtl:pr-[75px] ltr:pr-[25px] rtl:pl-[25px] outline-none placeholder-shown:!text-light dark:placeholder-shown:!text-white60 placeholder-shown:!text-[14px]"
                          onChange={handleChange}
                          placeholder="Type your message..."
                          name="chat"
                          id="chat"
                          style={{ width: '100%' }}
                          value={inputValue}
                        />
                      </div>
                      <div className="flex items-center">
                        <Button
                          className="w-[50px] h-[50px] rounded-full inline-flex items-center justify-center bg-primary p-0 text-[14px] text-white"
                          onClick={handleSubmit}
                          type="primary"
                        >
                          <UilMessage className="w-[14px] h-[14px]" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={8} xs={24}>
              <div className="bg-white dark:bg-white10 p-[25px] rounded-10">
                <h3 className="text-[18px] font-medium mb-[25px] text-dark dark:text-white87 ">File Attachment</h3>
                <div>
                  {data.files.map((file, index) => (
                    <div key={index} className="flex ltr:items-start rtl:items-end justify-between mb-[22px] last:mb-0">
                      <div className="flex gap-[10px]">
                        <div>
                          <img
                            className="w-[40px] h-[40px]"
                            src={require(`../../static/img/files/${file.type}.png`)}
                            alt="File Logo"
                          />
                        </div>
                        <div>
                          <span className="text-[15px] font-medium text-theme-gray dark:text-white60">{file.name}</span>
                          <span className="block text-[15px] text-light dark:text-white60">{file.size}</span>
                        </div>
                      </div>
                      <Link to="#">
                        {file.type === 'psd' ? (
                          <UilImport className="w-[16px] h-[16px] text-info" />
                        ) : (
                          <UilUpload className="w-[16px] h-[16px] text-info" />
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Cards headless>
            <Spin />
          </Cards>
        )}
      </main>
    </>
  );
}

export default SupportTicketDetails;
