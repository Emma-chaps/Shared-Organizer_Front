import jwt_decode from 'jwt-decode';

export const isAdmin = (token) => {
  const decoded = jwt_decode(token);
  const { role } = decoded;
  if (role === 3) {
    return true;
  }
  return false;
};

export const deleteColors = (array, value) => {
  const newArray = array.filter((initialValue) => initialValue !== value);
  return newArray;
};
