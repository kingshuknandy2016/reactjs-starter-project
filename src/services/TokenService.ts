import jwt from 'jsonwebtoken';

export interface UserTokenData {
  email: string;
  role: string;
}
const JWT_SECRET: string = process.env.JWT_SECRET || '123456';
export const verifyToken = (token: string): UserTokenData => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const tokenData: UserTokenData = decoded['userData'];
    return tokenData;
  } catch (err: any) {
    throw new Error('Invalid token:' + err);
  }
};
