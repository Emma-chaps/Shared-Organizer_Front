import React from 'react';
import { format, getDayOfYear, getYear } from 'date-fns';

function Day({ className, day, widgets }) {
  const widgetsOfSpecificDay = widgets?.filter((widget) => {
    if (widget.date_nb === getDayOfYear(day) && widget.year === getYear(day)) {
      return widget;
    }
  });
  const arrayOfDisplayedLetters = widgetsOfSpecificDay?.map((widget) =>
    widget.members.map((member) => member.firstname[0]),
  );
  const duplicatesLetters = [];
  const displayedLetters = arrayOfDisplayedLetters?.forEach((array) =>
    duplicatesLetters.push(...array),
  );
  const uniqueLetters = new Set(duplicatesLetters);
  const uniqueLettersArray = [...uniqueLetters];
  return (
    <div className={className}>
      <span className="day-number">{format(day, 'dd')}</span>
      {uniqueLettersArray?.map((letter) => (
        <div className="calendar-members-concerned" key={letter}>
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Day;
