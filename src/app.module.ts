import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeApiModule } from './apis/exchange-api/exchange-api.module';
import { AccountsApiModule } from './apis/accounts-api/accounts-api.module';
import { SocketService } from './socket-service';

@Module({
  imports: [ExchangeApiModule,  AccountsApiModule],
  controllers: [AppController],
  providers: [AppService, SocketService],
})
export class AppModule {}
