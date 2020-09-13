import { Injectable, Get } from '@nestjs/common';
import { accountList, transList } from 'src/common/data/account-data';
import { IAccount } from 'src/common/models/account';
import { ITransaction } from 'src/common/models/transaction';

@Injectable()
export class AccountsService {

    getList(): IAccount[] {
        return accountList
    }

    getById(id: string): ITransaction[] {
        return transList.filter(transaction => transaction.AccountId === id)
    }
}