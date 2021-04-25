import React, { useEffect } from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { formatDate, takeMonth, takeWeek } from 'src/modules/calendar';
import './styles.scss';
import { MdDateRange } from 'react-icons/md';
import Day from './Day';

function WeekNames() {
  return (
    <div className="calendar__content__days-names">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <div className="calendar__content__weeks__day" key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
}

const Calendar = ({ range, date, dailyWidgets }) => {
  const selectedDate = formatDate(date);

  // calls a function that calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  if (range === 'month') {
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
                <Day
                  className="calendar__content__weeks__day"
                  key={format(day, 'd')}
                  day={day}
                  widgets={dailyWidgets}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (range === 'week') {
    return (
      <div className="calendar calendar-weeks">
        <div className="calendar__header">
          <MdDateRange className="calendar__header__day-picker" />
          <h3 className="calendar__header__title">
            {/* {format(selectedDate, 'wo')} Weeks :  */}
            Weeks from {format(startOfWeek(selectedDate), 'do MMM')} to{' '}
            {format(endOfWeek(selectedDate), 'do MMM yyyy')}
          </h3>
        </div>
        <div className="calendar__content">
          <WeekNames />
          <div className="calendar__content__weeks">
            {week.map((day) => (
              <Day
                className="calendar__content__weeks__day"
                key={format(day, 'd')}
                day={day}
                widgets={dailyWidgets}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="calendar">
      <div className="calendar__header">
        <MdDateRange className="calendar__header__day-picker" />
        <h3 className="calendar__header__title">
          {format(selectedDate, 'EEEE do MMMM yyyy')}
        </h3>
      </div>
    </div>
  );
};

export default Calendar;
