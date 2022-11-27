import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

const ormconfig = new DataSource({
  type: 'mysql',
  host: process.env.HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER_ROOT,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  entities: ['src/module/**/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
export default ormconfig;
