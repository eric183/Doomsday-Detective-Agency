import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket, Server } from 'socket.io';
import { io } from 'socket.io-client';

import * as os from 'os';
import * as pty from 'node-pty';
// @WebSocketGateway({ cors: true })
// @WebSocketGateway(4001, { cors: true, pingInterval: 250, pingTimeout: 200 })
@WebSocketGateway(4001, { cors: true })
export class EventsGateway {
  @WebSocketServer()
  server: Server;
  ptyprocess;
  users = 0;
  shellCenterData;
  constructor() {
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

    this.ptyprocess = pty.spawn(shell, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env,
      handleFlowControl: true,
    });
    const myio = io('ws://192.168.2.7:4001');
    // const myio = io('ws://192.168.2.15:8000/websocket', {
    //   transports: ['websocket'],
    // });
    // const myio = io('ws://docker.happylandle.club:4001');
    // console.log(this.server);
    myio.on('connect', () => {
      console.log('iiiii');
      // myio.emit(
      //   'termToServer',
      //   JSON.stringify({
      //     type: 'term',
      //     value: 'sdafasdfasdfasdfsa',
      //     eventType: '',
      //   }),
      // );
    });
    // myio.on('termFromServer', (d) => {
    //   console.log('termFromServer', d);
    // });
    // this.ptyprocess.write('pwd\r');
    // setTimeout(() => {
    //   this.ptyprocess.write('pwd\r');
    // }, 2000);
    this.ptyprocess.on('data', (data) => {
      // process.stdout.write('sdfsdaf');
      // this.keepTermData(data);
      this.shellCenterData = JSON.stringify({
        type: 'term',
        value: data,
        eventType: '',
      });
      // console.log(this);
      // if (this.server) {
      //   console.log(this.server);
      // }
      // this.server.broadcast.emit('termFromServer', data);
      this.server.emit('termFromServer', this.shellCenterData);
    });
    this.ptyprocess.resize(100, 40);
    // console.log(this.server);
    // this.server.connect('ws//docker.happylandle.club:4001');

    // console.log('sssss');
  }

  keepTermData(data) {
    process.stdout.write(data);
  }
  async handleConnection() {
    // A client has connected

    this.users++;
    // Notify connected clients of current users
    // this.users
    // this.server.emit('users', this.users);

    // this.server.emit('initRoom', this.shellCenterData);
    // this.server.emit('users', this.users);
  }
  async handleDisconnect() {
    // A client has disconnected
    this.users--;
    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }

  @SubscribeMessage('enterRoom')
  ImIn(client: Socket, payload: string): void {
    // console.log(client.handshake.address, ' 进入房间');
    client.join('room5');
    // console.log(`this.shellCenterData\n\n\n`, this.shellCenterData);
    client.emit('termFromServer', this.shellCenterData);
    // client.broadcast.emit('termFromServer', this.shellCenterData);
    // this.server.emit('msgToClient', payload);
    // client.broadcast.emit('msgToClient', payload);
    // console.log(client.handshake.address);
    // client.emit('joinedRoom', 'room5');
    // client.broadcast.emit('initRoom', this.shellCenterData);
    console.log(client.handshake.address, ' 进入房间');
    // console.log(this.server);
    // client.broadcast.emit('termFromServer', payload);
  }
  @SubscribeMessage('editorToServer')
  handleEditorMessage(client: Socket, payload: string): void {
    // this.server.emit('msgToClient', payload);
    // client.broadcast.emit('msgToClient', payload);
    console.log(client.handshake.address);
    client.broadcast.emit('editorFromServer', payload);
    client.emit('editorFromServer', payload);
  }
  @SubscribeMessage('termToServer')
  handleTermMessage(client: Socket, payload: string): void {
    // this.server.emit('msgToClient', payload);
    // client.broadcast.emit('msgToClient', payload);
    console.log(client.handshake.address);
    // console.log(`payload: ${payload}`);
    this.ptyprocess.write(JSON.parse(payload).value);
    client.broadcast.emit('termFromServer', payload);
    client.emit('termFromServer', payload);
    // client.emit('termFromServer', payload);
  }
  @SubscribeMessage('chat')
  async onChat(client: Socket, message) {
    client.broadcast.emit('chat', message);
  }
  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
  // afterInit(_server: Server) {
  //   this.logger.log('Init');
  // }

  // handleDisconnect(client: Socket) {
  //   this.logger.log(`Client disconnected: ${client.id}`);
  // }

  // handleConnection(client: Socket, ...args: unknown[]) {
  //   this.logger.log(`Client connected: ${client.id}`);
  // }
}
