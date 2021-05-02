import { connect } from 'react-redux';
import GroupSettings from 'src/components/pages/GroupSettings';
import {
  setGroupNameInputState,
  assignMemberToOpenInputView,
  hideModal,
  setIsOpenedModal,
  updateMember,
  addNewMember,
  closeAllInput,
  setUsableColors,
  cleanNewMemberFields,
  setUsableColorsToAddMember,
  deleteMember,
  setIsOpenedAlertModal,
  hideAlertModal,
  setMemberToChangeFieldValue,
  updatePassword,
  cleanPasswordField,
  setIsOpenedMembersPasswordModal,
  closeMemberPasswordModal,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.group.groupName,
  members: state.settings.group.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
  isOpenedModal: state.settings.openedModal,
  isOpenedModalAlert: state.settings.openedAlertModal,
  password: state.settings.memberToChange.password,
  isOpenedMembersPasswordModal: state.settings.isOpenedMembersPasswordModal,
});

const mapDispatchToProps = (dispatch) => ({
  setGroupNameInputState: () => dispatch(setGroupNameInputState()),
  assignMemberToOpenInputView: (id) =>
    dispatch(assignMemberToOpenInputView(id)),
  hideModal: () => dispatch(hideModal()),
  setIsOpenedModal: () => dispatch(setIsOpenedModal()),
  updateMember: () => dispatch(updateMember()),
  addNewMember: () => dispatch(addNewMember()),
  closeAllInput: () => dispatch(closeAllInput()),
  setUsableColors: () => dispatch(setUsableColors()),
  cleanNewMemberFields: () => dispatch(cleanNewMemberFields()),
  setUsableColorsToAddMember: () => dispatch(setUsableColorsToAddMember()),
  deleteMember: (id) => dispatch(deleteMember(id)),
  setIsOpenedAlertModal: () => dispatch(setIsOpenedAlertModal()),
  hideAlertModal: () => dispatch(hideAlertModal()),
  changeField: (value, name) =>
    dispatch(setMemberToChangeFieldValue(name, value)),
  updatePassword: (id) => dispatch(updatePassword(id)),
  cleanPasswordField: () => dispatch(cleanPasswordField()),
  setIsOpenedMembersPasswordModal: (id) =>
    dispatch(setIsOpenedMembersPasswordModal(id)),
  closeMemberPasswordModal: () => dispatch(closeMemberPasswordModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);
