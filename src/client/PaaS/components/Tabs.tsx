import React from 'react';
import styled from '@emotion/styled';

const TabsWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  ul {
    display: flex;
    li {
      color: #eaeaea;
      width: 33.3333%;
      text-align: center;
      span:hover {
        cursor: pointer;
      }
    }
  }
`;

const Tabs = () => {
  return (
    <TabsWrapper>
      <ul>
        <li>
          <span>Console</span>
        </li>
        <li>
          <span>Shell</span>
        </li>
      </ul>
    </TabsWrapper>
  );
};

export default Tabs;
