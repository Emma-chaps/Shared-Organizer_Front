import { GET_DAY_INFOS, updateDayInfos } from 'src/actions/calendar';
import axios from 'axios';
import selectRandomInArray from 'src/selectors/randomInArray';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DAY_INFOS: {
      const { selectedDateValue } = store.getState().calendar;
      const year = selectedDateValue.split('-')[0];
      const month = selectedDateValue.split('-')[1];
      const day = selectedDateValue.split('-')[2];
      Promise.all([
        axios.get(
          `https://byabbe.se/on-this-day/${+month}/${+day}/events.json`,
        ),
        axios.get(
          `https://byabbe.se/on-this-day/${+month}/${+day}/deaths.json`,
        ),
        axios.get(
          `https://byabbe.se/on-this-day/${+month}/${+day}/births.json`,
        ),
      ])
        .then((values) =>
          values.map((value) => {
            if (value.status === 200) {
              return value.data;
            }
          }),
        )
        .then((dateData) => {
          const event = selectRandomInArray(
            dateData.find((data) => data.events)?.events,
          );
          console.log('event:', event);
          const birth = selectRandomInArray(
            dateData.find((data) => data.births)?.births,
          );
          console.log('birth:', birth);
          const death = selectRandomInArray(
            dateData.find((data) => data.deaths)?.deaths,
          );
          console.log('death:', death);
          store.dispatch(updateDayInfos(event, birth, death));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
