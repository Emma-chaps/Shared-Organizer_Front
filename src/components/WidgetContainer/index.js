import React, { useEffect, useState } from 'react';
import {
  specificRangeWidgets,
  widgetMonthChecker,
  widgetWeekChecker,
} from 'src/selectors/filterWidgets';
import Widget from './Widget';
import './styles.scss';

function WidgetContainer({
  widgets,
  range,
  dailyWidgets,
  weeklyWidgets,
  monthlyWidgets,
  selectedDateValue,
}) {
  const [rangedFilteredWidgets, setRangedFilteredWidgets] = useState([]);
  useEffect(() => {
    if (range === 'month') {
      setRangedFilteredWidgets(
        widgetMonthChecker(monthlyWidgets, selectedDateValue),
      );
    }
    if (range === 'week') {
      setRangedFilteredWidgets(
        widgetWeekChecker(weeklyWidgets, selectedDateValue),
      );
    }
  }, [range]);
  return (
    <div className="widgets">
      {rangedFilteredWidgets.map((widgetData) => (
        <Widget key={widgetData.id} widget={widgetData} />
      ))}
    </div>
  );
}

export default WidgetContainer;
