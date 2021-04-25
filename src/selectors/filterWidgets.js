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
  const week = date.split('-')[2];
  const filteredWidgets = widgets.filter((widget) => {
    if (widget.date_nb === Number(week) && widget.year === Number(year)) {
      return widget;
    }
  });
  return filteredWidgets;
};
