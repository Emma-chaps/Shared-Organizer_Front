import React from 'react';
import {
  RangeWidgetFilter,
  MemberWidgetFilter,
} from 'src/selectors/filterWidgets';
import { findMemberbyFirstname } from 'src/selectors/findMember';
import Widget from './Widget';

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
  reinitializeWidget,
}) {
  const handleClick = () => {
    showWidgetCreationModal();
    reinitializeWidget();
  };

  let filteredWidgets = RangeWidgetFilter(
    dashboardWidgets,
    selectedDateValue,
    range
  );

  if (filteredMembers.length === 1) {
    filteredWidgets = MemberWidgetFilter(filteredMembers, filteredWidgets);
  }

  return (
    <>
      {/* <div className="widgets-add-btn-container"> */}
      <div className="widgets">
        {filteredWidgets?.map((widgetData) => (
          <Widget
            key={widgetData.id}
            widget={widgetData}
            editWidget={editWidget}
  colorMember={findMemberbyFirstname(
            widgetData?.author,
            widgetData?.members
          )}
            deleteWidget={deleteWidget}
            copyWidgetToEdit={copyWidgetToEdit}
            displayCreationModal={displayCreationModal}
            showWidgetCreationModal={showWidgetCreationModal}
            hideWidgetCreationModal={hideWidgetCreationModal}
          />
        ))}
        <button type="button" onClick={handleClick} className="add-widget-btn">
          +
        </button>
      </div>
      {/* </div> */}
      <br />
    </>

  );
}

export default WidgetContainer;
