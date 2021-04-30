import React from 'react';

const DaysNames = () => (
  <div className="calendar__content__days-names">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
      <div className="calendar__content__days-names__day" key={dayName}>
        {dayName}
      </div>
    ))}
  </div>
);

export default DaysNames;
