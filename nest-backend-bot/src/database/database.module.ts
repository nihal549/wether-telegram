/* eslint-disable prettier/prettier */
// database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING)],
  providers: [...databaseProviders],
  exports: [MongooseModule], 
})
export class DatabaseModule {}
