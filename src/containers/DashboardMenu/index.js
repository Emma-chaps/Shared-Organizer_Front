import { connect } from 'react-redux';
import DashboardMenu from 'src/components/DashboardMenu';
import { setRange, setSelectedDateValue } from 'src/actions/calendar';
import { setFilteredMembers, fetchAllWidgets } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  selectedDateValue: state.calendar.selectedDateValue,
  members: state.settings.group.members,
});

const mapDispatchToProps = (dispatch) => ({
  setRange: (value) => dispatch(setRange(value)),
  setFieldDateValue: (value) => dispatch(setSelectedDateValue(value)),
  setFilteredMembers: (member) => dispatch(setFilteredMembers(member)),
  fetchAllWidgets: (member) => dispatch(fetchAllWidgets(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
