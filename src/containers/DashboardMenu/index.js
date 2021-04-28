import { connect } from 'react-redux';
import DashboardMenu from 'src/components/DashboardMenu';
import { setSelectedDateValue } from 'src/actions/calendar';
import { setFilteredMembers, fetchAllWidgets } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  groupName: state.settings.group.groupName,
  isAdmin: state.user.login.isAdmin,
  selectedDateValue: state.calendar.selectedDateValue,
  members: state.settings.group.members,
});

const mapDispatchToProps = (dispatch) => ({
  setFieldDateValue: (value) => dispatch(setSelectedDateValue(value)),
  setFilteredMembers: (member) => dispatch(setFilteredMembers(member)),
  fetchAllWidgets: (member) => dispatch(fetchAllWidgets(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
