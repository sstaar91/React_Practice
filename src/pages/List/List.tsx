import React, { useEffect, useState } from 'react';
import Icons from 'components/Icons';
import { ListType } from 'types/listType';
import css from './List.module.scss';

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <section className={css.container}>
      <h2 className={css.title}>PROJECT LIST</h2>
      <p className={css.sub}>
        최근 순서대로 나열된 프로젝트 리스트입니다! 해당 프로젝트 구동 화면을
        확인하고 싶다면 Go 버튼을 누르세요
      </p>
      <div className={css.listWrap}>
        {list.map(({ id, project, title, description, func }: ListType) => {
          return (
            <div className={css.listBox} key={id}>
              <img
                className={css.descriptionImg}
                src={`/images/${project}.png`}
                alt="project"
              />
              <div className={css.descriptionBox}>
                <h3 className={css.listTitle}>{title}</h3>
                <span>{description}</span>
                <strong className={css.subTitle}>주요 기능</strong>
                <div className={css.functionBox}>
                  {func.map(({ id, title, description }) => {
                    return (
                      <span className={css.functionCard} key={id}>
                        <Icons title={title} /> {description}
                      </span>
                    );
                  })}
                </div>
              </div>
              <button className={css.moveBtn}>👉 Go</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
