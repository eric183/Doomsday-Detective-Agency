/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="socket.io-client/build/typed-events" />

import { Socket } from 'socket.io-client';

export namespace D42_FrontType {
  const io: unknown;
  type T_MSG = {
    type: string;
    value: string;
    eventType: string;
  };
  interface SocketType {
    Socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  }
}

declare module 'lottie-web';

// declare module 'Daad' {
//   import * as lottieto from 'lottie-web';
//   export function registerAnimation(): lottieto.registerAnimation;
// }
// export * from 'lottie-web';
// declare module 'lottieWeb' {
//   import Lottie from 'lottie-web';
// }
// {
//   export * from 'lottie-web';
// }

// declare module '@react-spring/types';

// declare namespace JSX {
//   interface FragmentProperty {
//     // eslint-disable-next-line @typescript-eslint/ban-types
//     Fragment: {};
//   }
// }
