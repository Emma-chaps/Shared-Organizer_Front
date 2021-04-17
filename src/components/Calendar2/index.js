import React from 'react';
import './styles.scss';
const {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  getWeek,
  addDays,
  parseISO,
  format,
} = require('date-fns');

const Calendar2 = () => {
  const viewCalendar = {
    year: 2021,
    month: 4,
    day: 15,
    period: 'week',
  };

  //transforme une date décomposée en une date utilisable par date-fns
  const selectedDate = new Date(
    viewCalendar.year,
    viewCalendar.month,
    viewCalendar.day
  );
  console.log(selectedDate);

  function takeWeek(start = selectedDate) {
    let date = startOfWeek(startOfDay(start));

    return function () {
      const week = [...Array(7)].map((_, i) => addDays(date, i));
      date = addDays(week[6], 1);
      return week;
    };
  }
  const weekGenerator = takeWeek();
  const week = weekGenerator();
  console.log(week);

  function takeMonth(start = selectedDate) {
    let month = [];
    let date = start;

    // range = période -> cette fonction retourne le dernier jour de la période /
    // on récupère la dernière semaine du mois
    // (la taille du tableau -1) puis, on va chercher la date du dernier jour de
    // la semaine en appelant l'index 6 (l'index du dernier élément du tableau est 6)
    function lastDayOfRange(range) {
      return range[range.length - 1][6];
    }

    return function () {
      // génère la première semaine du mois
      const weekGen = takeWeek(startOfMonth(date));
      // génère la dernière semaine du mois
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGen());

      // tant que le dernier jour de la semaine est inférieur à la date de fin du
      // mois, on génère une nouvelle semaine
      while (lastDayOfRange(month) < endDate) {
        month.push(weekGen());
      }

      const range = month;
      month = [];
      //
      date = addDays(lastDayOfRange(range), 1);

      return range;
    };
  }
  const monthGenerator = takeMonth();
  const month = monthGenerator();
  console.log(month);

  if (viewCalendar.period === 'month') {
    return (
      <div className="calendar">
        <div>Janvier 2021</div>
        <div>
          <h3>week1</h3>
          <div>
            <span>jour1</span>
            <span>jour2</span>
            <span>jour3</span>
            <span>jour4</span>
            <span>jour5</span>
            <span>jour6</span>
            <span>jour7</span>
          </div>
        </div>
        <div>
          <h3>week2</h3>
          <div>
            <span>jour1</span>
            <span>jour2</span>
            <span>jour3</span>
            <span>jour4</span>
            <span>jour5</span>
            <span>jour6</span>
            <span>jour7</span>
          </div>
        </div>
        <div>
          <h3>week3</h3>
          <div>
            <span>jour1</span>
            <span>jour2</span>
            <span>jour3</span>
            <span>jour4</span>
            <span>jour5</span>
            <span>jour6</span>
            <span>jour7</span>
          </div>
        </div>
        <div>
          <h3>week4</h3>
          <div>
            <span>jour1</span>
            <span>jour2</span>
            <span>jour3</span>
            <span>jour4</span>
            <span>jour5</span>
            <span>jour6</span>
            <span>jour7</span>
          </div>
        </div>
      </div>
    );
  } else if (viewCalendar.period === 'week') {
    return (
      <div className="calendar">
        <h3>Semaine 22</h3>
        <div>
          {weekDates.map((day) => (
            <span></span>
          ))}
          <span>jour1</span>
          <span>jour2</span>
          <span>jour3</span>
          <span>jour4</span>
          <span>jour5</span>
          <span>jour6</span>
          <span>jour7</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="calendar">
        <h3>16 Janvier 2020</h3>
        <div>
          <span>9h</span>
          <span>10h</span>
          <span>11h</span>
          <span>12h</span>
          <span>13h</span>
          <span>14h</span>
          <span>15h</span>
        </div>
      </div>
    );
  }
};

export default Calendar2;
