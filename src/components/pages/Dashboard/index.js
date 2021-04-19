import React from 'react';
import Calendar from 'src/containers/Calendar';
import DashboardMenu from 'src/containers/DashboardMenu';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <Calendar />
      <Modal hideModal={true}>
        <WidgetCreationForm />
      </Modal>
    </div>
  );
};

export default Dashboard;
