import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
