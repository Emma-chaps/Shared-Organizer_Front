import { connect } from 'react-redux';
import WidgetCreationForm from 'src/components/forms/WidgetCreationForm';
import {
  setWidgetFieldValue,
  setWidgetDescriptionValue,
  assignMemberToWidget,
  submitWidgetDataCreation,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  widgetTitle: state.widget.widgetCreation.title,
  widgetDescription: state.widget.widgetCreation.description,
  date: state.widget.widgetCreation.date,
  range: state.widget.widgetCreation.range,
  members: state.user.family.members,
  membersToAdd: state.widget.widgetCreation.familyMembers,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setWidgetFieldValue(name, value)),
  changeTextarea: (value) => dispatch(setWidgetDescriptionValue(value)),
  assignMember: (idMember, members) =>
    dispatch(assignMemberToWidget(idMember, members)),
  submitWidget: () => dispatch(submitWidgetDataCreation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetCreationForm);
