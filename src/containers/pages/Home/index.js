import { connect } from 'react-redux';
import Home from 'src/components/pages/Home';

const mapStateToProps = (state) => ({
  isLogged: state.user.login.isLogged,
  isAdmin: state.user.login.isAdmin,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
