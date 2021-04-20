import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import FamilyNameForm from 'src/containers/forms/FamilyNameForm';
import FamilySettingsFrom from 'src/containers/forms/FamilySettingsForm';
import { BiPencil } from 'react-icons/bi';

const FamilySettings = ({
  fetchFamilyData,
  initialGroupName,
  members,
  setMemberToChange,
  openedGroupNameInput,
  setInputState,
  openMembersInput,
  assignMemberToOpenInputView,
}) => {
  const value = useRef(null);

  const handleOpenMemberInputView = () => {
    assignMemberToOpenInputView(value.current.dataset.firstname);
    console.log('ici', value.current.dataset.firstname);
  };

  const handleChangeInputView = (event) => {};

  useEffect(() => {
    fetchFamilyData();
  }, []);

  console.log(members);

  return (
    <>
      <Header />
      <div>
        <h1>Family Settings</h1>
        {openedGroupNameInput ? (
          <div>
            <FamilyNameForm initialGroupName={initialGroupName} />
            <button type="button" onClick={handleChangeInputView}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <div>{initialGroupName}</div>
            <BiPencil onClick={handleChangeInputView} />
          </div>
        )}
        <hr />
        <h2>Member of family</h2>
        <button type="button">Add a new member</button>
        {members.map((member) => (
          <div key={member.id}>
            {openMembersInput[member.firstname] ? (
              <div>
                <FamilySettingsFrom member={member} />
                <button type="button" onClick={handleCloseMemberInputView}>
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
                  ref={value}
                  data-firstname={member.firstname}
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

FamilySettings.propTypes = {};

export default FamilySettings;
