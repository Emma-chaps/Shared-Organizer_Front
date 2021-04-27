import React, { useEffect, useState } from 'react';
import {
  RangeWidgetFilter,
  MemberWidgetFilter,
} from 'src/selectors/filterWidgets';
import Widget from './Widget';
import './styles.scss';

function WidgetContainer({
  range,
  selectedDateValue,
  dashboardWidgets,
  editWidget,
  deleteWidget,
  copyWidgetToEdit,
  hideWidgetCreationModal,
  showWidgetCreationModal,
  displayCreationModal,
  filteredMembers,
}) {
  let filteredWidgets = RangeWidgetFilter(
    dashboardWidgets,
    selectedDateValue,
    range,
  );

  if (filteredMembers.length === 1) {
    filteredWidgets = MemberWidgetFilter(filteredMembers, filteredWidgets);
  }

  return (
    <div className="widgets">
      {filteredWidgets?.map((widgetData) => (
        <Widget
          key={widgetData.id}
          widget={widgetData}
          editWidget={editWidget}
          deleteWidget={deleteWidget}
          copyWidgetToEdit={copyWidgetToEdit}
          displayCreationModal={displayCreationModal}
          showWidgetCreationModal={showWidgetCreationModal}
          hideWidgetCreationModal={hideWidgetCreationModal}
        />
      ))}
    </div>
  );
}

export default WidgetContainer;
