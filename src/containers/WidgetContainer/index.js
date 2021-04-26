import { connect } from 'react-redux';
import WidgetContainer from 'src/components/WidgetContainer';

const mapStateToProps = (state) => ({
  widgets: state.widget.dashboardWidgets,
  dailyWidgets: state.widget.dailyWidgets,
  weeklyWidgets: state.widget.weeklyWidgets,
  monthlyWidgets: state.widget.monthlyWidgets,
  range: state.calendar.range,
  selectedDateValue: state.calendar.selectedDateValue,
  dashboardWidgets: state.widget.dashboardWidgets,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
