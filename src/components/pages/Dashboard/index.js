import React, { useEffect } from 'react';
import Header from 'src/containers/Header';
import Calendar from 'src/containers/Calendar';
import DashboardMenu from 'src/containers/DashboardMenu';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { NavLink, withRouter } from 'react-router-dom';
import WidgetContainer from 'src/containers/WidgetContainer';
import './styles.scss';

const Dashboard = ({
  getGroupData,
  displayCreationModal,
  showWidgetCreationModal,
  hideWidgetCreationModal,
  fetchAllWidgets,
  reinitializeWidget,
}) => {
  // const [hideWidgetCreationModal, setHideWidgetCreationModal] = useState(true);

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

export default withRouter(Dashboard);
