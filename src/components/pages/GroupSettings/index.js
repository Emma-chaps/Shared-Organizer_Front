import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'src/components/Modal';
import FieldPassword from 'src/components/forms/FieldPassword';
import GroupNameForm from 'src/containers/forms/GroupNameForm';
import GroupSettingsForm from 'src/containers/forms/GroupSettingsForm';
import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdLock, IoMdCreate, IoMdTrash } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

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
  changeField,
  updatePassword,
  password,
  cleanPasswordField,
  isOpenedMemberPasswordModal,
  setIsOpenedMemberPasswordModal,
  closeMemberPasswordModal,
  isOpenedMemberDeleteModal,
  setIsOpenedMemberDeleteModal,
  closeMemberDeleteModal,
}) => {
  // Rerender component when set_group_data is started
  useEffect(() => {}, [members]);

  const handleOpenMemberInputView = (event) => {
    closeAllInput();
    assignMemberToOpenInputView(event.currentTarget.dataset.id);
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

  const openUpdateMemberModal = (event) => {
    closeMemberPasswordModal();
    const { id } = event.currentTarget.dataset;
    setIsOpenedMemberPasswordModal(id);
    cleanPasswordField();
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault();
    updatePassword(event.currentTarget.dataset.id);
    closeMemberPasswordModal();
  };

  const handleOpenDeleteMemberModal = (event) => {
    closeMemberDeleteModal();
    const { id } = event.currentTarget.dataset;
    setIsOpenedMemberDeleteModal(id);
  };

  const handleDeleteMember = (event) => {
    deleteMember(event.currentTarget.dataset.id);
    closeMemberDeleteModal();
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
              key={member?.id}
              className="settings-container__group-members__member"
            >
              {openMembersInput[member?.id] ? (
                <GroupSettingsForm
                  member={member}
                  onSubmit={handleSubmitUpdateMember}
                  onClose={closeAllInput}
                />
              ) : (
                <>
                  <div
                    className={`member-icon color-container--${member?.color}`}
                  >
                    {member?.firstname[0]}
                  </div>
                  <div className="member-data">{member?.firstname}</div>
                  <div className="member-data">{member?.email}</div>
                  {member?.role === 3 && (
                    <div className="member-data">Administrator</div>
                  )}
                  {member?.role === 2 && (
                    <div className="member-data">Editor</div>
                  )}
                  {member?.role === 1 && (
                    <div className="member-data">Visitor</div>
                  )}
                  <div className="member-icons">
                    <button
                      type="button"
                      onClick={handleOpenMemberInputView}
                      data-id={member?.id}
                      className="icon-btn"
                    >
                      <IoMdCreate />
                    </button>
                    <div className="positioned-parent">
                      <button
                        type="button"
                        onClick={openUpdateMemberModal}
                        data-id={member?.id}
                        className="icon-btn"
                      >
                        <IoMdLock />
                      </button>
                      {isOpenedMemberPasswordModal[member?.id] ? (
                        <div
                          className="container-password-confirm"
                          id="triangle-up"
                        >
                          <h4 className="container-password-confirm__subtitle">
                            Update password ?
                          </h4>
                          <MdClose
                            className="close"
                            onClick={closeMemberPasswordModal}
                          />
                          <form
                            data-id={member?.id}
                            onSubmit={handleUpdatePassword}
                            className="container-password-confirm__form"
                          >
                            <FieldPassword
                              className="container-password-confirm__form__input positioned-parent"
                              name="password"
                              value={password}
                              onChange={changeField}
                              required
                            />
                            <button
                              type="submit"
                              className="classic-btn container-password-confirm__form__btn"
                            >
                              Update
                            </button>
                          </form>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    {member?.role === 3 ? (
                      <></>
                    ) : (
                      <div className="positioned-parent">
                        <button
                          type="button"
                          onClick={handleOpenDeleteMemberModal}
                          data-id={member?.id}
                          className="icon-btn"
                        >
                          <IoMdTrash />
                        </button>
                        {isOpenedMemberDeleteModal[member?.id] ? (
                          <div className="container-delete-confirm">
                            <h4 className="container-delete-confirm__subtitle">
                              Are you sure you want to delete this member ?
                            </h4>
                            <MdClose
                              className="close"
                              onClick={closeMemberDeleteModal}
                            />
                            <button
                              type="button"
                              onClick={handleDeleteMember}
                              data-id={member?.id}
                              className="classic-btn container-delete-confirm__btn"
                            >
                              delete
                            </button>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleOpenAddMember}
          className="classic-btn settings-container__btn"
        >
          Add member
        </button>
        <Modal showModal={isOpenedModal} hideModal={hideModal}>
          <AddAMemberForm />
        </Modal>
      </div>
    </>
  );
};

GroupSettings.propTypes = {
  initialGroupName: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
  openedGroupNameInput: PropTypes.bool.isRequired,
  setGroupNameInputState: PropTypes.func.isRequired,
  openMembersInput: PropTypes.object.isRequired,
  assignMemberToOpenInputView: PropTypes.func.isRequired,
  setIsOpenedModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
  isOpenedModal: PropTypes.bool.isRequired,
  updateMember: PropTypes.func.isRequired,
  closeAllInput: PropTypes.func.isRequired,
  cleanNewMemberFields: PropTypes.func.isRequired,
  setUsableColorsToAddMember: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  cleanPasswordField: PropTypes.func.isRequired,
  isOpenedMemberPasswordModal: PropTypes.object.isRequired,
  setIsOpenedMemberPasswordModal: PropTypes.func.isRequired,
  closeMemberPasswordModal: PropTypes.func.isRequired,
  isOpenedMemberDeleteModal: PropTypes.object.isRequired,
  setIsOpenedMemberDeleteModal: PropTypes.func.isRequired,
  closeMemberDeleteModal: PropTypes.func.isRequired,
};

GroupSettings.defaultProps = {
  hideModal: () => {},
};

export default withRouter(GroupSettings);
