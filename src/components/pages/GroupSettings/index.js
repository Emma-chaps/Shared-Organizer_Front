import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'src/components/Modal';
import Field from 'src/components/forms/Field';
import GroupNameForm from 'src/containers/forms/GroupNameForm';
import GroupSettingsForm from 'src/containers/forms/GroupSettingsForm';
import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { FiEdit2, FiTrash2, FiUserPlus } from 'react-icons/fi';
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
  changeField,
  updatePassword,
  password,
  cleanPasswordField,
}) => {
  // Rerender component when set_group_data is started
  useEffect(() => {}, [members]);
  const [
    isOpenedUpdatePasswordModal,
    setIsOpenedUpdatePasswordModal,
  ] = useState(false);

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

  const openUpdateMemberModal = () => {
    cleanPasswordField();
    setIsOpenedUpdatePasswordModal(true);
  };

  const hideUpdatePasswordModal = () => {
    setIsOpenedUpdatePasswordModal(false);
  };

  const handleUpdatePassword = (event) => {
    updatePassword(event.currentTarget.dataset.id);
    setIsOpenedUpdatePasswordModal(false);
  };

  return (
    <>
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
          <div>
            <h2>Group name</h2>
            <div>{initialGroupName}</div>
            <button type="button" onClick={setGroupNameInputState}>
              <FiEdit2 /> Edit group name
            </button>
          </div>
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
                {member.role === 3 && <div className="data role">Admin</div>}
                {member.role === 2 && <div className="data role">Editor</div>}
                {member.role === 1 && <div className="data role">Visitor</div>}
                <button
                  type="button"
                  onClick={handleOpenMemberInputView}
                  data-id={member.id}
                  className="data edit"
                >
                  <FiEdit2 />
                </button>
                <>
                  <button
                    type="button"
                    onClick={openUpdateMemberModal}
                    data-id={member.id}
                    className="data edit"
                  >
                    Edit password
                  </button>
                  <Modal
                    showModal={isOpenedUpdatePasswordModal}
                    hideModal={hideUpdatePasswordModal}
                  >
                    <form>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={changeField}
                      />
                      <button
                        type="button"
                        onClick={handleUpdatePassword}
                        data-id={member.id}
                      >
                        Save
                      </button>
                    </form>
                  </Modal>
                </>
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
                      <FiTrash2 />
                    </button>
                    <Modal
                      showModal={isOpenedModalAlert}
                      hideModal={hideAlertModal}
                    >
                      <span>Do you want to delete {member.firstname} ?</span>
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
            <FiUserPlus /> Add a new member
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
  // initialGroupName,
  // members,
  // openedGroupNameInput,
  // setGroupNameInputState,
  // openMembersInput,
  // assignMemberToOpenInputView,
  // setIsOpenedModal,
  // hideModal,
  // isOpenedModal,
  // updateMember,
  // closeAllInput,
  // cleanNewMemberFields,
  // setUsableColorsToAddMember,
  // deleteMember,
  // setIsOpenedAlertModal,
  // isOpenedModalAlert,
  // hideAlertModal,
  // changeField,
  // updatePassword,
  // password,
  // cleanPasswordField,
};
GroupSettings.defaultProps = {
  updateMember: () => {},
};

export default withRouter(GroupSettings);
