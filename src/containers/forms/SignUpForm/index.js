import { connect } from 'react-redux';
import LoginForm from 'src/components/forms/SignUpForm';
import {
  setUserFieldSignUpValue,
  submitSignUp,
  selectedIcon,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.signup.email,
  password: state.user.signup.password,
  groupName: state.user.signup.groupName,
  firstname: state.user.signup.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => dispatch(setUserFieldSignUpValue(name, value)),
  handleSignUp: () => dispatch(submitSignUp()),
  selectedIcon: (icon) => dispatch(selectedIcon(icon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
