import { connect } from 'react-redux';
import Calendar from 'src/components/Calendar';
import {
  setSelectedDateValue,
  setRange,
  getDayInfos,
} from 'src/actions/calendar';
import { fetchAllWidgets } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
  date: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedDateValue: (dateValue) =>
    dispatch(setSelectedDateValue(dateValue)),
  setRange: (value) => dispatch(setRange(value)),
  fetchAllWidgets: (dateValue) => dispatch(fetchAllWidgets(dateValue)),
  getDayInfos: (dateValue) => dispatch(getDayInfos(dateValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
