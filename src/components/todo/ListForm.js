import React from 'react';
import styled from 'styled-components';

import { Time } from './Time';

import { fade_in } from '../../styles/Mixin';

const Main = styled.section`
  animation-duration: 2s;
  animation-name: ${props => (props.toggle ? 'none' : fade_in)};
  display: ${props => (props.toggle ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.span`
  margin: 20px 0;
  font-size: 3.5vw;
`;

export const ListForm = ({ loginName, toggle }) => {
  return (
    <Main toggle={toggle}>
      <Time />
      <WelcomeText>{loginName} 님의 일상을 기록하세요</WelcomeText>
    </Main>
  );
};
