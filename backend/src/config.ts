import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: 'localhost',
  dialect: 'postgres',
};
