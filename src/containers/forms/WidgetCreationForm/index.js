import { connect } from 'react-redux';
import WidgetCreationForm from 'src/components/forms/WidgetCreationForm';
import { setWidgetFieldValue } from 'src/actions/widget';

const mapStateToProps = (state) => ({
  widgetTitle: state.widget.widgetCreation.title,
  widgetDescription: state.widget.widgetCreation.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setWidgetFieldValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetCreationForm);
