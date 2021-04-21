import { connect } from 'react-redux';
import GroupNameForm from 'src/components/forms/GroupNameForm';
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupNameForm);
