import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import {
  fetchFamilyData,
  setGroupNameInputState,
  assignMemberToOpenInputView,
  assignMemberToCloseInputView,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.family.groupName,
  members: state.settings.family.members,
  openedGroupNameInput: state.settings.openedGroupNameInput,
  openMembersInput: state.settings.openMembersInput,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
  setGroupNameInputState: () => dispatch(setGroupNameInputState()),
  assignMemberToOpenInputView: (firstname) =>
    dispatch(assignMemberToOpenInputView(firstname)),
  assignMemberToCloseInputView: (firstname) =>
    dispatch(assignMemberToCloseInputView(firstname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
