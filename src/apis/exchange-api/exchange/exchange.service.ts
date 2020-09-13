import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
    getDollarsToBitcoin(): number{
        const dollarBase = 10000;
        const dollarChange = Math.floor(Math.random() * 1001); 
        return dollarBase + dollarChange;
    }
}
