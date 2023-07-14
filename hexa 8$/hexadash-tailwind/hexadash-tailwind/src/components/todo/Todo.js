/* eslint-disable no-param-reassign */
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Popconfirm } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onStarUpdate, ToDoDeleteData } from '../../redux/todo/actionCreator';
import { Button } from '../buttons/buttons';

function ToDos({ todoData, showModal, isApp, title, status, tab }) {
  const dispatch = useDispatch();
  const todoDataMore = useSelector((state) => state.Todo.data);

  const onHandleDelete = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.status = 'deleted';
      }
      return item;
    });

    const hardDelete = todoDataMore.filter((item) => item.key !== key);

    dispatch(ToDoDeleteData(status === 'deleted' ? hardDelete : data));
  };

  const onHandleCompleted = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
    dispatch(ToDoDeleteData(data));
  };

  const onHandleRestore = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.status = 'new';
      }
      return item;
    });
    dispatch(ToDoDeleteData(data));
  };

  const dataSource = [];

  if (todoData !== null) {
    todoData.map((item, index) => {
      return dataSource.push({
        key: index + 1,
        index,
        action: isApp ? (
          <div className="todos-action">
            <UilExpandArrows />
            <Link
              className={item.favorite ? 'star active' : 'star'}
              onClick={() => dispatch(onStarUpdate(todoData, item.key))}
              to="#"
            >
              <UilStar />
            </Link>
            <Link onClick={() => onHandleDelete(item.key)} to="#">
              <UilTrashAlt />
            </Link>
          </div>
        ) : (
          <Link onClick={() => onHandleDelete(item.key)} to="#">
            <UilTimes />
          </Link>
        ),
      });
    });
  }

  const cancel = () => {
    // console.log(e);
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative p-[25px]">
      <div className="text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between gap-[15px] sm:justify-center mb-5">
        <h1 className="mb-0 inline-block overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold sm:text-center">
          {title}
        </h1>
        {tab}
      </div>
      <div className="mt-0.5">
        {todoData.length > 0 ? (
          <ul className="">
            {todoData
              .sort((a, b) => b.id - a.id)
              .map((item, i) => {
                return (
                  <li className="flex items-center justify-between gap-x-2.5 py-[7.5px]" key={i}>
                    <div className="[&>.ant-checkbox-wrapper]:flex [&>.ant-checkbox-wrapper]:gap-2.5 [&>.ant-checkbox-wrapper>span.ant-checkbox-checked>.ant-checkbox-inner]:bg-success [&>.ant-checkbox-wrapper>span.ant-checkbox-checked>.ant-checkbox-inner]:border-success [&>.ant-checkbox-wrapper>span>.ant-checkbox-inner]:w-[18px] [&>.ant-checkbox-wrapper>span>.ant-checkbox-inner]:h-[18px] [&>.ant-checkbox-wrapper>span]:p-0 [&>.ant-checkbox-wrapper>span]:text-[15px] [&>.ant-checkbox-wrapper>span]:text-body dark:[&>.ant-checkbox-wrapper>span]:text-white60 [&>.ant-checkbox-wrapper>span]:font-normal ">
                      <Checkbox checked={item.isFinish} onChange={() => onHandleCompleted(item.key)}>
                        {item.item}
                      </Checkbox>
                    </div>
                    <div className="">
                      {status === 'deleted' ? (
                        <Link onClick={() => onHandleRestore(item.key)} to="#">
                          <UilSync />
                        </Link>
                      ) : null}
                      <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => onHandleDelete(item.key)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Link className="flex items-center mx-2.5" to="#">
                          <UilTrashAlt className="w-4 h-4 text-light dark:text-white60 hover:text-danger dark:hover:text-danger" />
                        </Link>
                      </Popconfirm>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          <div className="bg-white dark:bg-white10 m-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative p-[25px]">
            <span>Sorry !! No Completed Task Found :(</span>
          </div>
        )}
      </div>
      {showModal ? (
        <Button
          onClick={showModal}
          className="h-[50px] px-6 text-xs font-medium bg-primary-transparent text-primary border-none"
          transparented
          type="primary"
          size="large"
        >
          + Add New Task
        </Button>
      ) : null}
    </div>
  );
}

ToDos.defaultProps = {
  todoData: [],
  isApp: false,
  title: 'Todo List',
};

ToDos.propTypes = {
  todoData: PropTypes.array,
  showModal: PropTypes.func,
  isApp: PropTypes.bool,
  title: PropTypes.string,
  tab: PropTypes.node,
  status: PropTypes.string,
};
export default ToDos;
