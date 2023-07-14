import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import { Badge } from 'antd';
import { textRefactor } from '../../../components/utilities/utilities';
import { filterSinglepageGroup } from '../../../redux/chat/actionCreator';
import { Button } from '../../../components/buttons/buttons';

function GroupChat() {
  const chatData = useSelector((state) => state.groupChat.data);
  const dispatch = useDispatch();

  const dataFiltering = (id) => {
    dispatch(filterSinglepageGroup(id));
  };

  return (
    <>
      <div className="mb-[18px] px-[25px] pt-[25px]">
        <Button
          className="flex items-center justify-center bg-regularBG dark:bg-regularBGdark w-full h-11 text-body dark:text-white60 text-sm font-semibold text-center border dark:border-white10 rounded-[40px]"
          size="default"
          type="default"
          block
        >
          <UilEdit className="w-[14px] h-[14px] ltr:mr-[10px] rtl:ml-[10px]" />
          Create New Group
        </Button>
      </div>

      <ul>
        {chatData &&
          chatData
            .sort((a, b) => {
              return b.time - a.time;
            })
            .map((user, key) => {
              const { groupName, content, img } = user;
              const id = content[content.length - 1].time;

              const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
              return (
                <li
                  key={user.id}
                  className="relative w-full m-0 rounded hover:shadow-[0_15px_50px_rgba(116,116,116,0.13)]"
                >
                  <NavLink
                    onClick={() => dataFiltering(id)}
                    to={`./${id}`}
                    className="relative z-10 flex justify-between px-[25px] py-5"
                  >
                    <div className="flex items-center">
                      <div className="ltr:mr-[15px] rtl:ml-[15px]">
                        <img
                          className="max-w-[46px] rounded-full"
                          src={require(`../../../static/img/chat-author/${img}`)}
                          alt=""
                        />
                      </div>
                      <div className="ltr:mr-[6px] rtl:ml-[6px]">
                        <span className="block font-semibold text-dark dark:text-white87">{groupName}</span>
                        <span className="block text-body dark:text-white60">
                          {textRefactor(content[content.length - 1].content, 5)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="float-right text-xs text-light dark:text-white60">
                        {same ? moment(id).format('hh:mm A') : moment(id).format('dddd')}
                      </span>
                      {key <= 1 && (
                        <Badge
                          className="float-right mt-2 text-xs text-light dark:text-white60 [&>sup]:bg-success"
                          count={3}
                        />
                      )}
                    </div>
                  </NavLink>
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default GroupChat;
