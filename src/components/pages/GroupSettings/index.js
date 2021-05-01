import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'src/components/Modal';
import Field from 'src/components/forms/Field';
import GroupNameForm from 'src/containers/forms/GroupNameForm';
import GroupSettingsForm from 'src/containers/forms/GroupSettingsForm';
import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdLock, IoMdCreate, IoMdTrash } from 'react-icons/io';

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
      <div className="settings-container">
        <h1 className="settings-container__title">Group Settings</h1>
        <div className="settings-container__group-name">
          <h2 className="settings-container__group-name__title">Group name</h2>
          {openedGroupNameInput ? (
            <div className="settings-container__group-name__form">
              <GroupNameForm initialGroupName={initialGroupName} />
              <button
                type="button"
                onClick={setGroupNameInputState}
                className="btn icon-btn"
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          ) : (
            <div className="settings-container__group-name__content">
              <div className="name">{initialGroupName}</div>
              <button
                type="button"
                onClick={setGroupNameInputState}
                className="btn icon-btn"
              >
                <IoMdCreate />
              </button>
            </div>
          )}
        </div>
        <div className="settings-container__group-members">
          <h2 className="settings-container__group-members__title">
            Group members
          </h2>
          {members?.map((member) => (
            <div
              key={member.id}
              className="settings-container__group-members__member"
            >
              {openMembersInput[`id${member.id}`] ? (
                <>
                  <GroupSettingsForm
                    member={member}
                    onSubmit={handleSubmitUpdateMember}
                    onClose={closeAllInput}
                  />
                </>
              ) : (
                <>
                  <div className={`member-icon icon-container--${member.icon}`}>
                    {member.firstname[0]}
                  </div>
                  <div className="member-data">{member.firstname}</div>
                  <div className="member-data">{member.email}</div>
                  {member.role === 3 && (
                    <div className="member-data">Administrator</div>
                  )}
                  {member.role === 2 && (
                    <div className="member-data">Editor</div>
                  )}
                  {member.role === 1 && (
                    <div className="member-data">Visitor</div>
                  )}
                  <div className="member-icons">
                    <button
                      type="button"
                      onClick={handleOpenMemberInputView}
                      data-id={member.id}
                      className="icon-btn"
                    >
                      <IoMdCreate />
                    </button>
                    <button
                      type="button"
                      onClick={openUpdateMemberModal}
                      data-id={member.id}
                      className="icon-btn"
                    >
                      <IoMdLock />
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
                    {member.role === 3 ? (
                      <></>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={setIsOpenedAlertModal}
                          data-id={member.id}
                          className="icon-btn"
                        >
                          <IoMdTrash />
                        </button>
                        <Modal
                          showModal={isOpenedModalAlert}
                          hideModal={hideAlertModal}
                        >
                          <span>
                            Do you want to delete {member.firstname} ?
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
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div>
          <button
            type="button"
            onClick={handleOpenAddMember}
            className="classic-btn"
          >
            Add member
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
