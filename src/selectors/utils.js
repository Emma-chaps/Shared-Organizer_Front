import jwt_decode from 'jwt-decode';

export const isAdmin = (token) => {
  const decoded = jwt_decode(token);
  const { role } = decoded;
  if (role === 3) {
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

export const updateColors = (members, colors, memberToChange) => {
  members.forEach((member) => {
    if (member.icon !== memberToChange.icon) {
      colors = colors.filter((color) => color.name !== member.icon);
    }
  });
  return colors;
};
