import { connect } from 'react-redux';
import Widget from 'src/components/WidgetContainer/Widget';
import {
  updateSelectedMember,
  cleanSelectedMembers,
  openWidgetDeleteModal,
  closeWidgetDeleteModal,
} from 'src/actions/widget';

const mapStateToProps = (state) => ({
  isOpenedDeleteWidgetModal: state.widget.isOpenedDeleteWidgetModal,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedMember: (id) => dispatch(updateSelectedMember(id)),
  cleanSelectedMembers: () => dispatch(cleanSelectedMembers()),
  openWidgetDeleteModal: (id) => dispatch(openWidgetDeleteModal(id)),
  closeWidgetDeleteModal: () => dispatch(closeWidgetDeleteModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
