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
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.group.groupName,
  members: state.settings.group.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
  isOpenedModal: state.settings.openedModal,
  isOpenedModalAlert: state.settings.openedAlertModal,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);
