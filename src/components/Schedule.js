import React from 'react';
import Week from './Week';

function Schedule({ schedule, setSchedule }) {
  const handleAddWeek = (isEven) => {
    const newWeek = {
      is_even: isEven,
      days: Array.from({ length: 7 }, (_, i) => ({ day_number: i + 1, subjects: [] })),
    };
    setSchedule((prev) => ({
      ...prev,
      weeks: [...prev.weeks, newWeek],
    }));
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={() => handleAddWeek(true)}>
        Add Even Week
      </button>
      <button className="btn btn-secondary m-2" onClick={() => handleAddWeek(false)}>
        Add Odd Week
      </button>
      <div className="row">
        {schedule.weeks.map((week, index) => (
          <div className="col-md-6" key={index}>
            <Week week={week} weekIndex={index} setSchedule={setSchedule} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
