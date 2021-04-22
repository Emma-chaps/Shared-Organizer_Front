import { connect } from 'react-redux';
import Dashboard from 'src/components/pages/Dashboard';
import { fetchGroupData } from 'src/actions/settings';
import {
  showWidgetCreationModal,
  hideWidgetCreationModal,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  logged: state.user.login.logged,
  displayCreationModal: state.widget.displayCreationModal,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupData: () => dispatch(fetchGroupData()),
  showWidgetCreationModal: () => dispatch(showWidgetCreationModal()),
  hideWidgetCreationModal: () => dispatch(hideWidgetCreationModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
