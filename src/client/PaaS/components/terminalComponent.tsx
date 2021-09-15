import React, { useEffect, useRef, useState } from 'react';
import { Terminal, ITerminalOptions } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { useOT } from '~/hooks';
import { useStore } from '~/stores';

import 'xterm/css/xterm.css';

/**
 * 特殊字符表
 * "\x1b[K",//清除光标至行末字符，包括光标位置，行属性不受影响。
    "\x1b[0K",//清除光标至行末字符，包括光标位置，行属性不受影响。
    "\x1b[1K",//清除行首至光标位置字符，包括光标位置，行属性不受影响。
    "\x1b[2K",//清除光标所在行的所有字符
    "\x1b[A",//光标上移
    "\x1b[B",//光标下移
    "\x1b[C",//光标右移
    "\x1b[D",//光标左移
 */

const TerminalComponent = (props: ITerminalOptions) => {
  const defaultOptions: ITerminalOptions = {
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
    ...props,
  };

  const promptText = '$ ';

  const msgObj = useStore((state) => state.msg);
  const { io } = useOT();

  const xtermFitAddon = new FitAddon();

  const terminalRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(msgObj.value || '');
  const [terminal] = useState<Terminal>(new Terminal(defaultOptions));

  const terminalPrompt = (term: Terminal) => {
    term.write(promptText);
  };

  const initXTerminal = (term: Terminal) => {
    term.open(terminalRef.current);
    term.loadAddon(xtermFitAddon);

    terminalPrompt(term);
    xtermFitAddon.fit();

    term.onKey(({ key, domEvent }) => {
      // const printable =
      // !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
      console.log(key, key.charCodeAt(0), domEvent);
      let charactor: string = key;

      switch (key.charCodeAt(0)) {
        case 13:
          // channel.perform('change', { command: text}) 推送命令
          setText('');
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
  const initCacheText = (term: Terminal, text: string) => {
    console.log(text);
    term.write(text);
  };

  useEffect(() => {
    initXTerminal(terminal);
    initCacheText(terminal, text as string);
  }, []);

  useEffect(() => {
    const cha = msgObj.value as string;
    console.log(cha);
    if (!cha.includes('[A') && !cha.includes('[B')) {
      terminal.write(cha);
      setText(cha);
    }
    // user_id filter | OT diff
  }, [msgObj]);

  useEffect(() => {
    // save text
  }, [text]);

  // console.log(msgObj);
  return <div ref={terminalRef}></div>;
};

export default TerminalComponent;
