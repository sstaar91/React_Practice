import React from 'react';
import styled from 'styled-components';

import { MainLogin } from '../components/MainLogin';
import { mixin } from '../styles';

const { flexCenter } = mixin;

export const Main = () => {
  return (
    <MainSection>
      <MainArticle>
        <MainLogin />
      </MainArticle>
    </MainSection>
  );
};

const MainSection = styled.section`
  ${flexCenter};
  height: 100vh;
`;

const MainArticle = styled.article`
  ${flexCenter};
  flex-direction: column;
`;
