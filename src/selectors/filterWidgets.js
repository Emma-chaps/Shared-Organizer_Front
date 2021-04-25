import { getDayOfYear, getWeekYear } from 'date-fns';

export const specificRangeWidgets = (widgets, range) =>
  widgets.filter((widget) => range === widget.range);

export const widgetMonthChecker = (widgets, date) => {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const filteredWidgets = widgets.filter((widget) => {
    if (widget.date_nb === Number(month) && widget.year === Number(year)) {
      return widget;
    }
  });
  return filteredWidgets;
};

export const widgetWeekChecker = (widgets, date) => {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const filteredWidgets = widgets.filter((widget) => {
    if (
      widget.date_nb === getWeekYear(new Date(year, month - 1, day)) &&
      widget.year === Number(year)
    ) {
      return widget;
    }
  });
  return filteredWidgets;
};

export const widgetDayChecker = (widgets, date) => {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const filteredWidgets = widgets.filter((widget) => {
    if (
      widget.date_nb === getDayOfYear(new Date(year, month - 1, day)) &&
      widget.year === Number(year)
    ) {
      return widget;
    }
  });
  return filteredWidgets;
};
