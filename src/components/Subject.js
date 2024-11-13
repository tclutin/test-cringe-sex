import React from 'react';

function Subject({ subject, weekIndex, dayIndex, subjectIndex, setSchedule }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => {
      const newWeeks = [...prev.weeks];
      newWeeks[weekIndex].days[dayIndex].subjects[subjectIndex][name] = value;
      return { ...prev, weeks: newWeeks };
    });
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="form-group">
          <label>Subject Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={subject.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Cabinet</label>
          <input
            type="text"
            className="form-control"
            name="cabinet"
            value={subject.cabinet}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Teacher</label>
          <input
            type="text"
            className="form-control"
            name="teacher"
            value={subject.teacher}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={subject.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Start Time</label>
          <input
            type="time"
            className="form-control"
            name="start_time"
            value={subject.start_time}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>End Time</label>
          <input
            type="time"
            className="form-control"
            name="end_time"
            value={subject.end_time}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Subject;
