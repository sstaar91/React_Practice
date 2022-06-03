import React from 'react';
import * as S from './TodoList.style';

const TodoList = ({ id, value }) => {
  const removeList = e => {
    let list = JSON.parse(localStorage.getItem('todos'));
    const clickTarget = e.target.parentElement;
    clickTarget.remove();
    list = list.filter(data => data.id !== parseInt(id));
    localStorage.setItem('todos', JSON.stringify(list));
  };

  return (
    <S.ListDiv id={id}>
      <S.ListSpan>{value}</S.ListSpan>
      <S.ListBtn onClick={removeList}>삭제</S.ListBtn>
    </S.ListDiv>
  );
};

export default TodoList;
