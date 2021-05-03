const filterUniqueMembers = (widgets) => {
  const allMembersArray = widgets.map((widget) => widget.members);
  const allMembers = [];
  allMembersArray.forEach((element) => {
    allMembers.push(...element);
  });
  const allMembersIds = allMembers.map((member) => member.id);
  const allMembersUniqueIds = new Set(allMembersIds);
  const uniqueMembers = [...allMembersUniqueIds].map((id) =>
    allMembers.find((member) => id === member.id),
  );
  return uniqueMembers;
};

export default filterUniqueMembers;
