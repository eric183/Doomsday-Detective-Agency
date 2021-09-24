import React, { Suspense, useEffect, useState } from 'react';
// import { lazy } from '@loadable/component';
// import { useOT } from '~/hooks';
// import { useStore } from '~/stores';
// // import * as ot from 'ot';
// import styled from '@emotion/styled';
// import { animated, useSpring } from 'react-spring';

// const LazyEditorComponent = lazy(
//   async () => (await import('../components/editor')).EditorIndex,
// );

// const subtitleStyle = styled`
//   box-sizing: border-box;
//   width: 100px;
//   height: 60px;
//   color: red;
// `;

// const Button = styled.button`
//   color: turquoise;
// `;

const Sample = () => {
  const [socketVal, setSocketVal] = useState<string>('');

  // const props = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  // });

  // const { io } = useOT();
  // const io = useSocket((state) => state.socket) as SocketType['Socket'];
  // const io = useSocketStore((state) => state.socket) as SocketType['Socket'];
  // const msg = useStore((state) => state.msg);

  // useEffect(() => {
  //   // fromEvent(socket, '').subscribe((x) => {
  //   //   return socket.emit('msgToServer', { test: x });
  //   // });
  //   setSocketVal(msg.value as string);
  // }, [msg]);
  return <>sfad</>;
};

export default Sample;
