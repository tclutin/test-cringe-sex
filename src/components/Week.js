import React from 'react';
import Day from './Day';

function Week({ week, weekIndex, setSchedule }) {
  const handleAddDay = () => {
    const newDay = { day_number: week.days.length + 1, subjects: [] };
    const updatedWeek = { ...week, days: [...week.days, newDay] };
    setSchedule((prev) => {
      const newWeeks = [...prev.weeks];
      newWeeks[weekIndex] = updatedWeek;
      return { ...prev, weeks: newWeeks };
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        {week.is_even ? 'Even Week' : 'Odd Week'}
        <button className="btn btn-sm btn-outline-primary float-right" onClick={handleAddDay}>
          Add Day
        </button>
      </div>
      <div className="card-body">
        {week.days.map((day, index) => (
          <Day key={index} day={day} weekIndex={weekIndex} dayIndex={index} setSchedule={setSchedule} />
        ))}
      </div>
    </div>
  );
}

export default Week;
