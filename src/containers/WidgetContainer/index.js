import { connect } from 'react-redux';
import WidgetContainer from 'src/components/WidgetContainer';

const mapStateToProps = (state) => ({
  widgets: state.widget.dashboardWidgets,
  range: state.calendar.range,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
