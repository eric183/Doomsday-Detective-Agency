import { useEffect } from 'react';
import { io } from 'socket.io-client';
import create from 'zustand';
import { useStore } from '~/stores';
import { D42_FrontType } from '~/types';
// const SOCKET_INSTANCE = 'ws://192.168.2.12:4001';
// const SOCKET_INSTANCE = 'http://192.168.2.12:3000';
// const SOCKET_INSTANCE = 'http://172.19.0.2:3000';
// const SOCKET_INSTANCE = 'ws://localhost:4001';
// const SOCKET_INSTANCE = 'http://192.168.2.15:8888/websocket';
// const SOCKET_INSTANCE = 'http://192.168.2.7:3000';
const SOCKET_INSTANCE = 'http://docker.happylandle.club:4001';
// const SOCKET_INSTANCE = 'ws://docker.happylandle.club:8080';
// const SOCKET_INSTANCE = 'http://docker.happylandle.club:3000';
// fetch('http://192.168.2.12:3000/cats')
// fetch('http://localhost:8080/cats')
//   .then((d) => d.json())
//   // .catch((d) => {})
//   .then((d: { data: string }) => {
//     console.log(d.data);
//   });
type UseSocketType = {
  socket: D42_FrontType.SocketType['Socket'] | string | undefined;
  setSocket: (
    arg: D42_FrontType.SocketType['Socket'] | string | undefined,
  ) => void;
};

// Socket Store Logic Center
const useSocketStore = create<UseSocketType>((set) => ({
  socket: io(SOCKET_INSTANCE),
  setSocket: (arg) => set(() => ({ socket: arg })),
}));

// OT Center
const useOT = () => {
  // const [msgJSON, setMsgJSON] = useState<T_MSG>({
  //   type: '',
  //   value: '',
  //   eventType: '',
  // });

  const io = useSocketStore(
    (state) => state.socket,
  ) as D42_FrontType.SocketType['Socket'];
  const setMSG = useStore((state) => state.setMSG);

  useEffect(() => {
    io.on('connect', () => {
      console.log('加入房间中');
      // debugger;
      io.emit('enterRoom');
      //   console.log(socketVal);
      // io.on('connection', () => {
      // socket.join('some rgoom');
      // io.join('some')
      // console.log(io.id);
    });
    // io.on('users', (d) => {});
    io.on('initRoom', (room) => {
      // debugger;
      console.log(`加入${room}`);
      // debugger
      // setSocketVal(socketVal);
      // io.emit('msgToServer', JSON.stringify(msgJSON));
      // io.emit('termToServer', socketVal);
    });
    io.on('editorFromServer', (val) => {
      // setMsgJSON(JSON.parse(val));

      setMSG(JSON.parse(val));
      //   setSocketVal(val);
      // debugger;
      // console.log(`加入${room}`);
    });
    io.on('termFromServer', (val) => {
      // setMsgJSON(JSON.parse(val));
      // debugger;
      setMSG(JSON.parse(val));
      //   setSocketVal(val);
      // debugger;
      // console.log(`加入${room}`);
    });

    io.on('connect_error', (error) => {
      console.log('err', error);
      io.connect();
      console.log('重连中');
    });

    return () => {
      io.off('connect');
      io.off('joinedRoom');
      io.off('termFromServer');
      io.off('connect_error');
    };
  }, [io]);

  return { io };
};

export { useOT };
