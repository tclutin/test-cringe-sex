import React from 'react';
import Subject from './Subject';

function Day({ day, weekIndex, dayIndex, setSchedule }) {
  const handleAddSubject = () => {
    const newSubject = {
      name: '',
      cabinet: '',
      teacher: '',
      description: '',
      start_time: '',
      end_time: '',
    };
    const updatedDay = { ...day, subjects: [...day.subjects, newSubject] };
    setSchedule((prev) => {
      const newWeeks = [...prev.weeks];
      newWeeks[weekIndex].days[dayIndex] = updatedDay;
      return { ...prev, weeks: newWeeks };
    });
  };

  return (
    <div className="mb-3">
      <h5>Day {day.day_number}</h5>
      <button className="btn btn-sm btn-outline-secondary mb-2" onClick={handleAddSubject}>
        Add Subject
      </button>
      {day.subjects.map((subject, index) => (
        <Subject
          key={index}
          subject={subject}
          weekIndex={weekIndex}
          dayIndex={dayIndex}
          subjectIndex={index}
          setSchedule={setSchedule}
        />
      ))}
    </div>
  );
}

export default Day;
