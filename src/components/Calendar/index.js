import React, { useEffect } from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { formatDate, takeMonth, takeWeek } from 'src/modules/calendar';
import './styles.scss';
import { MdDateRange } from 'react-icons/md';
import { dailyWidgetsFilter } from 'src/selectors/filterWidgets';
import Day from './Day';
import DaysNames from './DaysNames';
import DateBrowser from './DateBrowser';

const Calendar = ({ range, date, dashboardWidgets, setSelectedDateValue }) => {
  const dailyWidgets = dailyWidgetsFilter(dashboardWidgets, range);
  const selectedDate = formatDate(date);

  // calls a function that calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  if (range === 'month') {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <h3 className="calendar__header__title">
            <DateBrowser
              content="<"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
            <span>
              {format(selectedDate, 'MMMM')} {format(selectedDate, 'yyyy')}
            </span>
            <DateBrowser
              content=">"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
          </h3>
        </div>
        <div className="calendar__content">
          <DaysNames />
          {month.map((weeks, index) => (
            <div key={index} className="calendar__content__weeks">
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
          <h3 className="calendar__header__title">
            {/* {format(selectedDate, 'wo')} Weeks :  */}
            <DateBrowser
              content="<"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
            <span>
              {format(startOfWeek(selectedDate), 'do MMM')} To{' '}
              {format(endOfWeek(selectedDate), 'do MMM yyyy')}
            </span>
            <DateBrowser
              content=">"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
          </h3>
        </div>
        <div className="calendar__content">
          <DaysNames />
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
        <h3 className="calendar__header__title">
          <DateBrowser
            content="<"
            range={range}
            date={date}
            setSelectedDateValue={setSelectedDateValue}
          />
          <span>{format(selectedDate, 'EEEE do MMMM yyyy')}</span>
          <DateBrowser
            content=">"
            range={range}
            date={date}
            setSelectedDateValue={setSelectedDateValue}
          />
        </h3>
      </div>
    </div>
  );
};

export default Calendar;
