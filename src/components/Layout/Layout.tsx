import React, { ReactNode } from 'react';
import css from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};

export default Layout;
