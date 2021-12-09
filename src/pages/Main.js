import React from 'react';
import styled from 'styled-components';

import { MainLogin } from '../components/MainLogin';

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Main = () => {
  return (
    <MainSection>
      <MainArticle>
        <MainLogin />
      </MainArticle>
    </MainSection>
  );
};
