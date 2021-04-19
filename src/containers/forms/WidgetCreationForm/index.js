import { connect } from 'react-redux';
import WidgetCreationForm from 'src/components/forms/WidgetCreationForm';
import {
  setWidgetFieldValue,
  setWidgetDescriptionValue,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  widgetTitle: state.widget.widgetCreation.title,
  widgetDescription: state.widget.widgetCreation.description,
  date: state.widget.widgetCreation.date,
  range: state.widget.widgetCreation.range,
  members: state.user.family.members,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setWidgetFieldValue(name, value)),
  changeTextarea: (value) => dispatch(setWidgetDescriptionValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetCreationForm);
