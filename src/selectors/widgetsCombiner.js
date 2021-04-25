export const widgetsCombiner = (rangeWidgets, newWidgets) => {
  const combinedWidgets = [...rangeWidgets, ...newWidgets];
  const allWidgetUniqueIds = [
    ...new Set(combinedWidgets.map((widget) => widget.id)),
  ];
  const allUniqueWidgets = allWidgetUniqueIds.map((id) =>
    combinedWidgets.find((widget) => widget.id === id),
  );
  return allUniqueWidgets;
};
