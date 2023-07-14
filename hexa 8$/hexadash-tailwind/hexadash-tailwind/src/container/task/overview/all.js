import React from 'react';
import { TaskList } from '../../../components/tasklist/TaskList';

function All() {
  return (
    <div className="mb-[30px]">
      <TaskList header="Task List" description taskStatus="all" taskLimit={10} />
    </div>
  );
}

export default All;
