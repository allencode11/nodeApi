module.exports.development = {
  username: 'root',
  password: 'admin123',
  database: 'database_development',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports.production = {
  username: 'test1',
  password: '123',
  database: 'production',
  host: '123.123.123.123',
  dialect: 'mysql',
};

// host: dokku-mysql-internship-nodejs-api,
// port: 3306,
// user: mysql,
// password: 797edc20398462f6

// dsn: mysql://mysql:797edc20398462f6@dokku-mysql-internship-nodejs-api:3306/internship_nodejs_api