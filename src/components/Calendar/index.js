import React from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
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
//   selectedDate: '2021-06-19',
//   period: 'month',
// };

// const selectedDate = formatDate(viewCalendar.selectedDate);
// console.log(selectedDate);

const Calendar = () => {
  const viewCalendar = {
    year: 2021,
    month: 4,
    day: 15,
    period: 'day',
  };

  // converted to a date usable by date-fns
  const selectedDate = new Date(
    viewCalendar.year,
    viewCalendar.month,
    viewCalendar.day
  );

  console.log(selectedDate);
  // call function who calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  if (viewCalendar.period === 'month') {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <MdDateRange className="calendar__header__day-picker" />
          <h3 className="calendar__header__title">
            {format(selectedDate, 'MMMM')} {format(selectedDate, 'yyyy')}
          </h3>
        </div>
        <div className="calendar__content">
          <WeekNames />
          {month.map((weeks) => (
            <div className="calendar__content__weeks">
              {weeks.map((day) => (
                <div
                  className="calendar__content__weeks--day"
                  key={format(day, 'd')}
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
      <div className="calendar calendar-weeks">
        <div className="calendar__header">
          <MdDateRange className="calendar__header__day-picker" />
          <h3 className="calendar__header__title">
            {format(selectedDate, 'wo')} Weeks : from{' '}
            {format(startOfWeek(selectedDate), 'do MMM')} to{' '}
            {format(endOfWeek(selectedDate), 'do MMM yyyy')}
          </h3>
        </div>
        <div className="calendar__content">
          <WeekNames />
          <div className="calendar__content__weeks">
            {week.map((day) => (
              <div
                className="calendar__content__weeks--day"
                key={format(day, 'd')}
              >
                {format(day, 'dd')}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{format(selectedDate, 'dd')}</div>;
  }
};

export default Calendar;
