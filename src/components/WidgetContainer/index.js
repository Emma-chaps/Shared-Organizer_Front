import React from 'react';
import { specificRangeWidgets } from 'src/selectors/filterWidgets';
import Widget from './Widget';
import './styles.scss';

function WidgetContainer({ widgets, range }) {
  const RangedFilteredWidgets = specificRangeWidgets(widgets, range);
  return (
    <div className="widgets">
      {RangedFilteredWidgets.map((widgetData) => (
        <Widget key={widgetData.id} data={widgetData} />
      ))}
    </div>
  );
}

export default WidgetContainer;
