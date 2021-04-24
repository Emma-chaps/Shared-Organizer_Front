import { connect } from 'react-redux';
import AddAMemberForm from 'src/components/forms/AddAMemberForm';
import {
  addNewMember,
  setIconToNewMember,
  setNewMemberToChangeFieldValue,
  setRoleToNewMember,
  hideModal,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  icon: state.settings.newMember.icon,
  firstname: state.settings.newMember.firstname,
  email: state.settings.newMember.email,
  password: state.settings.newMember.password,
  role: state.settings.newMember.role,
  colors: state.settings.usableColors,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMember: () => dispatch(addNewMember()),
  setIconToNewMember: (icon) => dispatch(setIconToNewMember(icon)),
  changeField: (value, name) =>
    dispatch(setNewMemberToChangeFieldValue(name, value)),
  setRoleToNewMember: (role) => dispatch(setRoleToNewMember(role)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAMemberForm);
