import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { useTerminal } from '~/stores/useTerminal';
import { useStore } from '~/stores';
import { useOT } from '~/hooks';
import { FitAddon } from 'xterm-addon-fit';

import 'xterm/css/xterm.css';
import '~/styles/xterm-costumers.css';

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

type TerminalProps = {
  height?: number | string;
  width?: number | string;
};

const TerminalComponent = (props: TerminalProps) => {
  const stateStyle = {
    height: '100%',
    width: '100%',
    ...props,
  };

  const { io } = useOT();

  const msgObj = useStore((state) => state.msg);
  const { terminal, initTerminal } = useTerminal((state) => state);

  const xtermFitAddon = new FitAddon();

  const terminalRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(msgObj.value || '');

  const initCacheText = (term: Terminal, text: string) => {
    console.log(text);
    term.write(text);
  };

  useEffect(() => {
    initTerminal(io);
  }, []);

  useEffect(() => {
    if (terminal) {
      terminal.open(terminalRef.current);
      terminal.loadAddon(xtermFitAddon);
      // terminalRef.current.replaceWith();
      xtermFitAddon.fit();
      terminal.focus();
      initCacheText(terminal, text as string);
    }
  }, [terminal]);
  // xtermFitAddon.fit();
  // terminal.resize();
  useEffect(() => {
    const cha = msgObj.value as string;
    console.log(cha);
    if (!cha.includes('[A') && !cha.includes('[B')) {
      terminal?.write(cha);
      setText(cha);
    }
    // user_id filter | OT diff
  }, [msgObj]);

  useEffect(() => {
    // save text
  }, [text]);

  return (
    <>
      <div
        style={{
          ...stateStyle,
        }}
        ref={terminalRef}
      ></div>
    </>
  );
};

export default TerminalComponent;
