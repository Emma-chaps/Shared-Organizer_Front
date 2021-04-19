import { connect } from 'react-redux';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';
import { setGroupNameFieldValue, updateGroupName } from 'src/actions/user';

const mapStateToProps = (state) => ({
  groupName: state.user.family.groupName,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value) => dispatch(setGroupNameFieldValue(value)),
  updateGroupName: () => dispatch(updateGroupName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyNameForm);
