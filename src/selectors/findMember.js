// eslint-disable-next-line import/prefer-default-export
export const findMember = (id = null, memberArray = []) => {
  const searchedMember = memberArray.find((member) => member.id === Number(id));
  return searchedMember;
};

export const removeGivenMember = (id = null, memberArray = []) => {
  const cleanMembers = memberArray.filter((member) => member.id !== Number(id));
  return cleanMembers;
};

export const findMemberbyFirstname = (firstName = null, memberArray = []) => {
  const searchedMember = memberArray.find(
    (member) => member.firstname === firstName,
  );
  return searchedMember;
};
