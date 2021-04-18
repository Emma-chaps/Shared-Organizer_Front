import React from 'react';
import { format } from 'date-fns';
import {
  formatDate,
  takeMonth,
  takeWeek,
} from 'src/components/modules/calendar';
import './styles.scss';
import { MdDateRange } from 'react-icons/md';

function WeekNames() {
  return (
    <div className="calendar__content__days-names">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <div className="calendar__content__weeks--day" key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
}

// const viewCalendar = {
//   year: 2021,
//   month: 4,
//   day: 15,
//   period: 'week',
// };

// //transforme une date décomposée en une date utilisable par date-fns
// const selectedDate = new Date(
//   viewCalendar.year,
//   viewCalendar.month,
//   viewCalendar.day
// );
// console.log(selectedDate);

const Calendar = () => {
  const viewCalendar = {
    selectedDate: '2021-06-19',
    period: 'month',
  };

  const selectedDate = formatDate(viewCalendar.selectedDate);
  console.log(selectedDate);
  // call function who calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  if (viewCalendar.period === 'month') {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <MdDateRange className="calendar__header__day-picker" />
          <h3 className="calendar__header__title">Avril 2021</h3>
        </div>
        <div className="calendar__content">
          <WeekNames />
          {month.map((weeks) => (
            <div className="calendar__content__weeks">
              {weeks.map((day) => (
                <div
                  className="calendar__content__weeks--day"
                  key={format(day, 'dd')}
                >
                  {format(day, 'dd')}
                </div>
              ))}
            </div>
          ))}
        </div>
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
