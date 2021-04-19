import { connect } from 'react-redux';
import { setUserFieldSignUpValue } from 'src/actions/user';
import FamilySettingsForm from 'src/components/forms/FamilySettingsForm';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => dispatch(setUserFieldSignUpValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilySettingsForm);
