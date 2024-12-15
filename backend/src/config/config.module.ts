
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AMC } from '../amc/entities/amc.entities';
import { MutualFund } from '../mutualfund/entities/mf.entities';
import { Stock } from '../stock/entities/stock.entities';
import { FundStock } from '../fundstock/entities/fundstock.entities';
import { RpaBot } from 'src/rpa-bot/entities/rpa-bot.entity';

import * as dotenv from 'dotenv';
import { User } from 'src/auth/entities/auth.entities';
import { Indexstock } from 'src/indexstock/entities/indexstock.entity';
import { Index } from 'src/index/entities/index.entities';
dotenv.config();

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: process.env.DATABASE_HOST,
//   port: parseInt(process.env.DATABASE_PORT, 10),
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   entities: [AMC, MutualFund, Stock, FundStock,User, RpaBot,Indexstock,Index],
//   synchronize: true,
//   logging: false,
// };

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgresql://neondb_owner:lgEzYS4BsUb3@ep-plain-art-a51u53dt.us-east-2.aws.neon.tech/neondb?sslmode=require',
  entities: [AMC, MutualFund, Stock, FundStock, User, RpaBot, Indexstock, Index],
  synchronize: process.env.NODE_ENV !== 'production', // Avoid sync in production
  logging: process.env.NODE_ENV === 'development',   // Enable logging in development
  ssl: {
    rejectUnauthorized: false, // Required for Neon connections
  },
};