//to extract env variables
import dotenv from "dotenv"
dotenv.config();

export const ENV= {
    PORT: process.env.PORT,
};