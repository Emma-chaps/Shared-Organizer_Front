import React, { useState, useEffect } from 'react';
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
  const handleClick = () => {
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
      <DashboardMenu />
      <main className="calendar-widgets">
        <Calendar />
        <WidgetContainer />
      </main>
      <Modal
        showModal={displayCreationModal}
        hideModal={hideWidgetCreationModal}
      >
        <WidgetCreationForm />
      </Modal>
      <button type="button">
        <NavLink to="/group-settings" exact>
          Settings
        </NavLink>
      </button>
      <button type="button" onClick={handleClick}>
        Add a Widget
      </button>
    </>
  );
};

export default withRouter(Dashboard);
