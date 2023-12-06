import jwt from 'jsonwebtoken';
import { UserTokenData } from './TokenService';

const JWT_SECRET: string = process.env.JWT_SECRET || '123456';
const tokenExpirationInSeconds = 36000;
const generateToken = (userData: UserTokenData): string => {
  const token = jwt.sign({ userData }, JWT_SECRET, {
    expiresIn: tokenExpirationInSeconds,
  });
  console.log(``);
  return token;
};

interface UserDetailsDB {
  email: string;
  password: string;
  role: string;
}

export const mockAuthenticateAPI = (
  email: string,
  password: string
): string | undefined => {
  const userCredArray: UserDetailsDB[] = [
    { email: 'admin', password: 'password', role: 'admin' },
    { email: 'employee', password: 'password', role: 'employee' },
  ];

  const foundUser = userCredArray.find(
    (value) => value.email === email && value.password === password
  );

  if (foundUser) {
    const token = generateToken({
      email: foundUser.email,
      role: foundUser.role,
    });
    return token;
  }
  // User not found
  return foundUser;
};
