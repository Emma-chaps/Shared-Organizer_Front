/* eslint-disable max-len */
const {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  parseISO,
} = require('date-fns');

// fonction qui transforme une date en un format de date utilisable par date-fns
export const formatDate = (date) => {
  const selectedDate = addDays(parseISO(date), 0);
  return selectedDate;
};

// La fonction takeWeek génère une semaine du dimanche au samedi (format américain). Elle renvoie une fonction qui génère un tableau contenant les 7 jours d'une semaine
export const takeWeek = (selectedDate) => {
  // je mets un let pour pouvoir réassigner la variable date plus tard et générer la semaine suivante.
  // La fonction startOfWeeks donne la date du premier jour de la semaine en fonction de la date passée en argument
  let date = startOfWeek(startOfDay(selectedDate));

  return function () {
    // je construis un tableau contenant 7 emplacements qui vont avoir un index i. Je boucle sur chaque emplacement du tableau et j'exécute la fonction addDays qui va utiliser la date du début de la semaine comme premier élément du tableau puis va boucler jusqu'à obtenir 7 éléments dans le tableau.
    const week = [...Array(7)].map((_, i) => addDays(date, i));
    // je réassigne la variable date avec la date qui suit le dernier emplacement du tableau (date de fin de la semaine + 1) afin d'avoir la première date de la semaine suivante. Cela servira a construire le mois.
    date = addDays(week[6], 1);
    return week;
  };
};

// Cette fonction retourne une fonction qui génère un mois du calendrier.
export const takeMonth = (selectedDate) => {
  const month = [];

  return function () {
    // J'utilise la fonction takeWeek codée précédemment et je lui passe la date du début du mois en argument pour récupérer la première semaine du mois.
    const weekGen = takeWeek(startOfMonth(selectedDate));
    // je push la première semaine du mois dans le tableau month
    month.push(weekGen());

    // Je crée un fonction qui va récupérer le dernier élément d'un tableau contenant des tableaux.
    // le range contiendra le tableau mois qui contiendra des tableaux pour chaque semaine.
    function lastDayOfRange(range) {
      // La taille du tableau -1 correspond à l'index du dernier élément du tableau month.
      // Pour trouver le dernier jour de la semaine, j'utilise l'index 6 puisque les index commencent à 0.
      return range[range.length - 1][6];
    }

    // La fonction endDate génère le dernier jour du mois en trouvant le dernier jour de la semaine du dernier jour du mois.
    const endDate = startOfDay(endOfWeek(endOfMonth(selectedDate)));

    // tant que le dernier jour du tableau month est inférieur à la date de fin du mois , je génère une nouvelle semaine et je la push dans le tableau
    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    return month;
  };
};
