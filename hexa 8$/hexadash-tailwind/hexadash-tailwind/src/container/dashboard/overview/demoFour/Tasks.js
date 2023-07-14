import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskList } from '../../../../components/tasklist/TaskList';

function Tasks() {
  const [state, setState] = useState({
    taskTab: 'all',
  });

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      taskTab: value,
    });
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
        <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Task List
        </h1>
        <ul className="flex items-center mb-0">
          <li>
            <Link
              className={
                state.taskTab === 'all'
                  ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                  : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
              }
              onClick={(e) => handleTabActivation('all', e)}
              to="#"
            >
              All
            </Link>
          </li>
          <li>
            <Link
              className={
                state.taskTab === 'favourite'
                  ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                  : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
              }
              onClick={(e) => handleTabActivation('favourite', e)}
              to="#"
            >
              Favourite
            </Link>
          </li>
          <li>
            <Link
              className={
                state.taskTab === 'completed'
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
      </div>
      <div className="pb-[25px] [&>.relative>.bg-white]:!bg-transparent">
        <TaskList header="" description={false} taskStatus={state.taskTab} taskLimit={5} />
      </div>
    </div>
  );
}

export default Tasks;
