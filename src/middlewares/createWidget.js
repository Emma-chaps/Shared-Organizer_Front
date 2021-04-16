import api from 'src/api';
import {
  SUBMIT_WIDGET_DATA_CREATION,
  setWidgetToDashboard,
} from 'src/actions/widget';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_WIDGET_DATA_CREATION: {
      const {
        title,
        listStyle,
        description,
        color,
        date,
        labelId,
        fields,
      } = store.getState().widget.widgetCreation;

      api
        .post('/dashboard/widgets/create', {
          title,
          listStyle,
          description,
          color,
          date,
          labelId,
          fields,
        })
        .then((result) => result.data)
        .then(({ success, widget, fields: widgetFields }) => {
          if (success) {
            store.dispatch(setWidgetToDashboard(widget, widgetFields));
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
