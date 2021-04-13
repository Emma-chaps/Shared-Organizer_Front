import { connect } from 'react-redux';
import LoginForm from 'src/components/forms/SignUpForm';
import { setUserFieldSignUpValue, submitSignUp } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.signup.email,
  password: state.user.signup.password,
  groupName: state.user.signup.groupName,
  firstname: state.user.signup.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldSignUpValue(name, value)),
  handleSignUp: () => dispatch(submitSignUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
