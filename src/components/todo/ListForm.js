import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Time } from './Time';
import { TodoList } from './TodoList';

import { fade_in } from '../../styles/Mixin';
import { useNavigate } from 'react-router';

const Main = styled.section`
  animation-duration: 2s;
  animation-name: ${fade_in};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.span`
  margin: 20px 0;
  font-size: 3.5vw;
  font-weight: 700;
`;

const WriteForm = styled.form`
  margin: 20px 0;
`;

const ListInput = styled.input`
  text-align: center;
  padding: 10px 30px;
  width: 40vw;
  border: none;
  font-size: 1.2vw;

  &::placeholder {
    font-size: 1.5vw;
  }

  &:focus {
    outline: none;
    place-content: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const ListDiv = styled.div`
  padding: 20px;
  width: 30vw;
  height: 60vh;
  border: 1px solid lightgray;
  border-radius: 20px;
  overflow: scroll;
`;

const LogOut = styled.button`
  margin-top: 20px;
  border: none;
  background-color: white;
  color: red;
  font-weight: 700;
  cursor: pointer;
`;

export const ListForm = () => {
  const [listText, setListText] = useState('');
  const [lists, setLists] = useState([]);

  const userName = localStorage.getItem('name');

  useEffect(() => {
    const loadList = JSON.parse(localStorage.getItem('todos'));
    loadList !== null ? setLists(loadList) : setLists([]);
  }, []);

  const writeText = e => {
    setListText(e.target.value);
  };

  const writeSubmit = e => {
    e.preventDefault();
    if (listText !== '') {
      const listValue = { id: Date.now(), text: listText };
      lists.push(listValue);
      localStorage.setItem('todos', JSON.stringify(lists));
      setListText('');
    }
  };

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('todos');
    navigate('/');
  };

  return (
    <Main>
      <Title>
        <Time />
        <WelcomeText>{userName} 님의 일상을 기록하세요</WelcomeText>
      </Title>
      <WriteForm>
        <ListInput
          required
          tyoe="text"
          placeholder="✍️"
          maxLength={20}
          value={listText}
          onChange={writeText}
        />
        <input type="submit" onClick={writeSubmit} hidden />
      </WriteForm>
      <ListDiv>
        {lists?.map(data => {
          return <TodoList key={data.id} id={data.id} value={data.text} />;
        })}
      </ListDiv>
      <LogOut onClick={logoutUser}>로그아웃</LogOut>
    </Main>
  );
};
