import { connect } from 'react-redux';
import InfoContainer from 'src/components/InfoContainer';

const mapStateToProps = (state) => ({
  event: state.calendar.dayInfos.event,
  birth: state.calendar.dayInfos.birth,
  death: state.calendar.dayInfos.death,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
