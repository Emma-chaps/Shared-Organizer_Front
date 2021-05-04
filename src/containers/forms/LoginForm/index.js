import { connect } from 'react-redux';
import LoginForm from 'src/components/forms/LoginForm';
import { setUserFieldLoginValue, submitLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.login.email,
  password: state.user.login.password,
  backError: state.user.login.backError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldLoginValue(name, value)),
  handleLogin: () => dispatch(submitLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
