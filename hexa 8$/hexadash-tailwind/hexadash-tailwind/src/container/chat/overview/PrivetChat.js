import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'antd';
import { textRefactor } from '../../../components/utilities/utilities';
import { filterSinglePage } from '../../../redux/chat/actionCreator';

function PrivateChat() {
  const dispatch = useDispatch();
  const chatData = useSelector((state) => state.chat.data);

  const dataFiltering = (email) => {
    dispatch(filterSinglePage(email));
  };

  return (
    <ul>
      {chatData &&
        chatData
          .sort((a, b) => {
            return b.time - a.time;
          })
          .map((user, key) => {
            const { userName, content, email, img, active } = user;
            const id = content[content.length - 1].time;
            const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
            return (
              <li
                key={id}
                className="relative w-full m-0 rounded hover:shadow-[0_15px_50px_rgba(116,116,116,0.13)] dark:shadow-none"
              >
                <NavLink
                  onClick={() => dataFiltering(email)}
                  to={`./${email}`}
                  className="relative z-10 flex justify-between py-5 px-[25px] ssm:px-[15px]"
                >
                  <div className="flex items-center">
                    <div className="ltr:mr-[15px] rtl:ml-[15px]">
                      <img
                        className="max-w-[46px] rounded-full"
                        src={require(`../../../static/img/chat-author/${img}`)}
                        alt=""
                      />
                      <span className={active ? 'active' : 'inactive'} />
                    </div>
                    <div className="ltr:mr-[6px] rtl:ml-[6px]">
                      <span className="block font-semibold text-dark dark:text-white87">{userName}</span>
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
  );
}

export default PrivateChat;
