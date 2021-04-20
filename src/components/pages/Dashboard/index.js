import React, { useState, useEffect } from 'react';
import Calendar from 'src/containers/Calendar';
import DashboardMenu from 'src/containers/DashboardMenu';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { NavLink } from 'react-router-dom';

const Dashboard = ({
  getGroupData,
  displayCreationModal,
  showWidgetCreationModal,
  hideWidgetCreationModal,
}) => {
  // const [hideWidgetCreationModal, setHideWidgetCreationModal] = useState(true);
  const handleClick = () => {
    showWidgetCreationModal();
  };

  useEffect(() => {
    getGroupData();
  }, []);
  return (
    <div>
      <DashboardMenu />
      <Calendar />
      <Modal
        showModal={displayCreationModal}
        hideModal={hideWidgetCreationModal}
      >
        <WidgetCreationForm />
      </Modal>
      <button type="button">
        <NavLink to="/family-settings" exact>
          Family Settings
        </NavLink>
      </button>
      <button type="button" onClick={handleClick}>
        Add a Widget
      </button>
    </div>
  );
};

export default Dashboard;
