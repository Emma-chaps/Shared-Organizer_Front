import { connect } from 'react-redux';
import App from 'src/components/App';

import { rehydrate, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.login.isLogged,
  isAdmin: state.user.login.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  rehydrate: () => dispatch(rehydrate()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
