import { connect } from 'react-redux';
import Menu from 'src/components/pages/Dashboard/Menu';
import { setRange } from 'src/actions/calendar';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setRange: (value) => dispatch(setRange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
