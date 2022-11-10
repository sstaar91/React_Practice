import React from 'react';
import styled from 'styled-components';
import { MainLogin } from '../components/MainLogin';
import { mixin } from '../styles';

import { useDispatch } from 'react-redux';
import store from '../store';
const { flexCenter } = mixin;

export const Main = () => {
  const disPatch = useDispatch();

  return (
    <MainSection>
      <MainArticle>
        <MainLogin />
        <button
          onClick={() => {
            store.disPatch({
              type: 'PLUS',
              counter: 1,
            });
          }}
        >
          클릭
        </button>
        <div>2</div>
        <div>1</div>
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
