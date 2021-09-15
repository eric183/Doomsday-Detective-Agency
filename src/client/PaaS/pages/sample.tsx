import React, { Suspense, useEffect, useState } from 'react';
import { lazy } from '@loadable/component';
import { useOT } from '~/hooks';
import { useStore } from '~/stores';
// import { SocketType } from 'D42_FrontType';

// import { useSocket } from '~/hooks/collections/socket';
const LazyEditorComponent = lazy(
  async () => (await import('../components/editor')).EditorIndex,
);

const Sample = () => {
  const [socketVal, setSocketVal] = useState<string>('');
  const { io } = useOT();
  // const io = useSocket((state) => state.socket) as SocketType['Socket'];
  // const io = useSocketStore((state) => state.socket) as SocketType['Socket'];
  const msg = useStore((state) => state.msg);

  useEffect(() => {
    // fromEvent(socket, '').subscribe((x) => {
    //   return socket.emit('msgToServer', { test: x });
    // });

    setSocketVal(msg.value as string);
  }, [msg]);
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <LazyEditorComponent />
        myval: {socketVal}
        <input
          value={socketVal as string}
          onInput={(e) => {
            // debugger;
            io.emit(
              'termToServer',
              JSON.stringify({
                type: 'xterm',
                value: e.currentTarget.value,
                eventType: 'input',
              }),
            );
            setSocketVal(e.currentTarget.value);
          }}
        />
      </Suspense>
    </div>
  );
};

export default Sample;

// function showMePaaS(args: {
//   token: string;
//   container: string;
//   language: string;
//   library: string;
//   include: string[];
//   // exlude: ['shell'],
//   theme: string;
// }) {
//   console.log(args);
// }

// function setter() {
//   // const PAAS_OBJ = new showMePaaS({
//   //   token: '',
//   //   container: 'body',
//   //   language: 'javascript',
//   //   library: 'react',
//   //   include: ['shell', 'log', 'terminal', 'sideBar', 'header'],
//   //   // exlude: ['shell'],
//   //   theme: 'dark | light',
//   // });
//   // PAAS_OBJ.close(['shell', 'log']);
//   // PAAS_OBJ.switch({ language: 'java' });
//   // PAAS_OBJ.open(['']);
// }
