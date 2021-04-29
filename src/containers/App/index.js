import { connect } from 'react-redux';
import App from 'src/components/App';

import { rehydrate, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  rehydrate: () => dispatch(rehydrate()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
