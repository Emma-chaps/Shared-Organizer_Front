import React, { useEffect, useState } from 'react';
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
  openedInput,
  setInputState,
}) => {
  const handleChangeInputView = () => {
    setInputState(!openedInput);
    setMemberToChange();
  };

  useEffect(() => {
    fetchFamilyData();
  }, []);

  console.log(members);

  return (
    <>
      <Header />
      <div>
        <h1>Family Settings</h1>
        {openedInput ? (
          <div>
            <FamilyNameForm initialGroupName={initialGroupName} />
            <button type="submit" onClick={handleChangeInputView}>
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
        <button type="submit">Add a new member</button>
        {members.map((member) => (
          <div key={member.id}>
            {openedInput ? (
              <div>
                <FamilySettingsFrom member={member} />
                <button type="submit" onClick={handleChangeInputView}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <div>{member.firstname}</div>
                <div>{member.email}</div>
                <div>{member.role}</div>
                <div>{member.icon}</div>
                <BiPencil onClick={handleChangeInputView} />
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
