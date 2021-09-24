import create from 'zustand';
import { Terminal, ITerminalOptions } from 'xterm';
import { D42_FrontType } from '../types';

const initTerminalEvents = (
  term: Terminal,
  io: D42_FrontType.SocketType['Socket'],
) => {
  term.onKey(({ key, domEvent }) => {
    // const printable =
    // !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
    console.log(key, key.charCodeAt(0), domEvent);
    let charactor: string = key;

    switch (key.charCodeAt(0)) {
      case 13:
        // channel.perform('change', { command: text}) 推送命令
        // setText('');
        // term.write(`\r\n`);
        break;
      case 27:
        switch (domEvent.key) {
          case 'ArrowLeft':
            if (term.buffer.active.cursorX <= 2) {
              return;
            }
            break;
          case 'ArrowRight':
            // nothing to the right of the cursor => return
            // term.write('\x1b[C');
            break;
          case 'ArrowUp':
          case 'ArrowDown':
            break;
          default:
            break;
        }
        break;
      case 8: // backspace key: delete char on the left of the cursor
      case 127:
        if (term.buffer.active.cursorX > 2) {
          charactor = '\b';
        }
        break;
      case 27: // delete key: delete char on the right of the cursor
        // nothing to the right of the cursor => return
        charactor = '[3~';
        break;
      default:
        break;
    }
    io.emit(
      'termToServer',
      JSON.stringify({
        type: 'xterm',
        value: charactor,
        eventType: 'input',
      }),
    );
  });
};

// Web-worker 待补充
const useTerminal = create<{
  terminal: Terminal;
  options: ITerminalOptions;
  initTerminal: (io: D42_FrontType.SocketType['Socket']) => void;
  setOption: (key: string, value: unknown) => void;
}>((set) => ({
  terminal: null,
  options: {
    convertEol: true,
    fontSize: 14,
    fontFamily: 'Monaco, Menlo, monospace',
    lineHeight: 1.5,
    cursorBlink: true,
    cursorWidth: 1,
    cursorStyle: 'block',
    rightClickSelectsWord: true,
    theme: {
      background: '#1E1E1E',
    },
  },
  initTerminal: (io) =>
    set((state) => {
      const terminal = new Terminal(state.options);
      initTerminalEvents(terminal, io);
      return { terminal };
    }),
  setOption: (key, value) =>
    set((state) => {
      state.terminal.setOption(key, value);
      state.options[key] = value;
      return { options: { ...state.options } };
    }),
}));

export { useTerminal };
