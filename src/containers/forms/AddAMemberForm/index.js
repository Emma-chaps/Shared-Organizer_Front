import { connect } from 'react-redux';
import AddAMemberForm from 'src/components/forms/AddAMemberForm';
import { addNewMember } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  colors: state.settings.usableColors,
  userError: state.settings.newMember.userError,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMember: (data) => dispatch(addNewMember(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAMemberForm);
