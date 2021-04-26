import React, { useEffect, useState } from 'react';
import { simpleWidgetFilter } from 'src/selectors/filterWidgets';
import Widget from './Widget';
import './styles.scss';

function WidgetContainer({ range, selectedDateValue, dashboardWidgets }) {
  const filteredWidgets = simpleWidgetFilter(
    dashboardWidgets,
    selectedDateValue,
    range,
  );

  return (
    <div className="widgets">
      {filteredWidgets?.map((widgetData) => (
        <Widget key={widgetData.id} widget={widgetData} />
      ))}
    </div>
  );
}

export default WidgetContainer;
