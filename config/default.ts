export class Config {
  public static development = {
    username: 'root',
    password: 'admin123',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql',
  };
  public static production = {
    username: 'test1',
    password: '123',
    database: 'production',
    host: '123.123.123.123',
    dialect: 'mysql',
  };
}
