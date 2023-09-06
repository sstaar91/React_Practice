import React from 'react';
import css from './Nav.module.scss';
import Icons from 'components/Icons';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className={css.container}>
      <h2 className={css.title}>REACT PRACTICE</h2>
      <ul className={css.listUl}>
        {NAV_LIST.map(({ id, title, path }) => {
          return (
            <li className={css.listLi} key={id} onClick={() => navigate(path)}>
              <Icons title={title} />
              <span className={css.listTitle}>{title.toUpperCase()}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

const NAV_LIST: NavList[] = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'list', path: '/list' },
];

interface NavList {
  id: number;
  title: string;
  path: string;
}
