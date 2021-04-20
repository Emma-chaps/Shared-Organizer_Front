import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import { fetchFamilyData, setMemberToChangeFieldValue } from 'src/actions/user';
import { setInputState } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.user.family.groupName,
  members: state.user.family.members,
  openedInput: state.settings.openedInput,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
  setMemberToChange: () => dispatch(setMemberToChangeFieldValue()),
  setInputState: () => dispatch(setInputState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
