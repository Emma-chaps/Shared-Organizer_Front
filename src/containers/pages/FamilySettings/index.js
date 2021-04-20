import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import {
  fetchFamilyData,
  setInputState,
  setMemberToChangeFieldValue,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  initialGroupName: state.settings.family.groupName,
  members: state.settings.family.members,
  openedInput: state.settings.openedInput,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
  setMemberToChange: () => dispatch(setMemberToChangeFieldValue()),
  setInputState: () => dispatch(setInputState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
