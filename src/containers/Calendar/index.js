import { connect } from 'react-redux';
import Calendar from 'src/components/Calendar';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
  date: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
