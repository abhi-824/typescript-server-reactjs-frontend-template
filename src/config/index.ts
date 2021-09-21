import { config as dotenvconfig } from "dotenv";

dotenvconfig();

export const config = {
  PORT: process.env.PORT || 5000,
  firebaseConfig: process.env.firebaseConfig,
};

export default config;
