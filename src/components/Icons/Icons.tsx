import React from 'react';
import css from './Icons.module.scss';

interface Props {
  title: string;
  size?: string;
}

const Icons = ({ title, size = 'small' }: Props) => {
  return <img className={css[size]} src={`/icons/${title}.svg`} alt={title} />;
};

export default Icons;
