import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { IBitcoin } from './common/models/bitcoin';

@WebSocketGateway()
export class SocketService implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server;

    async handleConnection() {
        // emit new value at a random period
        setInterval(() => this.emitPrice(this.server), 15000)
    }

    emitPrice(ws) {
        let bc: IBitcoin = {
            price: +(10000 + (Math.random() * 10001)).toFixed(2),
            time: new Date()
        }
        ws.emit('exchange', bc)
    }

    async handleDisconnect() { }

}