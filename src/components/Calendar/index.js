import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  startOfWeek,
  endOfWeek,
  getWeek,
  getDayOfYear,
} from 'date-fns';
import { formatDate, takeMonth, takeWeek } from 'src/modules/calendar';
import { dailyWidgetsFilter } from 'src/selectors/filterWidgets';
import InfoContainer from 'src/containers/InfoContainer';
import Day from './Day';
import DaysNames from './DaysNames';
import DateBrowser from './DateBrowser';

const Calendar = ({
  fetchAllWidgets,
  range,
  date,
  dashboardWidgets,
  setSelectedDateValue,
  setRange,
  getDayInfos,
}) => {
  const dailyWidgets = dailyWidgetsFilter(dashboardWidgets, range);
  const selectedDate = formatDate(date);

  // calls a function that calls another function
  const month = takeMonth(selectedDate)();
  const week = takeWeek(selectedDate)();

  useEffect(() => {
    if (range === 'day') {
      getDayInfos();
    }
  });

  if (range === 'month') {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <h3 className="calendar__header__title">
            <DateBrowser
              fetchAllWidgets={fetchAllWidgets}
              content="<"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
            <span>
              {format(selectedDate, 'MMMM')} {format(selectedDate, 'yyyy')}
            </span>
            <DateBrowser
              fetchAllWidgets={fetchAllWidgets}
              content=">"
              range={range}
              date={date}
              setSelectedDateValue={setSelectedDateValue}
            />
          </h3>
        </div>
        <div className="calendar__content">
          <DaysNames />
          {month.map((weekMonth) => (
            <div
              key={getWeek(weekMonth[0])}
              className="calendar__content__weeks"
            >
              {weekMonth.map((day) => (
                <Day
                  className="calendar__content__weeks__day"
                  key={getDayOfYear(day)}
                  day={day}
                  widgets={dailyWidgets}
                  setSelectedDateValue={setSelectedDateValue}
                  setRange={setRange}
                  range={range}
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
              fetchAllWidgets={fetchAllWidgets}
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
              fetchAllWidgets={fetchAllWidgets}
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
                className="calendar__content__weeks__day week-display"
                key={getDayOfYear(day)}
                day={day}
                widgets={dailyWidgets}
                setSelectedDateValue={setSelectedDateValue}
                setRange={setRange}
                range={range}
              />
            ))}
          </div>
        </div>
        <div className="week-placeholder"></div>
      </div>
    );
  }
  return (
    <div className="calendar">
      <div className="calendar__header">
        <h3 className="calendar__header__title">
          <DateBrowser
            fetchAllWidgets={fetchAllWidgets}
            content="<"
            range={range}
            date={date}
            setSelectedDateValue={setSelectedDateValue}
          />
          <span>{format(selectedDate, 'EEEE do MMMM yyyy')}</span>
          <DateBrowser
            fetchAllWidgets={fetchAllWidgets}
            content=">"
            range={range}
            date={date}
            setSelectedDateValue={setSelectedDateValue}
          />
        </h3>
      </div>
      <InfoContainer />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  fetchAllWidgets: PropTypes.func.isRequired,
  range: PropTypes.string.isRequired,
  dashboardWidgets: PropTypes.array.isRequired,
  setSelectedDateValue: PropTypes.func.isRequired,
  setRange: PropTypes.func.isRequired,
  getDayInfos: PropTypes.func.isRequired,
};

Calendar.defaultProps = {};

export default Calendar;
