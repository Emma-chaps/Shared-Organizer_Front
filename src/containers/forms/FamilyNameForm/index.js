import { connect } from 'react-redux';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';
import {
  setGroupNameInputState,
  setNewGroupNameFieldValue,
  updateGroupName,
  copyGroupName,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  newGroupName: state.settings.groupNameToChange,
});

const mapDispatchToProps = (dispatch) => ({
  copyGroupName: (groupName) => dispatch(copyGroupName(groupName)),
  changeField: (value) => dispatch(setNewGroupNameFieldValue(value)),
  updateGroupName: () => dispatch(updateGroupName()),
  setGroupNameInputState: () => dispatch(setGroupNameInputState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyNameForm);
