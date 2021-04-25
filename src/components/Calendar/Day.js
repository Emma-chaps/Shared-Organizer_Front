import React from 'react';
import { format, getDayOfYear, getYear } from 'date-fns';

function Day({ className, day, widgets }) {
  console.log('widgets:', widgets);
  const widgetsOfSpecificDay = widgets?.filter((widget) => {
    if (widget.date_nb === getDayOfYear(day) && widget.year === getYear(day)) {
      return widget;
    }
  });
  return (
    <div className={className}>
      {format(day, 'dd')}
      {widgetsOfSpecificDay?.map((widget) => (
        <p>{widget.title}</p>
      ))}
    </div>
  );
}

export default Day;
