import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Modal from 'src/components/Modal';
import GroupNameForm from 'src/containers/forms/GroupNameForm';
import GroupSettingsForm from 'src/containers/forms/GroupSettingsForm';
import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { RiUserAddLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

import './styles.scss';

const GroupSettings = ({
  initialGroupName,
  members,
  openedGroupNameInput,
  setGroupNameInputState,
  openMembersInput,
  assignMemberToOpenInputView,
  setIsOpenedModal,
  hideModal,
  isOpenedModal,
  updateMember,
  closeAllInput,
  cleanNewMemberFields,
  setUsableColorsToAddMember,
  deleteMember,
  setIsOpenedAlertModal,
  isOpenedModalAlert,
  hideAlertModal,
}) => {
  // Rerender component when set_group_data is started
  useEffect(() => {}, [members]);

  const handleOpenMemberInputView = (event) => {
    closeAllInput();
    assignMemberToOpenInputView(`id${event.currentTarget.dataset.id}`);
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

  const handleDeleteMember = (event) => {
    deleteMember(event.currentTarget.dataset.id);
    hideAlertModal();
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
              <BiPencil /> Update group name
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
        {members?.map((member) => (
          <div key={member.id} className="flex-row">
            {openMembersInput[`id${member.id}`] ? (
              <div>
                <GroupSettingsForm
                  member={member}
                  onSubmit={handleSubmitUpdateMember}
                  onClose={closeAllInput}
                />
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
                {member.role === 3 ? (
                  <></>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={setIsOpenedAlertModal}
                      data-id={member.id}
                      className="data edit"
                    >
                      <BiTrash />
                    </button>
                    <Modal
                      showModal={isOpenedModalAlert}
                      hideModal={hideAlertModal}
                    >
                      <span>
                        Are you sure you want to delete {member.firstname} ?
                      </span>
                      <button type="button" onClick={hideAlertModal}>
                        No
                      </button>
                      <button
                        type="button"
                        onClick={handleDeleteMember}
                        data-id={member.id}
                      >
                        Yes
                      </button>
                    </Modal>
                  </>
                )}
              </>
            )}
          </div>
        ))}
        <div>
          <button type="button" onClick={handleOpenAddMember}>
            <RiUserAddLine /> Add a new member
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
};
GroupSettings.defaultProps = {
  updateMember: () => {},
};

export default withRouter(GroupSettings);
