import { connect } from 'react-redux';
import FamilySettings from 'src/components/pages/FamilySettings';
import { fetchFamilyData } from 'src/actions/user';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchFamilyData: () => dispatch(fetchFamilyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettings);
