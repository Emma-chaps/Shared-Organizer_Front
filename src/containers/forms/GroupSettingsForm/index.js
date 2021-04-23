import { connect } from 'react-redux';
import {
  setMemberToChangeFieldValue,
  copyMember,
  setSelectedIcon,
  setSelectedRole,
} from 'src/actions/settings';
import GroupSettingsForm from 'src/components/forms/GroupSettingsForm';

const mapStateToProps = (state) => ({
  firstname: state.settings.memberToChange.firstname,
  email: state.settings.memberToChange.email,
  password: state.settings.memberToChange.password,
  role: state.settings.memberToChange.role,
  icon: state.settings.memberToChange.icon,
  colors: state.settings.colors,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  copyMember: (member) => dispatch(copyMember(member)),
  setSelectedIcon: (icon) => dispatch(setSelectedIcon(icon)),
  setSelectedRole: (role) => dispatch(setSelectedRole(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettingsForm);
