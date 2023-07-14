import React, { useState } from 'react';
import CalenDar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [state, setState] = useState({
    date: new Date(),
  });
  const onChange = (date) => setState({ date });
  return (
    <div>
      <div className="hexadash-calendar-widget">
        <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
      </div>
    </div>
  );
}

export default Calender;
