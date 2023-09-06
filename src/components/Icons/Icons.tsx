import React from 'react';

interface Props {
  title: string;
}

const Icons = ({ title }: Props) => {
  return <img src={`/icons/${title}.svg`} alt={title} />;
};

export default Icons;
