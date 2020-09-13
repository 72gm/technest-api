import { IAccount } from "src/common/models/account"
import { ITransaction } from "src/common/models/transaction";
import { Category } from "../models/category";
import { Tag } from "../models/tag";

// accounts
const account1: IAccount = { AccountId: 1, AccountName: 'Account 1', AvailableBalance: 1.25, Balance: 1.25, Category: Category.treasury, Tag: Tag.tag1 };
const account2: IAccount = { AccountId: 2, AccountName: 'Account 2', AvailableBalance: 0.123, Balance: 0.123, Category: Category.insurance, Tag: Tag.tag2 };
const account3: IAccount = { AccountId: 3, AccountName: 'Account 3', AvailableBalance: 1.123, Balance: 1.123, Category: Category.insurance, Tag: Tag.tag2 };
const account4: IAccount = { AccountId: 4, AccountName: 'Account 4', AvailableBalance: 3.123, Balance: 3.123, Category: Category.insurance, Tag: Tag.tag2 };
const account5: IAccount = { AccountId: 5, AccountName: 'Account 5', AvailableBalance: 0.53, Balance: 0.53, Category: Category.insurance, Tag: Tag.tag2 };
const account6: IAccount = { AccountId: 6, AccountName: 'Account 6', AvailableBalance: 1.53, Balance: 0.53, Category: Category.insurance, Tag: Tag.tag2 };

export const accountList: IAccount[] = []
accountList.push(account1)
accountList.push(account2)
accountList.push(account3)
accountList.push(account4)
accountList.push(account5)
accountList.push(account6)

//account transactions
const trans1: ITransaction = { AccountId: '1', Balance: 100, Credit: 20, Date: new Date(), Debit: null, OrderCode: 'xyz12345', OrderId: 'order1' }
const trans2: ITransaction = { AccountId: '1', Balance: 140, Credit: 40, Date: new Date(), Debit: null, OrderCode: 'xyz12346', OrderId: 'order2' }
const trans3: ITransaction = { AccountId: '2', Balance: 1000, Credit: 200, Date: new Date(), Debit: null, OrderCode: 'xyz12347', OrderId: 'order3' }
const trans4: ITransaction = { AccountId: '2', Balance: 1400, Credit: 400, Date: new Date(), Debit: null, OrderCode: 'xyz12349', OrderId: 'order4' }
const trans5: ITransaction = { AccountId: '3', Balance: 1400, Credit: 400, Date: new Date(), Debit: null, OrderCode: 'xyz12349', OrderId: 'order4' }
const trans6: ITransaction = { AccountId: '4', Balance: 1400, Credit: 400, Date: new Date(), Debit: null, OrderCode: 'xyz12349', OrderId: 'order4' }
const trans7: ITransaction = { AccountId: '5', Balance: 1400, Credit: 400, Date: new Date(), Debit: null, OrderCode: 'xyz12349', OrderId: 'order4' }
const trans8: ITransaction = { AccountId: '6', Balance: 1400, Credit: 400, Date: new Date(), Debit: null, OrderCode: 'xyz12349', OrderId: 'order4' }

export const transList: ITransaction[] = []
transList.push(trans1)
transList.push(trans2)
transList.push(trans3)
transList.push(trans4)
transList.push(trans5)
transList.push(trans6)
transList.push(trans7)
transList.push(trans8)
