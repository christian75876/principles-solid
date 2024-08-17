export const EnvConfig = () => ({
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    usernameDb: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  }
);
  