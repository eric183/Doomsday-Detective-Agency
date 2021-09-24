import React, { Suspense, useEffect, useState } from 'react';
import { lazy } from '@loadable/component';
import { useOT } from '~/hooks';
// import { useStore } from '~/stores';
// import * as ot from 'ot';
import styled from '@emotion/styled';
// import { animated, useSpring } from 'react-spring';
import { EditorIndex } from '~/components/editor';
import TerminalComponent from '~/components/terminalComponent';
import Tabs from '~/components/Tabs';
import create from 'zustand';
import { css } from '@emotion/css';
// import { useSpring } from 'react-spring';

const useIndexState = create<{
  isFolded: boolean;
  setFold: (arg: boolean) => void;
}>((set) => ({
  isFolded: false,
  setFold: (arg) => set({ isFolded: arg }),
}));

const LazyEditorComponent = lazy(
  async () => (await import('../components/editor')).EditorIndex,
);
// const subtitleStyle = styled`
//   box-sizing: border-box;
//   width: 100px;
//   height: 60px;
//   color: red;
// `;

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  /* background: #d8d8d8; */
  background: #202327;
`;

const HeaderLayout = styled.header`
  /* height: 69px; */
  width: 100%;
  /* background: ; */
`;

const ContainerLayout = styled.div`
  section {
    height: 100%;
  }
`;

const IDELayout = styled.div`
  height: 50%;
`;

const RunnerLayout = styled.div`
  background: #d8d8d8;
`;
const Sample = () => {
  // const [socketVal, setSocketVal] = useState<string>('');
  // const props = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  // });

  // const { io } = useOT();
  // const io = useSocket((state) => state.socket) as SocketType['Socket'];
  // const io = useSocketStore((state) => state.socket) as SocketType['Socket'];
  // const msg = useStore((state) => state.msg);

  // useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  // useEffect(() => {
  //   // fromEvent(socket, '').subscribe((x) => {
  //   //   return socket.emit('msgToServer', { test: x });
  //   // });
  //   setSocketVal(msg.value as string);
  // }, [msg]);
  const isFolded = useIndexState((state) => state.isFolded);
  const setFold = useIndexState((state) => state.setFold);
  const url = 'https://avatars.githubusercontent.com/u/10773980?v=4';
  return (
    <>
      {/* <MainLayout className="bg-black dark:bg-gray-900"> */}
      <MainLayout className="flex flex-col">
        <HeaderLayout className="bg-codezone-black h-16 flex px-9">
          <div
            className="rounded-full h-8 w-8 self-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: 'url(' + url + ')' }}
          ></div>

          <div className="flex" style={{ color: '#fff', marginLeft: 20 }}>
            <span className="self-center">{'{ user.name }'}</span>
            <i className="self-center" style={{ margin: '0 10px' }}>
              /
            </i>
            <span className="self-center">{'{ playground_info }'}</span>
          </div>
        </HeaderLayout>
        <ContainerLayout className="flex flex-1 mt-2.5 flex-row">
          {/* 左侧栏 */}
          <section className="bg-codezone-black rounded-sm w-14 ml-2.5 flex flex-col pt-5 flex-shrink-0">
            <i
              className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 snippets"
              onClick={() => setFold(!isFolded)}
            ></i>
            <i className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 Field-time"></i>
            <i className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 CodeSandbox"></i>
            <i className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 database"></i>
            <i className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 cloud-upload"></i>
            <i className="cursor-pointer text-3xl text-gray-50 self-center mb-9 flex-center d42 setting"></i>
          </section>
          {/* 文件树 */}
          <section
            className={`bg-codezone-black rounded-sm ml-2.5 transition-all ${
              !isFolded ? 'w-52' : 'w-0'
            }`}
          >
            <header
              className={css`
                margin: 19px;
                color: #fff;
              `}
            >
              文件
            </header>
          </section>
          {/* 编辑器与终端 */}
          <section className="bg-codezone-black rounded-sm mx-2.5 flex-1 flex flex-col">
            <IDELayout>
              <Suspense fallback={<div>Loading</div>}>
                <LazyEditorComponent />
              </Suspense>
            </IDELayout>
            <IDELayout className="mt-5">
              {/* <Tabs /> */}
              <Suspense fallback={<div>Loading</div>}>
                <TerminalComponent />
              </Suspense>
            </IDELayout>
          </section>

          <RunnerLayout className="rounded-sm w-5/12 mr-2.5">
            <iframe
              className={css`
                width: 100%;
                height: 100%;
              `}
              src="//player.bilibili.com/player.html?aid=43035072&bvid=BV1fb411U77B&cid=75456698&page=1"
            ></iframe>
            {/* <iframe  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> */}
          </RunnerLayout>
          {/* <section className="bg-codezone-black rounded-sm flex-1"></section> */}
        </ContainerLayout>
      </MainLayout>
      {/* <Suspense fallback={<div>Loading</div>}>
        <LazyEditorComponent />
        <Button>myval</Button>: {socketVal}
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0"></div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
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
      </Suspense> */}
      {/* <IDEWrapper>
        <HeaderWrapper>This is Header.</HeaderWrapper>
        <MainWrapper>
          <EditorWrapper>
            <EditorIndex />
          </EditorWrapper>
          <ToolsWrapper>
            <PreviewWrapper>browser content</PreviewWrapper>
            <Tabs />
            <TermWrapper>
              <TerminalComponent height={'100%'} />
            </TermWrapper>
          </ToolsWrapper>
        </MainWrapper>
      </IDEWrapper> */}
    </>
  );
};

export default Sample;
