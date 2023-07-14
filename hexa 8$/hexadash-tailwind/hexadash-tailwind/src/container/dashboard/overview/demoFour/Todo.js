import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ToDos from '../../../../components/todo/Todo';

function ToDo() {
  const [taskTab, setTaskTab] = useState('new');
  const todoData = useSelector((state) => state.Todo.data);
  const todoData2 = todoData;
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const todoFilter = todoData2
      .filter((todo) => todo.status === taskTab || (taskTab === 'completed' && todo.isFinish))
      .slice(0, 6);
    setTodoState(todoFilter);
  }, [taskTab, todoData2]);

  const handleTabActivation = (state, e) => {
    e.preventDefault();
    setTaskTab(state);
  };

  return (
    <>
      <ToDos
        todoData={todoState}
        status={taskTab}
        tab={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  taskTab === 'new'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => handleTabActivation('new', e)}
                to="#"
              >
                New
              </Link>
            </li>
            <li>
              <Link
                className={
                  taskTab === 'deleted'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabActivation('deleted', e)}
                to="#"
              >
                Deleted
              </Link>
            </li>
            <li>
              <Link
                className={
                  taskTab === 'completed'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleTabActivation('completed', e)}
                to="#"
              >
                Completed
              </Link>
            </li>
          </ul>
        }
        title="Todo List"
      />
    </>
  );
}

export default ToDo;
