import React from 'react';
import PropTypes from 'prop-types';
import {
  RangeWidgetFilter,
  MemberWidgetFilter,
} from 'src/selectors/filterWidgets';
import { findMemberbyFirstname } from 'src/selectors/findMember';
import Widget from 'src/containers/WidgetContainer/Widget';

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
  members,
}) {
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
      <div className="widgets">
        {filteredWidgets?.map((widgetData) => (
          <Widget
            key={widgetData.id}
            widget={widgetData}
            editWidget={editWidget}
            colorMember={findMemberbyFirstname(widgetData?.author, members)}
            deleteWidget={deleteWidget}
            copyWidgetToEdit={copyWidgetToEdit}
            displayCreationModal={displayCreationModal}
            showWidgetCreationModal={showWidgetCreationModal}
            hideWidgetCreationModal={hideWidgetCreationModal}
          />
        ))}
      </div>
      <br />
    </>
  );
}

WidgetContainer.propTypes = {
  range: PropTypes.string.isRequired,
  selectedDateValue: PropTypes.string.isRequired,
  dashboardWidgets: PropTypes.array.isRequired,
  editWidget: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  copyWidgetToEdit: PropTypes.func.isRequired,
  hideWidgetCreationModal: PropTypes.func.isRequired,
  showWidgetCreationModal: PropTypes.func.isRequired,
  displayCreationModal: PropTypes.bool.isRequired,
  filteredMembers: PropTypes.array.isRequired,
  reinitializeWidget: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
};

WidgetContainer.defaultProps = {};

export default WidgetContainer;
