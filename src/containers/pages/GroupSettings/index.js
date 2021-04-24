import { connect } from 'react-redux';
import GroupSettings from 'src/components/pages/GroupSettings';
import {
  setGroupNameInputState,
  assignMemberToOpenInputView,
  assignMemberToCloseInputView,
  hideModal,
  setIsOpenedModal,
  updateMember,
  addNewMember,
  closeAllInput,
  setUsableColors,
  cleanNewMemberFields,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.group.groupName,
  members: state.settings.group.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
  isOpenedModal: state.settings.openedModal,
});

const mapDispatchToProps = (dispatch) => ({
  setGroupNameInputState: () => dispatch(setGroupNameInputState()),
  assignMemberToOpenInputView: (id) =>
    dispatch(assignMemberToOpenInputView(id)),
  assignMemberToCloseInputView: (id) =>
    dispatch(assignMemberToCloseInputView(id)),
  hideModal: () => dispatch(hideModal()),
  setIsOpenedModal: () => dispatch(setIsOpenedModal()),
  updateMember: () => dispatch(updateMember()),
  addNewMember: () => dispatch(addNewMember()),
  closeAllInput: () => dispatch(closeAllInput()),
  setUsableColors: () => dispatch(setUsableColors()),
  cleanNewMemberFields: () => dispatch(cleanNewMemberFields()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);
