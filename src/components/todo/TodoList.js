import React from 'react';
import styled from 'styled-components';

const ListDiv = styled.div`
  margin: 5px 0;
  padding: 5px;
  position: relative;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

const ListSpan = styled.span`
  font-size: 1vw;
`;

const ListBtn = styled.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: white;
  color: red;
  font-size: 0.8vw;
  font-weight: 700;
  cursor: pointer;
`;

export const TodoList = ({ id, value }) => {
  const removeList = e => {
    let list = JSON.parse(localStorage.getItem('todos'));
    const clickTarget = e.target.parentElement;
    clickTarget.remove();
    list = list.filter(data => data.id !== parseInt(id));
    localStorage.setItem('todos', JSON.stringify(list));
  };

  return (
    <ListDiv id={id}>
      <ListSpan>{value}</ListSpan>
      <ListBtn onClick={removeList}>삭제</ListBtn>
    </ListDiv>
  );
};
