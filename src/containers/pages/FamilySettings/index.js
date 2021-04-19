import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import { fetchFamilyData, setMemberToChangeFieldValue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  members: state.user.family.members,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
  setMemberToChange: () => dispatch(setMemberToChangeFieldValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
