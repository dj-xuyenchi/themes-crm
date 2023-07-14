import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Checkbox, Form, Input, Modal, Popconfirm } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onCompleteUpdate, onStarUpdate, ontaskDelete, ontaskEdit } from '../../redux/task/actionCreator';
import { Button } from '../buttons/buttons';

function TaskList({ taskStatus, header, description, taskLimit }) {
  /* Get Data From Redux Store */
  const { task } = useSelector((state) => {
    return {
      task: state.Task.data,
    };
  });

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  /* Defaine Initial Local state */
  const [state, setState] = useState({
    visible: false,
    taskEditId: '',
    taskDeleteId: '',
    editableItem: {},
  });

  /* Handle Modals */
  const showModal = (id, item) => {
    setState({
      ...state,
      taskEditId: id,
      visible: true,
      editableItem: item,
    });
  };

  const handleTaskDelete = (id) => {
    const value = task.filter((item) => item.id !== id);
    dispatch(ontaskDelete(value));
  };

  /* Handle Modal Cancel */
  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const { taskEditId, editableItem, visible } = state;

  /* Handle Task Edit */
  const onEditHandle = (editableData, id) => {
    const updatedData = task.map((item) => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
        item = editableData;
        return item;
      }
      return item;
    });

    dispatch(ontaskEdit(updatedData));
    setState({
      ...state,
      visible: false,
    });
  };

  /* Handle Task Favourite */
  const onFavouriteHandle = (ts, id) => {
    dispatch(onStarUpdate(ts, id));
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);

  return (
    <div className="relative">
      <div className="bg-white dark:bg-white10 rounded-10 min-h-[220px] hexadash-tassklist-wrap">
        {header === '' ? (
          ''
        ) : (
          <div className="hexadash-tasklist-head">
            <h2 className="text-[16px] font-medium px-[25px] py-[15px] border-b border-normal dark:border-white10 mb-[25px] hexadash-tasklist-head__title">
              {header}
            </h2>
          </div>
        )}

        <div className="hexadash-tasklist-body px-[25px] pb-[25px]">
          {/* Favourite Task */}
          {taskStatus === 'favourite' ? (
            task.filter((item) => item.favourite).length > 0 ? (
              <ul className="hexadash-tasklist">
                {task
                  .slice(0, taskLimit || task.length)
                  .sort((a, b) => b.id - a.id)
                  .filter((item) => item.favourite)
                  .map((item, i) => {
                    return (
                      <li
                        className="flex items-center justify-between py-[7.5px] gap-[10px] flex-wrap hexadash-tasklist-item "
                        key={i}
                      >
                        <div className="hexadash-tasklist-item__content">
                          <div className="hexadash-tasklist-item__title text-[16px] text-dark dark:text-white87">
                            <Checkbox
                              className="text-[15px] font-normal text-theme-gray dark:text-white60 relative top-[-2px] [&>.ant-checkbox-checked>.ant-checkbox-inner]:border-success [&>.ant-checkbox-checked>.ant-checkbox-inner]:bg-success"
                              checked={!!item.completed}
                              onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                            >
                              {item.title}
                            </Checkbox>
                          </div>
                          {description ? (
                            <div className="ltr:pl-[30px] rtl:pr-[30px] hexadash-tasklist-item__text">
                              <p className="mb-0 text-[14px] font-normal text-theme-gray dark:text-white60 mt-[8px]">
                                {item.description}
                              </p>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="flex items-center justify-center gap-[20px] flex-wrap min-w-[20px]">
                          <Link
                            className="inline-flex items-center text-light dark:text-white60 hover:text-primary"
                            to="#"
                            onClick={() => showModal(item.id, item)}
                          >
                            <UilEdit className=" w-[16px]" />
                          </Link>
                          <Link
                            to="#"
                            className={` inline-flex items-center text-light dark:text-white60 hover:text-warning ${
                              item.favourite ? 'active' : ''
                            }`}
                            onClick={() => onFavouriteHandle(task, item.id)}
                          >
                            <UilStar className="w-[16px]" />
                          </Link>
                          <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => handleTaskDelete(item.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Link
                              className="inline-flex items-center text-light dark:text-white60 hover:text-danger"
                              to="#"
                            >
                              <UilTimes className=" w-[16px]" />
                            </Link>
                          </Popconfirm>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className="text-light dark:text-white60">
                <span>Sorry !! No Favourite Task Found :(</span>
              </div>
            )
          ) : /* Completed Task */
          taskStatus === 'completed' ? (
            task.filter((item) => item.completed).length > 0 ? (
              <ul className="hexadash-tasklist">
                {task
                  .slice(0, taskLimit || task.length)
                  .sort((a, b) => b.id - a.id)
                  .filter((item) => item.completed)
                  .map((item, i) => {
                    return (
                      <li
                        className="flex items-center justify-between py-[7.5px] gap-[15px] flex-wrap hexadash-tasklist-item "
                        key={i}
                      >
                        <div className="hexadash-tasklist-item__content">
                          <div className="text-[16px] text-dark dark:text-white87 hexadash-tasklist-item__title">
                            <Checkbox
                              className="text-[15px] font-normal text-theme-gray dark:text-white60 relative top-[-2px] [&>.ant-checkbox-checked>.ant-checkbox-inner]:border-success [&>.ant-checkbox-checked>.ant-checkbox-inner]:bg-success"
                              checked={!!item.completed}
                              onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                            >
                              {item.title}
                            </Checkbox>
                          </div>
                          {description ? (
                            <div className="ltr:pl-[30px] rtl:pr-[30px]  hexadash-tasklist-item__text">
                              <p className="mb-0 text-[14px] font-normal text-theme-gray dark:text-white60 mt-[8px]">
                                {item.description}
                              </p>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="flex items-center justify-center gap-[20px] flex-wrap min-w-[20px]">
                          <Link
                            className="inline-flex items-center text-light dark:text-white60 hover:text-primary"
                            to="#"
                            onClick={() => showModal(item.id, item)}
                          >
                            <UilEdit className=" w-[16px]" />
                          </Link>
                          <Link
                            to="#"
                            className={` inline-flex items-center text-light dark:text-white60 hover:text-warning ${
                              item.favourite ? 'active' : ''
                            }`}
                            onClick={() => onFavouriteHandle(task, item.id)}
                          >
                            <UilStar className="w-[16px]" />
                          </Link>
                          <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => handleTaskDelete(item.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Link
                              className="inline-flex items-center text-light dark:text-white60 hover:text-danger"
                              to="#"
                            >
                              <UilTimes className=" w-[16px]" />
                            </Link>
                          </Popconfirm>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className="text-light dark:text-white60">
                <span>Sorry !! No Completed Task Found :(</span>
              </div>
            ) /* All Task */
          ) : task.length > 0 ? (
            <ul className="hexadash-tasklist">
              {task
                .slice(0, taskLimit || task.length)
                .sort((a, b) => b.id - a.id)
                .map((item, i) => {
                  return (
                    <li
                      className="flex items-center justify-between py-[7.5px] gap-[10px] flex-wrap hexadash-tasklist-item "
                      key={i}
                    >
                      <div className="hexadash-tasklist-item__content">
                        <div className="text-[16px] text-dark dark:text-white87 hexadash-tasklist-item__title">
                          <Checkbox
                            className="text-[15px] font-normal text-theme-gray dark:text-white60 relative top-[-2px] [&>.ant-checkbox-checked>.ant-checkbox-inner]:border-success [&>.ant-checkbox-checked>.ant-checkbox-inner]:bg-success [&>span>.ant-checkbox-inner]:w-[18px] [&>span>.ant-checkbox-inner]:h-[18px] [&>span>.ant-checkbox-inner]:after:left-[25.5%]"
                            checked={!!item.completed}
                            onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                          >
                            {item.title}
                          </Checkbox>
                        </div>
                        {description ? (
                          <div className="ltr:pl-[30px] rtl:pr-[30px] hexadash-tasklist-item__text">
                            <p className="mb-0 text-[14px] font-normal text-theme-gray dark:text-white60 mt-[8px]">
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-[20px] flex-wrap min-w-[20px]">
                        <Link
                          className="inline-flex items-center text-light dark:text-white60 hover:text-primary"
                          to="#"
                          onClick={() => showModal(item.id, item)}
                        >
                          <UilEdit className=" w-[16px]" />
                        </Link>
                        <Link
                          to="#"
                          className={` inline-flex items-center text-light dark:text-white60 hover:text-warning ${
                            item.favourite ? 'active' : ''
                          }`}
                          onClick={() => onFavouriteHandle(task, item.id)}
                        >
                          <UilStar className="w-[16px]" />
                        </Link>
                        <Popconfirm
                          title="Are you sure to delete this task?"
                          onConfirm={() => handleTaskDelete(item.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Link
                            className="inline-flex items-center text-light dark:text-white60 hover:text-danger"
                            to="#"
                          >
                            <UilTimes className=" w-[16px]" />
                          </Link>
                        </Popconfirm>
                      </div>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <div className="text-light dark:text-white60">
              <span>Sorry !! No Task Found :(</span>
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Edit Task"
        className="hexadash-addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
        forceRender
      >
        <div className="hexadash-addTask-modal-inner">
          {task
            .sort((a, b) => b.id - a.id)
            .filter((item) => item.id === taskEditId)
            .map((value, i) => {
              return (
                <div key={i}>
                  <Form form={form} name="add-task" onFinish={(eData) => onEditHandle(eData, value.id)}>
                    <Form.Item
                      rules={[{ required: true, message: 'Please add a Title' }]}
                      name="title"
                      initialValue={value.title}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="description" initialValue={value.description}>
                      <Input.TextArea rows={4} placeholder="Add Description" />
                    </Form.Item>
                    <Form.Item hidden="true" name="favourite" initialValue={value.favourite}>
                      <Input />
                    </Form.Item>
                    <Form.Item hidden="true" name="completed" initialValue={value.completed}>
                      <Input />
                    </Form.Item>
                    <div className="hexadash-modal-actions">
                      <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                        Cancel
                      </Button>
                      <Button htmlType="submit" size="small" type="primary" key="submit">
                        Edit
                      </Button>
                    </div>
                  </Form>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
}

TaskList.propTypes = {
  header: propTypes.string,
  description: propTypes.bool,
  taskStatus: propTypes.string,
  taskLimit: propTypes.number,
};
export { TaskList };
