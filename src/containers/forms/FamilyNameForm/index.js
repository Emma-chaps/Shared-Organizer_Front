import { connect } from 'react-redux';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';
import { setUserFieldSignUpValue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  groupName: state.user.signup.groupName,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldSignUpValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyNameForm);
