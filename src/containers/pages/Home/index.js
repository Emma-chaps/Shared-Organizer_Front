import { connect } from 'react-redux';
import Home from 'src/components/pages/Home';

const mapStateToProps = (state) => ({
  isLogged: state.user.login.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
