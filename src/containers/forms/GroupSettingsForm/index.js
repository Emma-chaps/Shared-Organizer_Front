import { connect } from 'react-redux';
import {
  setMemberToChangeFieldValue,
  setSelectedIcon,
  setSelectedRole,
  copyMember,
  setUsableColors,
} from 'src/actions/settings';
import GroupSettingsForm from 'src/components/forms/GroupSettingsForm';

const mapStateToProps = (state) => ({
  firstname: state.settings.memberToChange.firstname,
  email: state.settings.memberToChange.email,
  password: state.settings.memberToChange.password,
  role: state.settings.memberToChange.role,
  color: state.settings.memberToChange.icon,
  colors: state.settings.usableColors,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  setSelectedIcon: (icon) => dispatch(setSelectedIcon(icon)),
  setSelectedRole: (role) => dispatch(setSelectedRole(role)),
  copyMember: (member) => dispatch(copyMember(member)),
  setUsableColors: () => dispatch(setUsableColors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettingsForm);
