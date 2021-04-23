import { connect } from 'react-redux';
import GroupSettings from 'src/components/pages/GroupSettings';
import {
  fetchGroupData,
  setGroupNameInputState,
  assignMemberToOpenInputView,
  assignMemberToCloseInputView,
  hideModal,
  setIsOpenedModal,
  updateMember,
  addNewMember,
  cleanMemberToChangeField,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.group.groupName,
  members: state.settings.group.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
  isOpenedModal: state.settings.openedModal,
  newMember: state.settings.newMember,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroupData: () => dispatch(fetchGroupData()),
  setGroupNameInputState: () => dispatch(setGroupNameInputState()),
  assignMemberToOpenInputView: (id) =>
    dispatch(assignMemberToOpenInputView(id)),
  assignMemberToCloseInputView: (id) =>
    dispatch(assignMemberToCloseInputView(id)),
  hideModal: () => dispatch(hideModal()),
  setIsOpenedModal: () => dispatch(setIsOpenedModal()),
  updateMember: () => dispatch(updateMember()),
  addNewMember: () => dispatch(addNewMember()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);
