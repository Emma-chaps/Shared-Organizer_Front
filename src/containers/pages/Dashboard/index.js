import { connect } from 'react-redux';
import Dashboard from 'src/components/pages/Dashboard';
import { fetchGroupData } from 'src/actions/settings';
import {
  showWidgetCreationModal,
  hideWidgetCreationModal,
  fetchDayWidgetsOfRange,
  fetchDisplayedWidgets,
  fetchAllWidgets,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  displayCreationModal: state.widget.displayCreationModal,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupData: () => dispatch(fetchGroupData()),
  showWidgetCreationModal: () => dispatch(showWidgetCreationModal()),
  hideWidgetCreationModal: () => dispatch(hideWidgetCreationModal()),
  fetchDayWidgetsOfRange: () => dispatch(fetchDayWidgetsOfRange()),
  fetchDisplayedWidgets: () => dispatch(fetchDisplayedWidgets()),
  fetchAllWidgets: () => dispatch(fetchAllWidgets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
