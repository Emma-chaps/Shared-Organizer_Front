import { getDayOfYear, getWeekYear, getWeek } from 'date-fns';

export const RangeWidgetFilter = (widgets, date, range) => {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const dayNb = getDayOfYear(new Date(year, month - 1, day));
  const week = getWeek(new Date(year, month - 1, day));

  const rangeFilteredWidgets = widgets.filter((widget) => {
    if (widget.range === range && widget.year === Number(year)) return widget;
  });

  if (range === 'month') {
    const monthlyWidgets = rangeFilteredWidgets.filter(
      (widget) => widget.date_nb === Number(month),
    );
    return monthlyWidgets;
  }
  if (range === 'week') {
    const weeklyWidgets = rangeFilteredWidgets.filter(
      (widget) => widget.date_nb === Number(week),
    );
    return weeklyWidgets;
  }
  return rangeFilteredWidgets.filter((widget) => widget.date_nb === dayNb);
};

export const dailyWidgetsFilter = (widgets, range) => {
  const filteredWidgets = widgets.filter((widget) => widget.range === 'day');
  return filteredWidgets;
};

// export const MemberWidgetFilter = (members = [], widgets = []) => {
//   const filteredWidgets = widgets.filter((widget) => {
//     const firstFilter = widget.members.map((widgetMember) => {
//       const comparison = members.map((member) => member.id === widgetMember.id);
//       return comparison;
//     });
//     console.log('firstFilter:', firstFilter);
//     return firstFilter;
//   });

//   return filteredWidgets;
// };

// export const MemberWidgetFilter = (members = [], widgets = []) => {
//   const filteredWidgets = widgets.filter((widget) =>
//     widget.members.map((widgetMember) =>
//       members.map((member) => member.id === widgetMember.id),
//     ),
//   );
//   return filteredWidgets;
// };
export const MemberWidgetFilter = (members = [], widgets = []) => {
  let array = [];
  const filteredWidgets = members.forEach((member) => {
    let widgetsArray = [];
    widgets.forEach((widget) => {
      widget.members.forEach((item) => {
        if (item.id === member.id) {
          widgetsArray.push(widget);
        }
      });
    });
    array = [...widgetsArray];
  });
  return array;
};
