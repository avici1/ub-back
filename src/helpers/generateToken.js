import jwt from 'jsonwebtoken';

const generateToken = (username, password) => {
  const token = jwt.sign({
    username, password,
  }, process.env.JWT_KEY);
  return token;
};

export default generateToken;
