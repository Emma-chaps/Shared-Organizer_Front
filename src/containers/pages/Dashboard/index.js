import { connect } from 'react-redux';
import Dashboard from 'src/components/pages/Dashboard';
import { fetchFamilyData } from 'src/actions/user';
import {
  showWidgetCreationModal,
  hideWidgetCreationModal,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  displayCreationModal: state.widget.displayCreationModal,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupData: () => dispatch(fetchFamilyData()),
  showWidgetCreationModal: () => dispatch(showWidgetCreationModal()),
  hideWidgetCreationModal: () => dispatch(hideWidgetCreationModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
