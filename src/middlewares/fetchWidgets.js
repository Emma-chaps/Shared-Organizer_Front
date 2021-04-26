import { FETCH_ALL_WIDGETS, setAllWidgets } from 'src/actions/widget';
import api from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_WIDGETS: {
      const { selectedDateValue } = store.getState().calendar;
      const year = selectedDateValue.split('-')[0];
      const month = selectedDateValue.split('-')[1];
      api
        .get(`/all-widgets/${year}/${month}`)
        .then((result) => result.data)
        .then(({ success, widgets }) => {
          if (success) {
            store.dispatch(setAllWidgets(widgets));
          }
        });

      return next(action);
    }
    default:
      return next(action);
  }
};
