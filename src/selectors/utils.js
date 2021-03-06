import jwt_decode from 'jwt-decode';

export const isAdmin = (token) => {
  const decoded = jwt_decode(token);
  const { role } = decoded;
  if (role === 3) {
    return true;
  }
  return false;
};

export const isEditor = (token) => {
  const decoded = jwt_decode(token);
  const { role } = decoded;
  if (role === 2) {
    return true;
  }
  return false;
};
export const deleteColor = (array, value) => {
  const newArray = array.filter((initialValue) => initialValue.name !== value);
  return newArray;
};

export const AddColor = (array, value) => {
  const newArray = array.push(value);
  return newArray;
};

export const updateColors = (
  members = [],
  colors = [],
  memberToChangeColor = ''
) => {
  let newColors = colors;
  members.forEach((member) => {
    if (member.color !== memberToChangeColor) {
      newColors = newColors.filter((color) => color.name !== member.color);
    }
  });
  return newColors;
};

export const closeInput = (members) => {
  const newObj = {};
  members.forEach((member) => {
    newObj[`id${member.id}`] = false;
  });
  return newObj;
};
