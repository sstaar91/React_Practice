import React from 'react';
import { cn } from 'utils/styles/styles';
import Icons from 'components/Icons';
import css from './Home.module.scss';

const Home = () => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>안녕하세요! 김명성입니다 👋</h2>
      <p className={css.desBox}>
        <span>
          해당 프로젝트는 리액트를 활용한 다양한 미니 프로젝트를 모아 놓은
          페이지입니다.
        </span>
      </p>
      <p className={css.desBox}>
        <h3 className={css.desTitle}>STACK</h3>
        <div className={css.cardBox}>
          {STACK_LIST.map(({ id, title }) => {
            return (
              <div className={css.cardBg} key={id}>
                <Icons title={title} size="large" />
              </div>
            );
          })}
        </div>
      </p>
      <p className={css.desBox}>
        <h3 className={css.desTitle}>RECENTLY PROJECT</h3>
        <div className={css.cardBox}>
          {PROJECT_LIST.map(({ id, title }) => {
            return (
              <div className={cn(css.cardBg, css.wide)} key={id}>
                <h3 className={css.cardTitle}>{title}</h3>
                <button className={css.moveBtn}>👉 GO</button>
              </div>
            );
          })}
        </div>
      </p>
    </section>
  );
};

export default Home;

const STACK_LIST: ListType[] = [
  { id: 1, title: 'HTML' },
  { id: 2, title: 'SASS' },
  { id: 3, title: 'REACT' },
  { id: 4, title: 'TYPESCRIPT' },
];

const PROJECT_LIST: ListType[] = [
  { id: 1, title: 'RESAT Farming \nChallenge' },
  { id: 2, title: 'NOMAD Coders : \nMomentum App' },
];

interface ListType {
  id: number;
  title: string;
}
