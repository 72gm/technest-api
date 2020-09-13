
export interface ITransaction {
    AccountId: string;
    Date: Date;
    OrderId: string;
    OrderCode: string;
    Debit: number;
    Credit: number;
    Balance: number;
}