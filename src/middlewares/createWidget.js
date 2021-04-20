import api from 'src/api';
import { format, parseISO } from 'date-fns';
import { SUBMIT_WIDGET_DATA_CREATION } from 'src/actions/widget';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_WIDGET_DATA_CREATION: {
      const {
        title,
        description,
        familyMembers,
      } = store.getState().widget.widgetCreation;
      const { range, selectedDateValue } = store.getState().calendar;
      const year = format(parseISO(selectedDateValue), 'yyyy');
      console.log('year:', year);
      let dateNb = null;

      switch (range) {
        case 'month': {
          dateNb = format(parseISO(selectedDateValue), 'MM');
          break;
        }
        case 'week': {
          dateNb = format(parseISO(selectedDateValue), 'w');
          break;
        }
        case 'day': {
          dateNb = format(parseISO(selectedDateValue), 'dd');
          break;
        }
        default:
          break;
      }
      console.log('dateNb:', dateNb);

      console.log('range:', range);

      // api
      //   .post('/dashboard/widgets/create', {
      //     title,
      //     description,
      //     range,
      //     date,
      //     familyMembers,
      //   })
      //   .then((result) => result.data)
      //   .then(({ success, widget, fields: widgetFields }) => {
      //     if (success) {
      //       store.dispatch(setWidgetToDashboard(widget, widgetFields));
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      return next(action);
    }
    default:
      return next(action);
  }
};
