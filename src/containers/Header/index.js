import { connect } from 'react-redux';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  logged: state.user.login.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
