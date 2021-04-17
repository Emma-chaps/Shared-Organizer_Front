import React from 'react';
import { format } from 'date-fns';
import {
  formatDate,
  takeMonth,
  takeWeek,
} from 'src/components/modules/calendar';
import './styles.scss';

function WeekNames() {
  return (
    <div>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <div key={dayName}>{dayName}</div>
      ))}
    </div>
  );
}

const Calendar = () => {
  const viewCalendar = {
    selectedDate: '2021-06-19',
    period: 'day',
  };

  const selectedDate = formatDate(viewCalendar.selectedDate);
  console.log(selectedDate);
  // call function who calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  if (viewCalendar.period === 'month') {
    return (
      <div>
        <WeekNames />
        {month.map((weeks) => (
          <div>
            {weeks.map((day) => (
              <div>{format(day, 'dd')}</div>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (viewCalendar.period === 'week') {
    return (
      <div>
        <WeekNames />
        <div>
          {week.map((day) => (
            <div>{format(day, 'dd')}</div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>{format(selectedDate, 'dd')}</div>;
  }
};

export default Calendar;
