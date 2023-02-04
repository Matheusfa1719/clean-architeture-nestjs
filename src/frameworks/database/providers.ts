import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_ENV,
} from 'src/core/shared/environment';
import { DataSource } from 'typeorm';
import { User } from './entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: DB_HOST,
        port: parseInt(DB_PORT),
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        entities: [User],
        synchronize: NODE_ENV === 'local' ? true : false,
      });

      return dataSource.initialize();
    },
  },
];
