import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.JWT_SECRET_KEY;
console.log(secret_key);

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    return jwt.sign(user, secret_key, { expiresIn: '1h' });
};
