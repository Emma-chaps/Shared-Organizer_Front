import api from 'src/api';
import { format, parseISO } from 'date-fns';
import {
  SUBMIT_WIDGET_DATA_CREATION,
  reinitializeWidget,
  setWidgetToState,
} from 'src/actions/widget';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_WIDGET_DATA_CREATION: {
      const {
        title,
        description,
        familyMembers,
      } = store.getState().widget.widgetCreation;
      const { range, selectedDateValue } = store.getState().calendar;
      const year = Number(format(parseISO(selectedDateValue), 'yyyy'));
      let dateNb = null;

      switch (range) {
        case 'month': {
          dateNb = Number(format(parseISO(selectedDateValue), 'MM'));
          break;
        }
        case 'week': {
          dateNb = Number(format(parseISO(selectedDateValue), 'w'));
          break;
        }
        case 'day': {
          dateNb = Number(format(parseISO(selectedDateValue), 'dd'));
          break;
        }
        default:
          break;
      }
      api
        .post('/dashboard/widgets/create', {
          title,
          description,
          range,
          year,
          dateNb,
          familyMembers,
        })
        .then((result) => result.data)
        .then(({ success, widget }) => {
          if (success) {
            store.dispatch(setWidgetToState(widget));
            store.dispatch(reinitializeWidget());
          }
        })
        .catch((error) => {
          console.error(error);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
