import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Modal from 'src/components/Modal';
import GroupNameForm from 'src/containers/forms/GroupNameForm';
import GroupSettingsForm from 'src/containers/forms/GroupSettingsForm';
import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { BiPencil } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';

import './styles.scss';

const GroupSettings = ({
  initialGroupName,
  members,
  openedGroupNameInput,
  setGroupNameInputState,
  openMembersInput,
  assignMemberToOpenInputView,
  assignMemberToCloseInputView,
  setIsOpenedModal,
  hideModal,
  isOpenedModal,
  updateMember,
  closeAllInput,
  cleanNewMemberFields,
  setUsableColorsToAddMember,
}) => {
  // Rerender component when set_group_data is started
  useEffect(() => {}, [members]);

  const handleOpenMemberInputView = (event) => {
    closeAllInput();
    assignMemberToOpenInputView(`id${event.currentTarget.dataset.id}`);
  };

  const handleCloseMemberInputView = (event) => {
    const id = `id${event.currentTarget.dataset.id}`;
    assignMemberToCloseInputView(id);
  };

  const handleOpenAddMember = () => {
    cleanNewMemberFields();
    setUsableColorsToAddMember();
    setIsOpenedModal();
  };

  const handleSubmitUpdateMember = (event) => {
    event.preventDefault();
    updateMember();
  };

  return (
    <>
      <Header />
      <div className="settings">
        <h1>Group Settings</h1>
        {openedGroupNameInput ? (
          <>
            <GroupNameForm initialGroupName={initialGroupName} />
            <button type="button" onClick={setGroupNameInputState}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={setGroupNameInputState}>
              <BiPencil /> Change group name
            </button>
          </>
        )}
        <hr />
        <h2>Group members</h2>
        {members && (
          <div className="flex-row">
            <div className="data icon">Icon</div>
            <div className="data firstname">Firstname</div>
            <div className="data email">Email</div>
            <div className="data role">Role</div>
            <div className="data edit">Edit</div>
          </div>
        )}
        {members.map((member) => (
          <div key={member.id} className="flex-row">
            {openMembersInput[`id${member.id}`] ? (
              <div>
                <GroupSettingsForm
                  member={member}
                  onSubmit={handleSubmitUpdateMember}
                />
                <button
                  type="button"
                  onClick={handleCloseMemberInputView}
                  data-id={member.id}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="data icon">
                  <FaUserAlt className={`icon-container--${member.icon}`} />
                </div>
                <div className="data firstname">{member.firstname}</div>
                <div className="data email">{member.email}</div>
                <div className="data role">{member.role}</div>
                <button
                  type="button"
                  onClick={handleOpenMemberInputView}
                  data-id={member.id}
                  className="data edit"
                >
                  <BiPencil />
                </button>
              </>
            )}
          </div>
        ))}
        <div>
          <button type="button" onClick={handleOpenAddMember}>
            Add a new member
          </button>
          <Modal showModal={isOpenedModal} hideModal={hideModal}>
            <AddAMemberForm />
          </Modal>
        </div>
      </div>
    </>
  );
};

GroupSettings.propTypes = {
  updateMember: PropTypes.func,
  assignMemberToCloseInputView: PropTypes.func,
};
GroupSettings.defaultProps = {
  updateMember: () => {},
  assignMemberToCloseInputView: () => {},
};

export default withRouter(GroupSettings);
