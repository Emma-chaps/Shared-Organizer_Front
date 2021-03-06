import { connect } from 'react-redux';
import WidgetContainer from 'src/components/WidgetContainer';
import {
  deleteWidget,
  editWidget,
  copyWidgetToEdit,
  hideWidgetCreationModal,
  showWidgetCreationModal,
  reinitializeWidget,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
  selectedDateValue: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
  displayCreationModal: state.widget.displayCreationModal,
  filteredMembers: state.widget.filteredMembers,
  members: state.settings.group.members,
});

const mapDispatchToProps = (dispatch) => ({
  deleteWidget: (id) => dispatch(deleteWidget(id)),
  editWidget: (widget) => dispatch(editWidget(widget)),
  copyWidgetToEdit: (widget, members) =>
    dispatch(copyWidgetToEdit(widget, members)),
  hideWidgetCreationModal: () => dispatch(hideWidgetCreationModal()),
  showWidgetCreationModal: () => dispatch(showWidgetCreationModal()),
  reinitializeWidget: () => dispatch(reinitializeWidget()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
