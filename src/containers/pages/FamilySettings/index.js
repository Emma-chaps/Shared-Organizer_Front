import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import {
  fetchFamilyData,
  setGroupNameInputState,
  assignMemberToOpenInputView,
  assignMemberToCloseInputView,
  hideModal,
  setIsOpenedModal,
  updateMember,
  addNewMember,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.family.groupName,
  members: state.settings.family.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
  isOpenedModal: state.settings.openedModal,
  newMember: state.settings.newMember,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
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

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
