import React from 'react';
import Calendar from 'src/containers/pages/Dashboard/Calendar';
import Menu from 'src/containers/pages/Dashboard/Menu';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <Calendar />
      <Modal hideModal={false}>
        <WidgetCreationForm />
      </Modal>
    </div>
  );
};

export default Dashboard;
