import React from 'react';
import { TaskList } from '../../../components/tasklist/TaskList';

function Favourite() {
  return (
    <div className="mb-[30px]">
      <TaskList header="Task List" description taskStatus="favourite" taskLimit={10} />
    </div>
  );
}

export default Favourite;
