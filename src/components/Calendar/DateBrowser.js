import React from 'react';
import {
  format,
  addMonths,
  addWeeks,
  addDays,
  subMonths,
  subWeeks,
  subDays,
} from 'date-fns';

function DateBrowser({ content, range, date, setSelectedDateValue }) {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const isoDate = new Date(year, month - 1, day);

  const changeDate = (dateOperation) => {
    const newDate = dateOperation(isoDate, 1);
    setSelectedDateValue(format(newDate, 'yyyy-MM-dd'));
  };

  const handleClick = () => {
    if (content === '>') {
      if (range === 'month') {
        changeDate(addMonths);
      }
      if (range === 'week') {
        changeDate(addWeeks);
      }
      if (range === 'day') {
        changeDate(addDays);
      }
    } else {
      if (range === 'month') {
        changeDate(subMonths);
      }
      if (range === 'week') {
        changeDate(subWeeks);
      }
      if (range === 'day') {
        changeDate(subDays);
      }
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {content}
    </button>
  );
}

export default DateBrowser;
