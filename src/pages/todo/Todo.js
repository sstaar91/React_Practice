import React from 'react';
import styled from 'styled-components';

import { TodoLogin } from '../../components/todo/TodoLogin';

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
  flex-direction: column;
`;

export const Todo = () => {
  return (
    <TodoBody>
      <TodoArticle>
        <TodoLogin />
      </TodoArticle>
    </TodoBody>
  );
};
