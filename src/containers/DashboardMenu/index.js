import { connect } from 'react-redux';
import DashboardMenu from 'src/components/DashboardMenu';
import { setRange } from 'src/actions/calendar';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setRange: (value) => dispatch(setRange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
