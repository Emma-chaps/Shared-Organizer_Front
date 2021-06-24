import { connect } from 'react-redux';
import AddAMemberForm from 'src/components/forms/AddAMemberForm';
import {
  addNewMember,
  setColorToNewMember,
  setNewMemberToChangeFieldValue,
  setRoleToNewMember,
  hideModal,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  color: state.settings.newMember.color,
  firstname: state.settings.newMember.firstname,
  email: state.settings.newMember.email,
  password: state.settings.newMember.password,
  role: state.settings.newMember.role,
  colors: state.settings.usableColors,
  userError: state.settings.newMember.userError,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMember: () => dispatch(addNewMember()),
  setColorToNewMember: (color) => dispatch(setColorToNewMember(color)),
  changeField: (value, name) =>
    dispatch(setNewMemberToChangeFieldValue(name, value)),
  setRoleToNewMember: (role) => dispatch(setRoleToNewMember(role)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAMemberForm);
