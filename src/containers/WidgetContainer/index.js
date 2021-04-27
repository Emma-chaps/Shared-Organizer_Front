import { connect } from 'react-redux';
import WidgetContainer from 'src/components/WidgetContainer';
import { deleteWidget, editWidget, copyWidgetToEdit } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
  selectedDateValue: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
});

const mapDispatchToProps = (dispatch) => ({
  deleteWidget: (widget) => dispatch(deleteWidget(widget)),
  editWidget: (widget) => dispatch(editWidget(widget)),
  copyWidgetToEdit: (widget, members) =>
    dispatch(copyWidgetToEdit(widget, members)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
