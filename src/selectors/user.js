import jwt_decode from 'jwt-decode';

export const isAdmin = (token) => {
  const decoded = jwt_decode(token);
  const role = decoded.role;
  if (role === 3) {
    return true;
  }
  return false;
};
