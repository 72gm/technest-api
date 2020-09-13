import { Controller, Get } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
    constructor(private exchangeService: ExchangeService ){  }

    @Get('rate')
    getRate(): number{
        return this.exchangeService.getDollarsToBitcoin();
    }

}
