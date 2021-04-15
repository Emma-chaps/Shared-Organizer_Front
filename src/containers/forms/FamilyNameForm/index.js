import { connect } from 'react-redux';
import { setUserFieldSignUpValue } from 'src/actions/user';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';

const mapStateToProps = (state) => ({
  groupName: state.user.signup.groupName,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => dispatch(setUserFieldSignUpValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyNameForm);
