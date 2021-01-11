import { DatabaseAdapter } from './DB_Adapter';

const baseConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'PCM_base',
  password: 'privat_password',
  port: '5432'
}

export const base = new DatabaseAdapter(baseConfig);