import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './../src/post/entities/post.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Post],
  synchronize: false,
  logging: true,
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['dist/db/migrations/*.js']
      : ['db/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
