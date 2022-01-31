import React from 'react';
import style from '../App.css';

const Sidebar = props => {
  const { children } = props;

  return (
  	<div className={style.layout}>
      <header className={style.header}></header>
      <aside className={style.aside}></aside>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default <Sidebar></Sidebar>;