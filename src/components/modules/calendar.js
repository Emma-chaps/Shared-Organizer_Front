const {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  parseISO,
} = require('date-fns');

// transforme une date de type '2021-04-19' en une date utilisable par date-fns
export const formatDate = (date) => {
  const selectedDate = addDays(parseISO(date), 0);
  return selectedDate;
};

// retourn un tableau des dates de la semaine correspondant au jour selectionné
export const takeWeek = (selectedDate) => {
  let date = startOfWeek(startOfDay(selectedDate));

  return function () {
    const week = [...Array(7)].map((_, i) => addDays(date, i));
    date = addDays(week[6], 1);
    return week;
  };
};

export const takeMonth = (selectedDate) => {
  let month = [];
  let date = selectedDate;

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
};
