import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Modal from 'src/components/Modal';
import FamilyNameForm from 'src/containers/forms/FamilyNameForm';
import FamilySettingsForm from 'src/containers/forms/FamilySettingsForm';
// import AddAMemberForm from 'src/containers/forms/AddAMemberForm';
import { BiPencil } from 'react-icons/bi';
import './styles.scss';
import { copyMember } from '../../../actions/settings';

const FamilySettings = ({
  fetchFamilyData,
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
  newMember,
  updateMember,
  addNewMember,
}) => {
  const button = useRef(null);

  const handleOpenMemberInputView = () => {
    const id = `id${button.current.dataset.id}`;
    console.log(id);
    assignMemberToOpenInputView(id);
  };

  const handleCloseMemberInputView = () => {
    const id = `id${button.current.dataset.id}`;
    assignMemberToCloseInputView(id);
  };

  const handleOpenAddMember = () => {
    setIsOpenedModal();
  };

  const handleSubmitUpdateMember = (event) => {
    event.preventDefault();
    updateMember();
    const id = `id${button.current.dataset.id}`;
    assignMemberToCloseInputView(id);
  };

  const handleSubmitAddNewMember = (event) => {
    event.preventDefault();
    addNewMember();
  };

  useEffect(() => {
    fetchFamilyData();
  }, []);

  return (
    <>
      <Header />
      <div className="settings">
        <h1>Group Settings</h1>
        {openedGroupNameInput ? (
          <div>
            <FamilyNameForm initialGroupName={initialGroupName} />
            <button type="button" onClick={setGroupNameInputState}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <div>{initialGroupName}</div>
            <button type="button" onClick={setGroupNameInputState}>
              <BiPencil />
            </button>
          </div>
        )}
        <hr />
        <h2>Group members</h2>
        <button type="button" onClick={handleOpenAddMember}>
          Add a new member
        </button>
        <Modal showModal={isOpenedModal} hideModal={hideModal}>
          <FamilySettingsForm
            member={newMember}
            onSubmit={handleSubmitAddNewMember}
          />
        </Modal>
        {members.map((member) => (
          <div key={member.id}>
            {openMembersInput[`id${member.id}`] ? (
              <div>
                <FamilySettingsForm
                  member={member}
                  onSubmit={handleSubmitUpdateMember}
                />
                <button
                  type="button"
                  onClick={handleCloseMemberInputView}
                  ref={button}
                  data-id={member.id}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <div>{member.firstname}</div>
                <div>{member.email}</div>
                <div>{member.role}</div>
                <div>{member.icon}</div>
                <button
                  type="button"
                  onClick={handleOpenMemberInputView}
                  ref={button}
                  data-id={member.id}
                >
                  <BiPencil />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

FamilySettings.propTypes = {
  updateMember: PropTypes.func,
  assignMemberToCloseInputView: PropTypes.func,
};
FamilySettings.defaultProps = {
  updateMember: () => {},
  assignMemberToCloseInputView: () => {},
};

export default FamilySettings;
