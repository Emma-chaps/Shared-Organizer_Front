import React from 'react';
import Widget from './Widget';

function WidgetContainer({ widgets, range }) {
  return (
    <div className="widgets">
      {widgets.map((widgetData) => (
        <Widget data={widgetData} />
      ))}
    </div>
  );
}

export default WidgetContainer;
