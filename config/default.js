module.exports.development = {
  username: 'root',
  password: 'admin123',
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql',
};

module.exports.production = {
  username: 'mysql',
  password: '797edc20398462f6',
  database: 'internship_nodejs_api',
  host: 'dokku-mysql-internship-nodejs-api',
  dialect: 'mysql',
};
