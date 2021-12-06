import React from 'react';
import styled from 'styled-components';

import { Time } from '../../components/Time';

const TodoBody = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TodoArticle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Todo = () => {
  return (
    <TodoBody>
      <TodoArticle>
        <Time />
      </TodoArticle>
    </TodoBody>
  );
};
