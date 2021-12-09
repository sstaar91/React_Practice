import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { fade_in } from '../styles/Mixin';

const WriteForm = styled.form`
  animation-duration: 2s;
  animation-name: ${fade_in};
`;

const WriteName = styled.input`
  text-align: center;
  padding: 10px 30px;
  width: 40vw;
  border: none;
  font-size: 2vw;

  &:focus {
    outline: none;
    place-content: none;
    border-bottom: 1px solid lightgray;
  }

  &:focus::placeholder {
    color: white;
  }
`;

export const MainLogin = () => {
  const [loginName, setLoginName] = useState('');

  const nameInput = e => {
    setLoginName(e.target.value);
  };

  const navigate = useNavigate();

  const loginSubmitHandle = e => {
    e.preventDefault();
    if (loginName === '') {
      alert('이름을 입력해주세요.');
    } else {
      localStorage.setItem('name', loginName);
      navigate('/todo');
    }
  };

  return (
    <>
      <WriteForm>
        <WriteName
          required
          tyoe="text"
          placeholder="당신은 누구인가요?"
          maxLength={5}
          value={loginName}
          onChange={nameInput}
        />
        <input type="submit" onClick={loginSubmitHandle} hidden />
      </WriteForm>
    </>
  );
};
