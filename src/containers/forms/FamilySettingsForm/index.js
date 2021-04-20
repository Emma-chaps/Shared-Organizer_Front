import { connect } from 'react-redux';
import { setMemberToChangeFieldValue, copyMember } from 'src/actions/settings';
import FamilySettingsForm from 'src/components/forms/FamilySettingsForm';

const mapStateToProps = (state) => ({
  firstname: state.settings.memberToChange.firstname,
  email: state.settings.memberToChange.email,
  password: state.settings.memberToChange.password,
  role: state.settings.memberToChange.role,
  icon: state.settings.memberToChange.icon,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  copyMember: (member) => dispatch(copyMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettingsForm);
