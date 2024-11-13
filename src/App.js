import React, { useState } from 'react';
import Schedule from './components/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [schedule, setSchedule] = useState({
    weeks: [
      { is_even: true, days: [] },
      { is_even: false, days: [] },
    ],
  });

  return (
    <div className="container">
      <h1 className="my-4">Schedule Builder</h1>
      <Schedule schedule={schedule} setSchedule={setSchedule} />
      <pre className="mt-4 bg-light p-3">{JSON.stringify(schedule, null, 2)}</pre>
    </div>
  );
}

export default App;
