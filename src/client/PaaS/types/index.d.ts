import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Socket } from 'socket.io-client';

export const io: unknown;
// export const SocketIoType = Socket<DefaultEventsMap, DefaultEventsMap>

export type T_MSG = {
  type: string;
  value: string;
  eventType: string;
};

export interface SocketType {
  Socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

// export type MonacoType = {
//   text: string;
//   position: monaco.editor.IPosition;
// };
