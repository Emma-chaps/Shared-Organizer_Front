import { connect } from 'react-redux';
import { setMemberToChangeFieldValue, copyMember } from 'src/actions/user';
import FamilySettingsForm from 'src/components/forms/FamilySettingsForm';

const mapStateToProps = (state) => ({
  firstname: state.user.memberToChange.firstname,
  email: state.user.memberToChange.email,
  password: state.user.memberToChange.password,
  role: state.user.memberToChange.role,
  icon: state.user.memberToChange.icon,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  copyMember: (member) => dispatch(copyMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettingsForm);
