module.exports = {
  database: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  awsConfig: {
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    accessKeyId: process.env.ACCESKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
  PORT: process.env.PORT || 3000,
};
