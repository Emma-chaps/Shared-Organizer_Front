import { connect } from 'react-redux';
import WidgetCreationForm from 'src/components/forms/WidgetCreationForm';
import {
  setWidgetFieldValue,
  setWidgetDescriptionValue,
  assignMemberToWidget,
  submitWidgetDataCreation,
  hideWidgetCreationModal,
  removeMemberFromWidget,
  setWidgetToEdit,
  setIsSelectedMember,
  removeSelectedMember,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  widgetTitle: state.widget.widgetCreation.title,
  widgetDescription: state.widget.widgetCreation.description,
  members: state.settings.group.members,
  membersToAdd: state.widget.widgetCreation.groupMembers,
  widgetToEdit: state.widget.widgetToEdit,
  isMemberSelected: state.widget.isMemberSelected,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value) => dispatch(setWidgetFieldValue(value)),
  changeTextarea: (value) => dispatch(setWidgetDescriptionValue(value)),
  assignMember: (idMember, members) =>
    dispatch(assignMemberToWidget(idMember, members)),
  removeMember: (idMember, members) =>
    dispatch(removeMemberFromWidget(idMember, members)),
  submitWidget: () => dispatch(submitWidgetDataCreation()),
  hideWidgetCreationModal: () => dispatch(hideWidgetCreationModal()),
  setWidgetToEdit: () => dispatch(setWidgetToEdit()),
  setIsSelectedMember: (id) => dispatch(setIsSelectedMember(id)),
  removeSelectedMember: (id) => dispatch(removeSelectedMember(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetCreationForm);
