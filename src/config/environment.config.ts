import * as dotenv from 'dotenv';

dotenv.config();

export const serverport = Number(process.env.API_PORT);
export const DBPORT = Number(process.env.DATABASE_PORT);
export const DBNAME = String(process.env.DATABASE_NAME);
export const APPURL = String(process.env.TEST_API_URL);

