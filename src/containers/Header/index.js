import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  groupName: state.settings.group.groupName,
  isAdmin: state.user.login.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
