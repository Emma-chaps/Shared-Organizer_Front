import React from 'react';
import Calendar from 'src/containers/Calendar';
import DashboardMenu from 'src/containers/DashboardMenu';
import Modal from 'src/components/Modal';
const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <Calendar />
    </div>
  );
};

export default Dashboard;
