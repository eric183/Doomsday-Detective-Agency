import React, { useRef, useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';
import { useOT } from '~/hooks';
import { useStore } from '~/stores';
import styled from '@emotion/styled';
// import { useEffect } from 'react-dom/node_modules/@types/react';
let editor: monaco.editor.IStandaloneCodeEditor;

const EditorLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const EditorIndex: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);
  const { io } = useOT();
  const [initStr, setStr] = useState<string>(
    ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  );
  const msg = useStore((state) => state.msg);
  useEffect(() => {
    // console.log(msg);
    if (msg.type === 'editor') {
      const _v = JSON.parse(msg.value);
      editor?.setValue(_v[0]);
      editor?.setPosition(_v[1]);
    }
    // editor?.setValue(msg.type === 'editor' ? msg.value : initStr);
  }, [msg]);
  useEffect(() => {
    if (divEl.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editor = monaco.editor.create(divEl.current, {
        value: initStr,
        language: 'typescript',
        theme: 'vs-dark',
        automaticLayout: true,
      });
      editor.layout();
      // editor.onDidChangeModel((d) => {
      //   console.log(d);
      // });
      // editor.onKeyUp((d) => {
      editor.onKeyUp((d) => {
        console.log(editor.getPosition());
        // console.log(JSON.stringify(d.changes[0].text));
        // editor.getValue({
        //     lineEnding: monaco.editor.EndOfLinePreference
        //       .CRLF as unknown as string,
        //     preserveBOM: false,
        //   })
        // console.log(editor.getValue());
        // console.log(d);
        io.emit(
          'editorToServer',
          JSON.stringify({
            type: 'editor',
            value: JSON.stringify([editor.getValue(), editor.getPosition()]),
            eventType: 'input',
          }),
        );
        // debugger;
      });
    }
    return () => {
      editor.dispose();
    };
  }, []);

  // return <div className="Editor" ref={divEl} style={{ height: '100%' }}></div>;
  return <EditorLayout ref={divEl} className="overflow-y-hidden" />;
  // return <div className="Editor flex"  ></div>;
};

export { EditorIndex };
