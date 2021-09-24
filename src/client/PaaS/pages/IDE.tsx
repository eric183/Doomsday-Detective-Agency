import React from 'react';
import { EditorIndex } from '~/components/editor';
import TerminalComponent from '~/components/terminalComponent';
import Tabs from '~/components/Tabs';
import styled from '@emotion/styled';

const IDEWrapper = styled.div`
  padding: 10px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #30353b;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  height: 40px;
  width: 100%;
  color: #eaeaea;
  flex-shrink: 0;
`;

const MainWrapper = styled.div`
  height: calc(100vh - 60px);
  width: calc(100vw - 30px);
  display: flex;
  gap: 10px;
`;

const EditorWrapper = styled.div`
  height: 100%;
  width: 55vw;
  flex-shrink: 0;
`;

const ToolsWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  flex-grow: 0;
`;

const PreviewWrapper = styled.div`
  height: 40vh;
  color: #333333;
  background-color: #eaeaea;
`;

const TermWrapper = styled.div`
  height: 50vh;
  width: calc(45vw - 30px);
  overflow: auto;
`;

const IDE: React.FC = () => {
  return (
    <IDEWrapper>
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
    </IDEWrapper>
  );
};

export default IDE;
