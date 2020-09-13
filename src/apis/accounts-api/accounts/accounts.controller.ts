import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { IAccount } from 'src/common/models/account';
import { ITransaction } from 'src/common/models/transaction';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService){   }

    @Get()
    getList(): IAccount[] {
        return this.accountsService.getList();
    }

    @Get(':id')
    getById(@Param('id') id): ITransaction[] {
        return this.accountsService.getById(id);
    }
}
