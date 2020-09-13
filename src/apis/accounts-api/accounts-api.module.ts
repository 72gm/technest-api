import { Module } from '@nestjs/common';
import { AccountsService } from './accounts/accounts.service';
import { AccountsController } from './accounts/accounts.controller';

@Module({
  providers: [AccountsService],
  controllers: [AccountsController]
})
export class AccountsApiModule {}
