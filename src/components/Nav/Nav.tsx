import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn, cond } from 'utils/styles/styles';
import Icons from 'components/Icons';
import css from './Nav.module.scss';

const Nav = () => {
  const location = useLocation();
  const curPath = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className={css.container}>
      <h2 className={css.title}>REACT PRACTICE</h2>
      <ul className={css.listUl}>
        {NAV_LIST.map(({ id, title, path }) => {
          return (
            <li
              className={cn(css.listLi, cond(curPath === path, css.select))}
              key={id}
              onClick={() => navigate(path)}
            >
              {curPath !== path && <Icons title={title} />}
              {curPath === path && (
                <span className={css.listTitle}>{title.toUpperCase()}</span>
              )}
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
