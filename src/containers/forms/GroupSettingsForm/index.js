import { connect } from 'react-redux';
import {
  setMemberToChangeFieldValue,
  setSelectedColor,
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
  color: state.settings.memberToChange.color,
  colors: state.settings.usableColors,
  userError: state.settings.memberToChange.userError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  setSelectedColor: (color) => dispatch(setSelectedColor(color)),
  setSelectedRole: (role) => dispatch(setSelectedRole(role)),
  copyMember: (member) => dispatch(copyMember(member)),
  setUsableColors: () => dispatch(setUsableColors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettingsForm);
