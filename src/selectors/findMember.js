// eslint-disable-next-line import/prefer-default-export
export const findMember = (id = null, memberArray = []) => {
  const searchedMember = memberArray.find((member) => member.id === Number(id));
  return searchedMember;
};
