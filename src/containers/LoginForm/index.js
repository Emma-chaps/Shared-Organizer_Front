import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { setUserFieldLoginValue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.login.email,
  password: state.user.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldLoginValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
