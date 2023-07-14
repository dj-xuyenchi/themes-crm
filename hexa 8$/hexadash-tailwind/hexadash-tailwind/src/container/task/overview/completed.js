import React from 'react';
import { TaskList } from '../../../components/tasklist/TaskList';

function Completed() {
  return (
    <div className="mb-[30px]">
      <TaskList header="Task List" description taskStatus="completed" taskLimit={10} />
    </div>
  );
}

export default Completed;
