import React from 'react';
import styled from 'styled-components';

const TodoBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoArticle = styled.article`
  display: flex;
  justify-content: center;
`;

export const Todo = () => {
  return (
    <TodoBody>
      <TodoArticle>todo 만들기</TodoArticle>
    </TodoBody>
  );
};
