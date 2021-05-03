import { connect } from 'react-redux';
import Widget from 'src/components/WidgetContainer/Widget';
import { updateSelectedMember, cleanSelectedMembers } from 'src/actions/widget';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedMember: (id) => dispatch(updateSelectedMember(id)),
  cleanSelectedMembers: () => dispatch(cleanSelectedMembers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
