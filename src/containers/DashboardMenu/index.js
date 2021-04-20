import { connect } from 'react-redux';
import DashboardMenu from 'src/components/DashboardMenu';
import { setRange, setSelectedDateValue } from 'src/actions/calendar';

const mapStateToProps = (state) => ({
  selectedDateValue: state.calendar.selectedDateValue,
});

const mapDispatchToProps = (dispatch) => ({
  setRange: (value) => dispatch(setRange(value)),
  setFieldDateValue: (value) => dispatch(setSelectedDateValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
