import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Calendar from 'src/containers/Calendar';
import DashboardMenu from 'src/containers/DashboardMenu';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { NavLink, withRouter } from 'react-router-dom';
import WidgetContainer from 'src/containers/WidgetContainer';

const Dashboard = ({
  getGroupData,
  displayCreationModal,
  showWidgetCreationModal,
  hideWidgetCreationModal,
  fetchAllWidgets,
  reinitializeWidget,
  cleanSelectedMembers,
  isAdmin,
  isEditor,
}) => {
  // const [hideWidgetCreationModal, setHideWidgetCreationModal] = useState(true);
  const handleClick = () => {
    cleanSelectedMembers();
    showWidgetCreationModal();
    reinitializeWidget();
  };

  useEffect(() => {
    getGroupData();
    fetchAllWidgets();
  }, []);
  return (
    <>
      <Header />
      <main className="calendar-widgets">
        <DashboardMenu />

        <section className="calendar-widget-container">
          <Calendar />
          <WidgetContainer />
          {(isAdmin || isEditor) && (
            <button
              type="button"
              onClick={handleClick}
              className="add-widget-btn"
            >
              +
            </button>
          )}
        </section>
      </main>
      <Modal
        showModal={displayCreationModal}
        hideModal={hideWidgetCreationModal}
      >
        <WidgetCreationForm />
      </Modal>
    </>
  );
};

Dashboard.propTypes = {
  getGroupData: PropTypes.func.isRequired,
  displayCreationModal: PropTypes.bool.isRequired,
  showWidgetCreationModal: PropTypes.func.isRequired,
  hideWidgetCreationModal: PropTypes.func.isRequired,
  fetchAllWidgets: PropTypes.func.isRequired,
  reinitializeWidget: PropTypes.func.isRequired,
  cleanSelectedMembers: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isEditor: PropTypes.bool.isRequired,
};

export default withRouter(Dashboard);
