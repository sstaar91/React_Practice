import React from 'react';
import { ListForm } from '../../components/todo';
import * as S from './Todo.style';

const Todo = () => {
  return (
    <S.TodoBody>
      <S.TodoArticle>
        <ListForm />
      </S.TodoArticle>
    </S.TodoBody>
  );
};

export default Todo;
