import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ListForm } from './ListForm';

import { fade_in, fade_out } from '../../styles/Mixin';

const WelcomSection = styled.section``;

const WriteForm = styled.form`
  animation-duration: 2s;
  animation-name: ${props => (props.toggle ? fade_in : fade_out)};
  display: ${props => (props.toggle ? 'inherit' : 'none')};
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

export const TodoLogin = () => {
  const [loginName, setLoginName] = useState('');
  const [toggleDisplay, setToggleDisplay] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('name') !== null) {
      setLoginName(localStorage.getItem('name'));
      setToggleDisplay(!toggleDisplay);
    }
  }, []);

  const nameInput = e => {
    setLoginName(e.target.value);
  };

  const loginSubmitHandle = e => {
    e.preventDefault();
    localStorage.setItem('name', loginName);
    setToggleDisplay(!toggleDisplay);
  };

  return (
    <WelcomSection>
      <WriteForm toggle={toggleDisplay}>
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
      <ListForm loginName={loginName} toggle={toggleDisplay} />
    </WelcomSection>
  );
};
