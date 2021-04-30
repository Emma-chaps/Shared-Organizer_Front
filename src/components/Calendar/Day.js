import React from 'react';
import { format, getDayOfYear, getYear } from 'date-fns';

function Day({ className, day, widgets }) {
  const widgetsOfSpecificDay = widgets?.filter((widget) => {
    if (widget.date_nb === getDayOfYear(day) && widget.year === getYear(day)) {
      return widget;
    }
  });
  return (
    <div className={className}>
      <span className="day-number">{format(day, 'dd')}</span>
      {widgetsOfSpecificDay?.map((widget) => (
        <p key={widget.id}>{widget.title}</p>
      ))}
    </div>
  );
}

export default Day;
