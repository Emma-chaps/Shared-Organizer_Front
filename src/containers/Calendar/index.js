import { connect } from 'react-redux';
import Calendar from 'src/components/Calendar';
import { setSelectedDateValue } from 'src/actions/calendar';
import { fetchAllWidgets } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
  date: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedDateValue: (dateValue) =>
    dispatch(setSelectedDateValue(dateValue)),
  fetchAllWidgets: (dateValue) => dispatch(fetchAllWidgets(dateValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
