import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Time from '../Time';
import TodoList from '../TodoList';
import * as S from './ListForm.style';

const ListForm = () => {
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
    <S.Main>
      <S.Title>
        <Time />
        <S.WelcomeText>{userName} 님의 일상을 기록하세요</S.WelcomeText>
      </S.Title>
      <S.WriteForm>
        <S.ListInput
          required
          tyoe="text"
          placeholder="✍️"
          maxLength={20}
          value={listText}
          onChange={writeText}
        />
        <input type="submit" onClick={writeSubmit} hidden />
      </S.WriteForm>
      <S.ListDiv>
        {lists?.map(data => {
          return <TodoList key={data.id} id={data.id} value={data.text} />;
        })}
      </S.ListDiv>
      <S.LogOut onClick={logoutUser}>로그아웃</S.LogOut>
    </S.Main>
  );
};

export default ListForm;
