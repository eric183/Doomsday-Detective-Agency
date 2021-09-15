import { T_MSG } from 'D42_FrontType';
import create from 'zustand';

// Web-worker 待补充
const useStore = create<{
  msg: T_MSG;
  msgs: T_MSG[];
  setMSG: (arg: T_MSG) => void;
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
