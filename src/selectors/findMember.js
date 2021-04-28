// eslint-disable-next-line import/prefer-default-export
export const findMember = (id = null, memberArray = []) => {
  const searchedMember = memberArray.find((member) => member.id === Number(id));
  return searchedMember;
};

export const removeGivenMember = (id = null, memberArray = []) => {
  console.log('memberArray:', memberArray);
  console.log('id:', id);
  const cleanMembers = memberArray.filter((member) => member.id !== Number(id));
  console.log('cleanMembers:', cleanMembers);
  return cleanMembers;
};
