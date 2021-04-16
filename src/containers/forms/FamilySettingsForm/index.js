import { connect } from 'react-redux';
import { setUserFieldSignUpValue } from 'src/actions/user';
import FamilySettingsForm from 'src/components/forms/FamilySettingsForm';

const mapStateToProps = (state) => ({
  firstname: state.user.signup.firstname,
  email: state.user.signup.email,
  password: state.user.signup.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => dispatch(setUserFieldSignUpValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettingsForm);
