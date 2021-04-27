import React, { useEffect, useState } from 'react';
import { simpleWidgetFilter } from 'src/selectors/filterWidgets';
import Widget from './Widget';
import './styles.scss';

function WidgetContainer({
  range,
  selectedDateValue,
  dashboardWidgets,
  editWidget,
  deleteWidget,
  copyWidgetToEdit,
}) {
  const filteredWidgets = simpleWidgetFilter(
    dashboardWidgets,
    selectedDateValue,
    range,
  );

  return (
    <div className="widgets">
      {filteredWidgets?.map((widgetData) => (
        <Widget
          key={widgetData.id}
          widget={widgetData}
          editWidget={editWidget}
          deleteWidget={deleteWidget}
          copyWidgetToEdit={copyWidgetToEdit}
        />
      ))}
    </div>
  );
}

export default WidgetContainer;
