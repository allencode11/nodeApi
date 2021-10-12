const config = require('../config/default');

const env = process.env.NODE_ENV === 'production' ? 'production': 'development';

const { username, password, database, host, dialect } = config[env];

module.exports.development = {
  username,
  password,
  database,
  host,
  dialect,
};
