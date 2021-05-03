import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { setRange } from 'src/actions/calendar';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  range: state.calendar.range,
});

const mapDispatchToProps = (dispatch) => ({
  setRange: (value) => dispatch(setRange(value)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
