import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import {
  fetchFamilyData,
  setInputState,
  setMemberToChangeFieldValue,
  assignMemberToOpenInputView,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.family.groupName,
  members: state.settings.family.members,
  openedGroupNameInput: state.settings.openedInput,
  openMembersInput: state.settings.openMembersInput,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
  setMemberToChange: () => dispatch(setMemberToChangeFieldValue()),
  setInputState: () => dispatch(setInputState()),
  assignMemberToOpenInputView: (firstname) =>
    dispatch(assignMemberToOpenInputView(firstname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
