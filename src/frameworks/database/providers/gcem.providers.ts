import { DataSource } from 'typeorm';
import { Gcem } from '../entity';

export const gcemProviders = [
  {
    provide: 'GCEM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Gcem),
    inject: ['DATA_SOURCE'],
  },
];
