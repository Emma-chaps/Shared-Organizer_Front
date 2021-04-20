import { connect } from 'react-redux';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';
import {
  setNewGroupNameFieldValue,
  updateGroupName,
  copyGroupName,
} from 'src/actions/user';
import { setInputState } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  newGroupName: state.user.groupNameToChange,
});

const mapDispatchToProps = (dispatch) => ({
  copyGroupName: (groupName) => dispatch(copyGroupName(groupName)),
  changeField: (value) => dispatch(setNewGroupNameFieldValue(value)),
  updateGroupName: () => dispatch(updateGroupName()),
  setInputState: () => dispatch(setInputState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyNameForm);
