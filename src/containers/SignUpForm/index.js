import { connect } from 'react-redux';
import LoginForm from 'src/components/SignUpForm';
import { setUserFieldSignUpValue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.signup.email,
  password: state.user.signup.password,
  groupName: state.user.signup.groupName,
  firstname: state.user.signup.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldSignUpValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
