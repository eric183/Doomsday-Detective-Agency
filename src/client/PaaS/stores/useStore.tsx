import create from 'zustand';
import { D42_FrontType } from '../types';
// import { T_MSG } from '../types';

// import { T_MSG } from '~/types';
// "D42_FrontType": ["index.d.ts"],
// Web-worker 待补充
const useStore = create<{
  msg: D42_FrontType.T_MSG;
  msgs: D42_FrontType.T_MSG[];
  setMSG: (arg: D42_FrontType.T_MSG) => void;
}>((set) => ({
  msg: {
    type: '',
    value: '',
    eventType: '',
  },
  msgs: [
    {
      type: '',
      value: '',
      eventType: '',
    },
  ],
  setMSG: (arg) => set((state) => ({ msg: arg, msgs: [...state.msgs, arg] })),
}));

export { useStore };
